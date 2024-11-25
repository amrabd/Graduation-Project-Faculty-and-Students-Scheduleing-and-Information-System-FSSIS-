import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import 'react-toastify/dist/ReactToastify.css';
import { fetchDropLists } from '../../AddInfo/addInfoSlice';
import Loader from '../../../UI/Loader';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const FirstColumnCellLabs = ({doc,show, place,onToggle, subject, section, group, dep,day, start , year,id , duration}) => {
    const [formData, setFormData] = useState({
        classId:id,
        course: subject,
        ta: doc,
        duration: duration,
        year: year,
        department: dep,
        section: section,
    });

    const customStyles = {
      control: (provided) => ({
          ...provided,
          whiteSpace: 'normal', // Allow text to wrap
          minHeight: '2.5rem',  // Adjust to your needs
      }),
      singleValue: (provided) => ({
          ...provided,
          whiteSpace: 'normal', // Allow text to wrap
      }),
      valueContainer: (provided) => ({
          ...provided,
          whiteSpace: 'normal', // Allow text to wrap
      }),
      placeholder: (provided) => ({
          ...provided,
          whiteSpace: 'normal', // Allow placeholder text to wrap
      })
  };

    const handleChange = (field, selectedOption) => {
        setFormData({ ...formData, [field]: selectedOption.value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.put('https://localhost:44377/api/Admin/Update-Class', formData, {
              headers: {
                  'Content-Type': 'application/json'
              }
          });
          console.log('Response:', response.data);
          toast.success('Class Updated successfully!');
          window.location.reload();
      } catch (error) {
          toast.error('Error updating class:', error);
          // Handle error during submission
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

    if(show) {
        return (
            <form className='bg-gray-300 w-80 h-96 rounded-r-lg border-l-8 border-solid flex-col border-blue-800 flex justify-center items-center opacity-100 transition-all delay-100 hover:opacity-100'>
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
                <div className='flex gap-2  justify-center items-center  mx-2'>
                    <Select
                     options={coursesOptions} 
                     styles={customStyles}
                     placeholder={`Course: ${subject}`}
                     className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                     onChange={(selectedOption) => handleChange('course', selectedOption)}
                      />
                    <Select
                    options={tAsOptions}
                    styles={customStyles}
                     placeholder={`TA: ${doc}`}  
                     className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                     onChange={(selectedOption) => handleChange('ta', selectedOption)}
                     />
                </div>
                <div className='flex gap-2 justify-center items-center  mx-2 mt-3'>
                    <Select 
                    options={durationOptions} 
                    placeholder={`Duration: ${duration}`}
                    styles={customStyles}
                     className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                     onChange={(selectedOption) => handleChange('duration', selectedOption)}
                     />
                    <Select options={yearOptions} 
                    placeholder={`Year: ${year}`}
                    styles={customStyles}
                     className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                     onChange={(selectedOption) => handleChange('year', selectedOption)}
                     />
                </div>
                <div className='flex gap-2 justify-center items-center  mx-2 mt-3'>
                    <Select 
                    options={departmentsOptions}
                    styles={customStyles}
                     placeholder={`Department: ${dep}`}
                      className='w-36 bg-[#0060e4] text-black pl-2 rounded-md ' 
                      onChange={(selectedOption) => handleChange('department', selectedOption)}
                      />
                    <Select
                     options={sectionsOptions}
                     styles={customStyles}
                      placeholder={`Section: ${section}`}
                       className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                       onChange={(selectedOption) => handleChange('section', selectedOption)}
                       />
                </div>
            </div>
            <div className='flex gap-5 mt-3'>
                <button className='bg-red-700 ml-5  mt-1 py-1 px-4' onClick={onToggle}>Cancel</button>
                <button className='bg-green-500 ml-0  mr-5 mt-1 py-1 px-4' onClick={handleSubmit}>Submit</button>
            </div>
        </form >
    )
    }
    return (
        <div className={`border-solid border-l-8 relative border-[#0060E4] bg-[#006BFF8A] flex items-center justify-center flex-col text-white text-xl rounded-r-[15px] font-bold h-[100%]`}>
            <p className='m-1'>{doc}</p>
            <p className='m-1'>{subject}</p>
            <p className='m-1'>{place}</p>
            {year && <p className='m-1'>Year: {year}</p>}
            {section && <p className='m-1'>section: {section}</p>}
            {group && <p className='m-1'>group: {group}</p>}
            <p className='m-1'>{dep}</p>
        </div>
    )
}

export default FirstColumnCellLabs