import React from 'react'
import HackathonHeaders from '@/components/HackathonHeaders'
import { Question, WhoToldYou } from '../form/utils/utils'

function RegisterForHackathon() {
  return (
   <>
   <HackathonHeaders title='Name of The Hackathon' />
      <section className="p-6 mt-10 max-w-6xl mx-auto">

        <div>
            <h1>Register</h1>
            <p>Please respect our community guidelines</p>
        </div>

        <form className='border-t-2 pt-5 mt-5 space-y-5'>
          <div>
            <label className='text-2xl'> Do you have teammates </label>
            <div className='flex gap-4 mt-5'>
            {Question.map((hack, index) => (
                <label key={index} className="flex items-center space-x-2 border-[#E4DEFE] border rounded-lg h-[48px] w-[45%] text-sm md:w-[253px] justify-start pl-5">
                  <input
                    type="checkbox"
                    name="hackathons"
                    value={hack}
                    // checked={formData.hackathons.includes(hack)}
                    // onChange={handleHackathonsChange}
                    className="custom-radio"                    />
                  <span className="text-[#282828]">{hack}</span>
                </label>
              ))}
            </div>

          </div>

          <div>
            <label className='text-2xl'> Who told you about (name of hackathon) </label>
            <div className='flex gap-4 mt-5'>
            {WhoToldYou.map((hack, index) => (
                <label key={index} className="flex items-center space-x-2 border-[#E4DEFE] border rounded-lg h-[48px] w-[45%] text-sm md:w-[253px] justify-start pl-5">
                  <input
                    type="checkbox"
                    name="hackathons"
                    value={hack}
                    // checked={formData.hackathons.includes(hack)}
                    // onChange={handleHackathonsChange}
                    className="custom-radio"                    />
                  <span className="text-[#282828]">{hack}</span>
                </label>
              ))}
            </div>

          </div>

          <div>
            <p className='text-2xl'>Elgibilty Requirements</p>

            <div className='space-x-3 mt-5'>
              <input type="checkbox" name="Agree" id="agree" />
              <label htmlFor="agree" className='text-xl'>I have read and agree to the <span className='text-[#009AFF]'>terms and conditions</span></label>
            </div>

            <div className='p-3 flex justify-between mt-5'>
              <ul>
                <li>Vortexis</li>
                <li>Vortexis</li>
              </ul>

              <ul>
                <li>Vortexis</li>
                <li>Vortexis</li>
              </ul>

            </div>


            <div className='space-x-3 mt-5'>
              <input type="checkbox" name="Agree" id="agree" />
              <label htmlFor="agree" className='text-xl'>I have read and agree to the <span className='text-[#009AFF]'>terms and conditions</span></label>
            </div>
          </div>

          <div>
            <button className='bg-blue-700'></button>
          </div>

        </form>
    
   </section>
   
   </>
  )
}

export default RegisterForHackathon