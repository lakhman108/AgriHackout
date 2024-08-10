import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import InfiniteCarousel from './InfiniteCarousel'
import CardGrid from '@/components/cardgrid'
function Landing() {
  return (
    <>
    <section id="landing">
    <div className='flex flex-col items-center'>
        <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        The only <span className='text-green-500 '>Agricultural</span> Info <br /> you&rsquo;ll ever need! 👇
      </h2>
      <form className='sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-3'>
        <Input placeholder="Search For Your Desired Crops" className="h-full flex-1 py-4 px-4"/>
        <Button className="h-full" type="submit" variants="destructive">Search!</Button>
      </form>
    </div>
    </section>
    <section id="featured-content" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Featured Agricultural Content</h3>
          <InfiniteCarousel />
        </div>
    </section>
    <div className=" min-h-screen">
      <CardGrid />
    </div>
    </>
  )
}

export default Landing
