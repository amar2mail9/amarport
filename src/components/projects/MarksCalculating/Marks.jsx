import React from 'react'

export default function Marks() {
  return (
    <section className='w-9/12 mx-auto border p-4 shadow-xl border-gray-400 bg-gray-200 rounded-lg mt-10'>

        <h3 className='text-xl text-center text-gray-700 font-semibold md:text-2xl'>Students Marks Calculate</h3>

        <section className='flex items-center justify-between '>
            <h3 className='text-gray-500 '>Add New Students</h3>
            <button className='bg-slate-700 text-gray-200 md:px-10 md:py-3 py-1 px-6  rounded-lg md:text-xl text-lg hover:bg-gray-500'>Add</button>

            
        </section>
      
                
                 <div className='flex items-center gap-4 h-16 bg-green-700'> 
                    
                    <div className='flex md:flex-row flex-col w-full gap-4'>
                        {/* Subject */}
                      <div className='flex flex-col w-full items-start'>
                        <label className=' ml-2 text-lg font-semibold text-gray-500' >Subject Name:</label>
                      <input 
                            type="text"
                            placeholder='Subject Name' 
                            autoFocus={true} 
                            className='border w-full py-1 px-4 rounded-md  outline-none border-cyan-700 bg-gray-300 text-gray-700'
                        />
                      </div>

                      {/* Marks */}
                      <div className='flex flex-col w-full'>
                        <label className='ml-2 text-lg font-semibold text-gray-500' >Marks:</label>
                      <input 
                            type="text"
                            placeholder='Marks' 
                            autoFocus={true} 
                            className='border w-full py-1 px-4 rounded-md  outline-none border-cyan-700 bg-gray-300 text-gray-700'
                        />
                      </div>
                   </div>
                   <button className='bg-green-500 text-white py-2 px-4  rounded-lg '>Save</button>
                   </div>
            
                
  
      
    </section>
  )
}
