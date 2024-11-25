import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { fetchDropLists } from './addInfoSlice';
import Loader from '../../UI/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toastifyOverrides.css'; // Import custom CSS for Toastify


const AddInfoHalls = ({ day, start, cancel, hallNumber }) => {
    const hallNames = {
        1: 'مدرج1',
        2: 'مدرج2',
        3: 'مدرج3',
        4: 'مدرج4',
        5: 'مدرج5',
        6: 'مدرج6',
        7: 'مدرج7',
        8: 'مدرج8',
        9: 'مدرج9',
        10: 'مدرج0أ',
        11: 'مدرج1أ',
        12: 'مدرج2أ',
        13: 'مدرج3أ',
        14: 'مدرج4أ'
    };
    const hallName = hallNames[hallNumber];
    
    const [formData, setFormData] = useState({
        course: '',
        professor: '',
        duration: '',
        year: '',
        department: '',
        groupNumber: ''
    });

    const handleChange = (field, selectedOption) => {
        setFormData({ ...formData, [field]: selectedOption.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = {
            course: formData.course,
            professor: formData.professor,
            duration: parseInt(formData.duration, 10), // convert to integer if needed
            year: parseInt(formData.year, 10), // convert to integer if needed
            department: formData.department,
            day,
            start: parseInt(start, 10),
            hallName,
            groupNumber: parseInt(formData.groupNumber, 10)
        };

        try {
            const response = await fetch('https://localhost:44377/api/Admin/addLecture', {
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
        return <Loader />;
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
    const groupOptions = [
        { value: null, label: "null" },
        { value: 1, label: 1 },
        { value: 2, label: 2 },
    ];

    const coursesOptions = dropLists.courses ? convertToOptions(dropLists.courses) : [];
    const departmentsOptions = dropLists.departments ? convertToOptions(dropLists.departments) : [];
    const professorsOptions = dropLists.professors ? convertToOptions(dropLists.professors) : [];

    return (
        <form onSubmit={handleSubmit} className='bg-gray-300 w-80 h-52 rounded-r-lg border-l-8 border-solid flex-col border-blue-800 flex justify-center items-center opacity-100 transition-all delay-100 hover:opacity-100'>
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
                <div className='flex gap-2 mx-2 mb-2'>
                    <Select
                        options={coursesOptions}
                        placeholder="Course"
                        className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                        onChange={(selectedOption) => handleChange('course', selectedOption)}
                    />
                    <Select
                        options={professorsOptions}
                        placeholder="Prof"
                        className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                        onChange={(selectedOption) => handleChange('professor', selectedOption)}
                    />
                </div>
                <div className='flex gap-2 mx-2 mt-3'>
                    <Select
                        options={durationOptions}
                        placeholder="Duration"
                        className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                        onChange={(selectedOption) => handleChange('duration', selectedOption)}
                    />
                    <Select
                        options={yearOptions}
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
                        options={groupOptions}
                        placeholder="GroupNumber"
                        className='w-36 bg-[#0060e4] text-black pl-2 rounded-md'
                        onChange={(selectedOption) => handleChange('groupNumber', selectedOption)}
                    />
                </div>
            </div>
            <div className='flex gap-5'>
                <button type="button" className='bg-red-700 ml-5 mt-3 py-1 px-4' onClick={cancel}>Cancel</button>
                <button type="submit" className='bg-green-500 ml-0 mr-5 mt-3 py-1 px-4'>Submit</button>
            </div>
        </form>
    );
};

export default AddInfoHalls;
