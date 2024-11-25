import React, { useEffect, useState } from 'react' 
import SecondColumnCell from '../UserCells/SecondColumnCell/SecondColumnCell';
import axios from 'axios';
import Loader from '../../UI/Loader';
const TeachingStaffBodySchedule = ({ day }) => {
    const [data, setData] = useState(null);
    const [professors, setProfessors] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://localhost:44377/api/Admin/GetDropListsDetails'); // Replace with your actual API endpoint
          const result = await response.json();
          setData(result);
          if (result.professors) {
            setProfessors(result.professors);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://localhost:44377/api/Admin/GetAllLectures')
      .then(response => {
        setLectures(response.data);
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

function generateFilters(day, profs, startHour, endHour, lectures) {
    let filters = {};    
    profs.forEach(prof => {
        filters[prof] = [];
        for (let start = startHour; start <= endHour; start++) {
            let filteredData = lectures.find(e =>
                e.day.toLowerCase() === day.toLowerCase() && e.professor === prof && e.start === start
            );
            filters[prof].push(filteredData);
        }
    });
    
    return filters;
}

let filters = generateFilters(day, professors, 8, 19, lectures);
console.log(filters);

const generateRows = (profs, filters) => {
    return profs.map(prof => {
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
              <SecondColumnCell 
              subject={currentFilter?.course}
              year={currentFilter?.year}
              dep={currentFilter?.department}
              group={currentFilter?.groupNumber}
              place={currentFilter?.hallName}
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
            {generateRows(professors, filters)}
            {/* <tr>
            <td className='time'>{profs[0]}</td>
                <td colSpan={filters[profs[0]][0]?.duration}>
                   {filters[profs[0]][0]?.content}
                </td>
               { filters[profs[0]][0]?.duration >= 2 ? null :
                <td colSpan={filters[profs[0]][1]?.duration}>
                    {filters[profs[0]][1]?.content}
                </td>
                }
                { filters[profs[0]][0]?.duration >= 3 || filters[profs[0]][1]?.duration >= 2  ? null :
                <td colSpan={filters[profs[0]][2]?.duration}>
                    {filters[profs[0]][2]?.content}
                </td>
                }
                { filters[profs[0]][0]?.duration >= 4 || filters[profs[0]][1]?.duration >= 3 ||  filters[profs[0]][2]?.duration >= 2 ?  null :
                    <td colSpan={filters[profs[0]][3]?.duration}>
                        {filters[profs[0]][3]?.content}
                    </td>
                }
                { filters[profs[0]][1]?.duration >= 4 || filters[profs[0]][2]?.duration >= 3 ||  filters[profs[0]][3]?.duration >= 2 ?  null :
                    <td colSpan={filters[profs[0]][4]?.duration}>
                        {filters[profs[0]][4]?.content}
                    </td>
                }
                { filters[profs[0]][2]?.duration >= 4 || filters[profs[0]][3]?.duration >= 3 ||  filters[profs[0]][4]?.duration >= 2 ?  null :
                    <td colSpan={filters[profs[0]][5]?.duration}>
                        {filters[profs[0]][5]?.content}
                    </td>
                }
                { filters[profs[0]][3]?.duration >= 4 || filters[profs[0]][4]?.duration >= 3 ||  filters[profs[0]][5]?.duration >= 2 ?  null :
                    <td colSpan={filters[profs[0]][6]?.duration}>
                        {filters[profs[0]][6]?.content}
                    </td>
                }
                { filters[profs[0]][4]?.duration >= 4 || filters[profs[0]][5]?.duration >= 3 ||  filters[profs[0]][6]?.duration >= 2 ?  null :
                    <td colSpan={filters[profs[0]][7]?.duration}>
                        {filters[profs[0]][7]?.content}
                    </td>
                }
                { filters[profs[0]][5]?.duration >= 4 || filters[profs[0]][6]?.duration >= 3 ||  filters[profs[0]][7]?.duration >= 2 ?  null :
                    <td colSpan={filters[profs[0]][8]?.duration}>
                        {filters[profs[0]][8]?.content}
                    </td>
                }
                { filters[profs[0]][6]?.duration >= 4 || filters[profs[0]][7]?.duration >= 3 ||  filters[profs[0]][8]?.duration >= 2 ?  null :
                    <td colSpan={filters[profs[0]][9]?.duration}>
                        {filters[profs[0]][9]?.content}
                    </td>
                }
                { filters[profs[0]][7]?.duration >= 4 || filters[profs[0]][8]?.duration >= 3 ||  filters[profs[0]][9]?.duration >= 2 ?  null :
                    <td colSpan={filters[profs[0]][10]?.duration}>
                        {filters[profs[0]][10]?.content}
                    </td>
                }
                { filters[profs[0]][8]?.duration >= 4 || filters[profs[0]][9]?.duration >= 3 ||  filters[profs[0]][10]?.duration >= 2 ?  null :
                    <td colSpan={filters[profs[0]][11]?.duration}>
                        {filters[profs[0]][11]?.content}
                    </td>
                }
            </tr> */}
        </>
    )
}

export default TeachingStaffBodySchedule