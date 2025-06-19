import React, { useState } from 'react'
import { FileImageIcon } from 'lucide-react'
import { NavigationProps } from '@/components/Interface';
import { toast } from 'react-toastify';



function Details({ onNext, data, setData }: NavigationProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const [localData, setLocalData] = useState(data || {});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files, type } = e.target as HTMLInputElement;
  
    if (type === "file" && files) {
      setLocalData({ ...localData, [name]: files[0] }); 
    } else {
      setLocalData({ ...localData, [name]: value }); 
    }
  };
  

  const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!localData.title?.trim()) {
      toast.error("Please enter a title for the hackathon", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }
  
    if (!localData.description?.trim()) {
      toast.error("Please enter a description", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }
  
    if (!localData.start_date?.trim()) {
      toast.error("Please enter a start date", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }
  
    if (!localData.end_date?.trim()) {
      toast.error("Please enter an ending date", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    const start = new Date(localData.start_date);
    const end = new Date(localData.end_date);
  
    if (start >= end) {
      toast.error("Start date must be before the end date", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }
  
    if (!localData.banner) {
      toast.error("Please upload a banner image", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }
  
    // ✅ All validations passed
    setData(localData);
    console.log("Data submitted:", localData);
  
    if (onNext) {
      onNext();
    }
  };
  

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
        setLocalData({ ...localData, "banner": file }); 
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
    <form onSubmit={handleContinue}>
        <div>
            <label className='text-2xl text-[#2F3036]'>Hackathon Name</label>
            <input 
            type='text'
            placeholder='Enter Hackathon Name'
            value={localData.title || ''}
            // required
            name='title'
            onChange={handleChange}
            className='w-full rounded-2xl py-3 px-3 border outline-none border-[#C5C6CC] mt-3'
            />
        </div>

        <div className='flex justify-between mt-10'>
        <div className='w-[45%]'>
            <label className='text-2xl text-[#2F3036]'>Start Date</label>
            <input 
            type='date'
            placeholder='Start Date'
            // required
            onChange={handleChange}
            name='start_date'
            className='w-full rounded-2xl py-3 px-3 border outline-none border-[#C5C6CC] mt-3 cursor-pointer'
            />
        </div>

        <div className='w-[45%]'>
            <label className='text-2xl text-[#2F3036]'>End Date</label>
            <input 
            type='date'
            placeholder='End date'
            // required
            onChange={handleChange}
            name='end_date'
            className='w-full rounded-2xl py-3 px-3 border outline-none border-[#C5C6CC] mt-3 cursor-pointer'
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
        onChange={handleFileChange}
      />

      <label
        htmlFor="banner-upload"
        className="flex flex-col items-center justify-center text-center gap-3 w-full border border-[#C5C6CC] rounded-2xl px-4 py-8 cursor-pointer bg-[#FAFAFA] hover:bg-[#f0f0f0] transition min-h-[200px]"
      >
        {!preview ? (
          <>
            <div className="text-[#0B40EE] bg-[#0B40EE1A] p-3 flex justify-center items-center rounded-full">
              <FileImageIcon className="text-3xl" />
            </div>
            <div>
              <p className="text-[#2F3036] font-medium">Click to upload banner</p>
              <p className="text-sm text-gray-500">Accepts PNG, JPG, JPEG</p>
            </div>
          </>
        ) : (
          <img
            src={preview}
            alt="Banner Preview"
            className="max-h-48 w-full object-contain rounded-xl"
          />
        )}
      </label>
    </div>
</div>



        <div className='mt-10 flex flex-col'>
        <label className='text-2xl text-[#2F3036]'>Description</label>
        <textarea className='outline-none resize-none h-52 border-2 w-full border-[#C5C6CC] mt-3 rounded-2xl px-3 py-3' placeholder='Enter a detailed description of your hackathon' name='description' onChange={handleChange}></textarea>
        </div>

        <div className='mt-10 flex flex-col'>
        <label className='text-2xl text-[#2F3036]'>Rules & Guidelines</label>
        <textarea className='outline-none resize-none h-52 border-2 w-full border-[#C5C6CC] mt-3 rounded-2xl px-3 py-3' placeholder='Enter rules & guidelines for participants' name='rules' onChange={handleChange}></textarea>
        </div>


        <div className='mt-10'>
            <button className='bg-[#0B40EE] text-white py-2 px-8 rounded cursor-pointer' type='submit'>
                Next
            </button>
        </div>



    </form>
    
    
    </>
  )
}

export default Details