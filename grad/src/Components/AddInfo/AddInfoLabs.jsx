import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select'
import { fetchDropLists } from './addInfoSlice';
import Loader from '../../UI/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toastifyOverrides.css'; // Import custom CSS for Toastify

const AddInfoLabs = ({ day,start, cancel, labNumber  }) => {
    const labNames = {
        1: '0أ',
        2: '0ب',
        3: '0ج',
        4: '0د',
        5: '0ه',
        6: '1أ',
        7: '1ب',
        8: '1ج',
        9: '1د',
        10: '1ه',
        11: '2أ',
        12: '2ب',
        13: '2ج',
        14: '2د',
        15: '2ه',
        16: '3أ',
        17: '3ب',
        18: '3ج',
        19: '3د',
        20: '3ه',
        21: '4أ',
        22: '4ب',
        23: '4ج',
        24: '4د',
        25: '4ه'
    };
    const labName = labNames[labNumber];
    const [formData, setFormData] = useState({
        course: '',
        duration: '',
        year: '',
        department: '',
        section: '',
        ta: '',
        section: ''
    });

    const handleChange = (field, selectedOption) => {
        setFormData({ ...formData, [field]: selectedOption.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const dataToSend = {
          course: formData.course,
          ta: formData.ta,
          duration: parseInt(formData.duration, 10), // convert to integer if needed
          year: parseInt(formData.year, 10), // convert to integer if needed
          department: formData.department,
          day,
          start: parseInt(start, 10),
          labName,
          section: parseInt(formData.section, 10)
      };

      try {
          const response = await fetch('https://localhost:44377/api/Admin/addclass', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataToSend)
          });

          if (!response.ok) {
              const errorDetail = await response.text();
              throw new Error(`Network response was not ok: ${errorDetail}`);
          }
          const contentType = response.headers.get('Content-Type');
          let result;
          if (contentType && contentType.includes('application/json')) {
              result = await response.json();
          } else {
              result = await response.text();
          }
          toast.success('Lecture added successfully!');
              window.location.reload();
      } catch (error) {
          toast.error(`Error: ${error.message}`);
      }
  };

    const dispatch = useDispatch();
    const dropLists = useSelector((state) => state.dropLists.data);
    const dropListsStatus = useSelector((state) => state.dropLists.status);
    const error = useSelector((state) => state.dropLists.error);
    useEffect(() => {
      if (dropListsStatus === 'idle') {
        dispatch(fetchDropLists());
      }
    }, [dropListsStatus, dispatch]);
  
    if (dropListsStatus === 'loading') {
      return <Loader/>;
    }
  
    if (dropListsStatus === 'failed') {
      return <div>Error: {error}</div>;
    }
  
    function convertToOptions(array) {
        return array.map(item => ({
          value: item,
          label: item
        }));
      }
      
    const yearOptions = [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: 4, label: 4 }
    ];

    const durationOptions = [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: 4, label: 4 }
    ];
    
      const coursesOptions = dropLists.courses ? convertToOptions(dropLists.courses) : [];
      const departmentsOptions = dropLists.departments ? convertToOptions(dropLists.departments) : [];
      const sectionsOptions = dropLists.sections ? convertToOptions(dropLists.sections) : [];
      const tAsOptions = dropLists.tAs ? convertToOptions(dropLists.tAs) : [];

    return (
        <form onSubmit={handleSubmit} className='bg-gray-300  w-80 h-52 rounded-r-lg border-l-8 border-solid flex-col border-blue-800 flex justify-center items-center opacity-100 transition-all delay-100 hover:opacity-100'>
            <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            theme="light"
            />
            <input type="hidden" name="day" value={day} /> {/* Hidden input for day */}
            <input type="hidden" name="startTime" value={start} /> {/* Hidden input for startTime */}
            <div className='flex flex-col'>
                <div className='flex gap-2 mx-2'>
                    <Select
                     options={coursesOptions} 
                     placeholder="Course"
                     className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                     onChange={(selectedOption) => handleChange('course', selectedOption)}
                      />
                    <Select
                    options={tAsOptions}
                     placeholder="Ta" 
                     className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                     onChange={(selectedOption) => handleChange('ta', selectedOption)}
                     />
                </div>
                <div className='flex gap-2 mx-2 mt-3'>
                    <Select 
                    options={durationOptions} 
                    placeholder="Duration"
                     className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                     onChange={(selectedOption) => handleChange('duration', selectedOption)}
                     />
                    <Select options={yearOptions} 
                    placeholder="Year"
                     className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                     onChange={(selectedOption) => handleChange('year', selectedOption)}
                     />
                </div>
                <div className='flex gap-2 mx-2 mt-3'>
                    <Select 
                    options={departmentsOptions}
                     placeholder="Department"
                      className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                      onChange={(selectedOption) => handleChange('department', selectedOption)}
                      />
                    <Select
                     options={sectionsOptions}
                      placeholder="Section"
                       className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                       onChange={(selectedOption) => handleChange('section', selectedOption)}
                       />
                </div>
            </div>
            <div className='flex gap-5 mt-3'>
                <button className='bg-red-700 ml-5  mt-1 py-1 px-4' onClick={cancel}>Cancel</button>
                <button className='bg-green-500 ml-0  mr-5 mt-1 py-1 px-4'>Submit</button>
            </div>
        </form >
    )
}

export default AddInfoLabs