import React from 'react'
import { FileImageIcon } from 'lucide-react'

function Details() {
  return (
    <>
    <form>
        <div>
            <label className='text-2xl text-[#2F3036]'>Hackathon Name</label>
            <input 
            type='text'
            placeholder='Enter Hackathon Name'
            required
            name='hackathon_name'
            className='w-full rounded-2xl py-3 px-3 border outline-none border-[#C5C6CC] mt-3'
            />
        </div>

        <div className='flex justify-between mt-10'>
        <div className='w-[45%]'>
            <label className='text-2xl text-[#2F3036]'>Start Date</label>
            <input 
            type='date'
            placeholder='Start Date'
            required
            name='start_date'
            className='w-full rounded-2xl py-3 px-3 border outline-none border-[#C5C6CC] mt-3'
            />
        </div>

        <div className='w-[45%]'>
            <label className='text-2xl text-[#2F3036]'>End Date</label>
            <input 
            type='date'
            placeholder='Enter Hackathon Name'
            required
            name='end_date'
            className='w-full rounded-2xl py-3 px-3 border outline-none border-[#C5C6CC] mt-3'
            />
        </div>

        </div>

        <div className='mt-10'>
  <label className="text-2xl text-[#2F3036]">Hackathon Banner</label>

  <div className="mt-3">
    <input
      type="file"
      name="banner"
      id="banner-upload"
      accept="image/png, image/jpeg, image/jpg"
      className="hidden"
    />

    <label
      htmlFor="banner-upload"
      className="flex flex-col items-center justify-center text-center gap-3 w-full border border-[#C5C6CC] rounded-2xl px-4 py-8 cursor-pointer bg-[#FAFAFA] hover:bg-[#f0f0f0] transition"
    >
      <div className="text-[#0B40EE] bg-[#0B40EE1A] p-3 flex justify-center items-center rounded-full">
        <FileImageIcon className="text-3xl" />
      </div>
      <div>
        <p className="text-[#2F3036] font-medium">Click to upload banner</p>
        <p className="text-sm text-gray-500">Accepts PNG, JPG, JPEG</p>
      </div>
    </label>
  </div>
</div>



        <div className='mt-10 flex flex-col'>
        <label className='text-2xl text-[#2F3036]'>Description</label>
        <textarea className='outline-none resize-none h-52 border-2 w-full border-[#C5C6CC] mt-3 rounded-2xl px-3 py-3' placeholder='Enter a detailed description of your hackathon' name='description'></textarea>
        </div>

        <div className='mt-10 flex flex-col'>
        <label className='text-2xl text-[#2F3036]'>Rules & Guidelines</label>
        <textarea className='outline-none resize-none h-52 border-2 w-full border-[#C5C6CC] mt-3 rounded-2xl px-3 py-3' placeholder='Enter rules & guidelines for participants' name='rules'></textarea>
        </div>


        <div className='mt-10'>
            <button className='bg-[#0B40EE] text-white py-2 px-8 rounded'>
                Next
            </button>
        </div>



    </form>
    
    
    </>
  )
}

export default Details