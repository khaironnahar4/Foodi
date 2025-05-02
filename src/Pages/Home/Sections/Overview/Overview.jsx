import React from 'react'

function Overview() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20'>
        <div className='flex flex-col items-center text-center'>
            <h1 className='text-4xl'>1287<span className='text-[var(--color-primary)]'>+</span> </h1>
            <h2>VISITORS DAILY</h2>
        </div>
        <div className='flex flex-col items-center text-center'>
            <h1 className='text-4xl'>578<span className='text-[var(--color-primary)]'>+</span> </h1>
            <h2>DELIVERIES MONTHLY</h2>
        </div>
        <div className='flex flex-col items-center text-center'>
            <h1 className='text-4xl'>1440<span className='text-[var(--color-primary)]'>+</span> </h1>
            <h2>POSITIVE FEEDBACK</h2>
        </div>
        <div className='flex flex-col items-center text-center'>
            <h1 className='text-4xl'>40<span className='text-[var(--color-primary)]'>+</span> </h1>
            <h2>AWARDS AND HONORS</h2>
        </div>
    </section>
  )
}

export default Overview