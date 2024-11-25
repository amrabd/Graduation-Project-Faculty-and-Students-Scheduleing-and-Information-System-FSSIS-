import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DevicesRedBox = ({ img, name, no , id}) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            id: id, // Replace this with actual id if dynamic
            newStatus: selectedOption
        };
        try {
            const response = await fetch('https://localhost:44377/api/ITTechnical/update-status', {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Status updated successfully:', data);
                toast.success('Device status changed successfully!');
                window.location.reload();
            } else {
                console.error('Failed to update status:', response.statusText);
                // Handle the error here, e.g., display an error message
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle network errors here
        }
    };
    return (
        <div className='bg-[#A30000] h-96 w-80  rounded-xl flex justify-center items-center flex-col pt-2'>
            <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            theme="light"
            />
            <div className='h-18'>
                <img src={img} className='text-white mb-3' />
            </div>
            <div>
                <p className='text-2xl font-bold text-white mb-1'>{name}</p>
            </div>
            {no &&
                <div>
                    <p className='text-2xl font-bold text-white mb-1'>Device no.{no}</p>
                </div>
            }
            <div>
                <p className='text-2xl font-bold text-white mb-1'>Status:</p>
            </div>
            <div>
                <p className='text-2xl font-bold text-white mb-1'>Not Working</p>
            </div>
            <div>
            <h1 className='ml-[18%] text-white font-bold mb-1 mt-4'>Change Device Status:</h1>
            <form onSubmit={handleSubmit} className='ml-[10px]'>
                <select className='py-2 bg-[#A30000] border-solid border-white border-2 focus:outline-none rounded-lg px-1 outline-2 text-white font-bold' id="optionGroup" name="optionGroup" value={selectedOption} onChange={handleChange}>
                <optgroup>
                        <option hidden selected>Choose Status</option>
                        <option value="Good" className='text-xl bg-[#00A300]' >Good</option>
                        <option value="In Repair" className='text-xl bg-yellow-600'>In Repair</option>
                    </optgroup>
                </select>
                <button type="submit" className={`inline mx-auto ${selectedOption === '' ? "bg-[#832323] cursor-not-allowed" :  "hover:bg-white hover:text-black"} mt-4 ml-5`}>Submit</button>
            </form>
            </div>
        </div>)
}
 
export default DevicesRedBox