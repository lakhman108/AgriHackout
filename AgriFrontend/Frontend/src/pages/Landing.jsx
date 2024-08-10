import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

function Landing() {
  return (
    <>
    <section id="landing">
    <div className='flex flex-col items-center'>
        <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        The only Agricultural Info <br /> you&rsquo;ll ever need! 👇
      </h2>
      <form className='sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-3'>
        <Input placeholder="Search For Your Desired Crops" className="h-full flex-1 py-4 px-4"/>
        <Button className="h-full" type="submit" variants="destructive">Search!</Button>
      </form>
    </div>
    </section>
    </>
  )
}

export default Landing
