import React, { useState } from 'react'
import { NavigationProps } from '@/components/Interface';

function Visibility( {onNext, onPrev} : NavigationProps ) {
    const initialNotifications = [
        { label: "Feature this hackathon on the homepage", checked: true },
    ]

    const [notifications, setNotifications] = useState(initialNotifications);
    
      const handleToggle = (idx: number) => {
        setNotifications((prev) =>
          prev.map((notif, i) =>
            i === idx ? { ...notif, checked: !notif.checked } : notif
          )
        );
      };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (onNext) {
          onNext();
        }
        // Handle form submission logic here
        console.log("Form submitted");
      }
    
      const previousButton = () => {
        if (onPrev) {
          onPrev();
        }
        console.log("Going to previous step");
      }  


  return (
    <>
    <section>
    <div className="space-y-3 mb-6">
        <h1 className="text-2xl font-bold">Visibility Settings</h1>
        <p>Control who can see and participate in your hackathon.</p>
      </div>

      <form onSubmit={handleSubmit}>

        <div className='flex justify-between'>
        <div className='space-y-3 shadow-2xl px-10 py-5 rounded-2xl border border-[#E4E4E4] w-[45%]'>
                <div className='flex items-center gap-3'>
                    <input
                    type='checkbox'
                    id='public-checkbox'
                    className="peer hidden"
                    />
                    
                    <label
                    htmlFor='public-checkbox'
                    className="w-5 h-5 inline-block rounded-full border border-gray-400 peer-checked:bg-blue-600 peer-checked:border-blue-600 relative cursor-pointer"
                    >
                    <span className="hidden peer-checked:block w-[10px] h-[10px] bg-white rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"></span>
                    </label>

                    <label htmlFor='public-checkbox' className="cursor-pointer select-none text-sm text-[#2F4883]">Public</label>
                </div>

                <div>
                    <p>Anyone can discover and participate in your hackathon</p>
                </div>
        </div>


        <div className='space-y-3 shadow-2xl px-10 py-5 rounded-2xl border border-[#E4E4E4] w-[45%]'>
                <div className='flex items-center gap-3'>
                    <input
                    type='checkbox'
                    id='private-checkbox'
                    className="peer hidden"
                    />
                    
                    <label
                    htmlFor='private-checkbox'
                    className="w-5 h-5 inline-block rounded-full border border-gray-400 peer-checked:bg-blue-600 peer-checked:border-blue-600 relative cursor-pointer"
                    >
                    <span className="hidden peer-checked:block w-[10px] h-[10px] bg-white rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"></span>
                    </label>

                    <label htmlFor='private-checkbox' className="cursor-pointer select-none text-sm text-[#2F4883]">Private</label>
                </div>

                <div>
                    <p>Only people with an access code can join your hackathon.</p>
                </div>
        </div>

        </div>

        <div className="mt-10 flex flex-col">
          <label className="text-lg text-[#2F3036]">Access Code (For Private Hackathons)</label>
          <textarea
            className="outline-none resize-none h-52 border-2 w-full border-[#C5C6CC] mt-3 rounded-2xl px-3 py-3"
            placeholder="Create an access code"
            name="aditional"
          />
        </div>

        <div className="mt-10">
        <div className="space-y-4">
          {notifications.map((notif, idx) => (
            <div key={idx} className="flex items-center justify-between w-[25%] pb-3">
              <span className="text-gray-800">{notif.label}</span>
              <button
                onClick={() => handleToggle(idx)}
                type="button"
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notif.checked ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notif.checked ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-between">
        <button className="border-[#0B40EE] border text-[#0B40EE] py-2 px-8 rounded cursor-pointer" onClick={previousButton}>
          Previous
        </button>

        <button className="bg-[#0B40EE] text-white py-2 px-8 rounded cursor-pointer" type='submit'>
          Next
        </button>
      </div>

      

      </form>


    </section>
    </>
  )
}

export default Visibility