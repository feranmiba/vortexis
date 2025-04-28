"use client"
import React, { useState } from 'react'

function Create() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    workEmail: '',
    phoneNumber: '',
    hackathonDetails: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <section className="p-6 mt-10 max-w-6xl mx-auto">
        <div className="text-center mb-8 text-[#717171] text-2xl">
          <h1 className="text-5xl font-bold mb-4 text-[#4D4D4D]">Run your next great online hackathons</h1>
          <p className="mb-2">For companies: Fill out the form below to speak with our team today.</p>
          <p>‍For students:  <a href='#' className='underline text-blue-800'> Click here </a>to begin hosting your hackathon on Vortexis.</p>
        </div>

        <form className="flex flex-wrap gap-4">
          <div className='w-full md:w-[48%] flex flex-col gap-4'>
            <label>First Name</label>
         
          </div>
          <div className='w-full md:w-[48%] flex flex-col gap-4'>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md outline-none"
          />
          </div>

          <div className='w-full md:w-[48%] flex flex-col gap-4'>
          <label>Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-2 border rounded-md outline-none"
          />
          </div>
          <div className='w-full md:w-[48%] flex flex-col gap-4'>
          <label>Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full  p-2 border rounded-md outline-none"
          />
          </div>
          <div className='w-full md:w-[48%] flex flex-col gap-4'>
          <label>Work Email</label>
          <input
            type="email"
            name="workEmail"
            value={formData.workEmail}
            onChange={handleChange}
            className="w-full p-2 border rounded-md outline-none"
          />
          </div>
          <div className='w-full md:w-[48%] flex flex-col gap-4'>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full  p-2 border rounded-md outline-none"
          />
          </div>
          <textarea
            name="hackathonDetails"
            placeholder="What is your hackathon all about?"
            value={formData.hackathonDetails}
            onChange={handleChange}
            className="w-full p-3 border rounded min-h-[150px] outline-none mt-10"
          ></textarea>



          <button className='bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200' type='submit'>
            Submit
          </button>
        </form>
      </section>
    </>
  )
}

export default Create
