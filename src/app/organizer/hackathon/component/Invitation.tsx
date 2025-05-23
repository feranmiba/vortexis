import React from 'react'

function Invitation() {

    const role = [
        "Technology Role",
        "Aesthetic Role",
        "Financial Role"
    ]

  return (
    <>
     <section>
     <div className="space-y-3 mb-6">
        <h1 className="text-2xl font-bold">Invite Judges</h1>
        <p>Add judges to evaluate submissions for your hackathon.</p>
      </div>


      <form>
      <div>
            <label className='text-lg font-bold text-[#2F3036]'>Invite by Email</label>
            <input 
            type='text'
            placeholder='Enter email address'
            required
            name='email'
            className='w-full rounded-2xl py-3 px-3 border outline-none border-[#C5C6CC] mt-3'
            />
        </div>

        <div className='mt-10'>
            <label className='text-lg font-bold text-[#2F3036] mb-2'>Judge Role</label>
            <div className="w-full mt-3">
            <select
              className="w-full rounded-2xl border border-[#C5C6CC] px-4 py-3 outline-none"
              name="minimum_members"
            >
              {role.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>


        <div className='mt-10 flex flex-col'>
        <label className='text-lg text-[#2F3036]'>Instructions for Judges</label>
        <textarea className='outline-none resize-none h-24 border-2 w-full border-[#C5C6CC] mt-3 rounded-2xl px-3 py-3' placeholder='Enter any specific instructions or criteria for judges...' name='rules'></textarea>
        </div>

      </form>

      <div className="mt-10 flex justify-between">
        <button className="border-[#0B40EE] border text-[#0B40EE] py-2 px-8 rounded">
          Previous
        </button>

        <button className="bg-[#0B40EE] text-white py-2 px-8 rounded">
          Next
        </button>
      </div>

     </section>
    
    </>
  )
}

export default Invitation