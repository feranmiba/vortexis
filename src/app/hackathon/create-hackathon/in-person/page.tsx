"use client"
import React from 'react'
import HackathonHeaders from '@/components/HackathonHeaders'

function InPerson() {
  const [formData, setFormData] = React.useState({
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

<HackathonHeaders title="Create a new in-person hackathons" />

<section className="p-6 mt-10 max-w-6xl mx-auto">
<div>
            <h1 className='text-3xl'>Upholding Hackathon Excellence</h1>
            <p className='p-5 mt-2 text-2xl font-light'>Vortexis promotes only high-quality hackathons, fostering a global community of innovators. 
This in-person event requires on-site participation and project submissions via Vortexis.
A Code of Conduct will be enforced for all attendees, and Vortexis may unpublish any event that
violates our standards or Terms of Service.</p>
        </div>


        <form className='flex flex-col gap-10'>
          <div className='w-full md:w-[35%] flex flex-col gap-2 text-xl'>
            <label htmlFor="hackathon_name">Hackathon Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md outline-none"
          />
          <p className='text-[#8F9098]'>You can change this later</p>
          </div>


          <div className='w-full md:w-[35%] flex flex-col gap-2 text-xl'>
            <label htmlFor="hackathon_start">When does your hackathon submission period begin? 
            (This is the expected day participants will start building.)</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md outline-none"
          />
          <p className='text-[#8F9098]'>(mm/dd/yyyy)</p>
          </div>
          <div className='w-[45%]'>
          <button className='bg-[#2E0BF4] text-white px-4 py-2 text-xl'>Create my draft hackathon</button>

          </div>
        
        </form>

    </section>
    
    </>
  )
}

export default InPerson