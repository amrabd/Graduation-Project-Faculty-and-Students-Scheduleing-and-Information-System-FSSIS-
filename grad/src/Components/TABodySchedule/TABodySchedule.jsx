import React, { useEffect, useState } from 'react'
import FifthColumnCell from '../UserCells/FifthColumnCell/FifthColumnCell';
import Loader from '../../UI/Loader';
import axios from 'axios';

const TABodySchedule = ({day}) => {
    const [data, setData] = useState(null);
    const [tAs, setTAs] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://localhost:44377/api/Admin/GetDropListsDetails'); // Replace with your actual API endpoint
          const result = await response.json();
          setData(result);
          if (result.tAs) {
            setTAs(result.tAs);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    const [labs, setLabs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Fetch data from the API
      axios.get('https://localhost:44377/api/Admin/GetAllClasses')
        .then(response => {
          setLabs(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('There was an error fetching the data!', error);
          setError(error);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <Loader/>;
    if (error) return <p>Error: {error.message}</p>;

function generateFilters(day, TAs, startHour, endHour, labs) {
    let filters = {};    
    TAs.forEach(TA => {
        filters[TA] = [];
        for (let hour = startHour; hour <= endHour; hour++) {
            let filteredData = labs.find(e =>
                e.day.toLowerCase() === day.toLowerCase() && e.ta === TA && e.start === hour
            );
            filters[TA].push(filteredData);
        }
    });
    
    return filters;
}

let filters = generateFilters(day, tAs, 8, 19, labs);
console.log(filters);

const generateRows = (TAs, filters) => {
    return TAs.map(prof => {
      let columns = [];
      let skipCount = 0;
  
      for (let i = 0; i < 12; i++) {
        // If the skipCount is non-zero, skip this iteration
        if (skipCount > 0) {
          skipCount--;
          continue;
        }
  
        const currentFilter = filters[prof][i];
        if (currentFilter) {
          columns.push(
            <td key={`${prof}-${i}`} colSpan={currentFilter?.duration}>
              <FifthColumnCell 
              subject={currentFilter?.course}
              year={currentFilter?.year}
              section={currentFilter?.section}
              place={currentFilter?.labName}
              dep={currentFilter?.department}
              />
            </td>
          );
          // Set skipCount to the number of columns to skip based on the duration
          skipCount = currentFilter.duration - 1;
        } else {
          columns.push(
            <td key={`${prof}-${i}`} colSpan={1}>
            </td>
          );
        }
      }
  
      return (
        <tr key={prof}>
          <td className='time'>{prof}</td>
          {columns}
        </tr>
      );
    });
  };
  
    return (
        <>
            <tr className='text-center'>
                <td colSpan={16} className='bg-[#0060E4] text-white text-5xl font-bold sticky z-50 top-[166px]'>{day}</td>
            </tr>
            {generateRows(tAs, filters)}
        </>
    )
}

export default TABodySchedule