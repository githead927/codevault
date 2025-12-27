

import { Button } from '@/components/ui/button'
import React, { use } from 'react'
import Link from 'next/link'

function Hero() {
  return (
    <div className='w-full relative h-screen overflow-hidden'>
     <img src="/room.gif" alt="hero" width={1000} height={1000} 
     className='w-full h-full object-cover absolute inset-0 '/>
     <div className='absolute w-full flex flex-col items-center mt-22'>
      <h2 className='font-bold text-6xl font-game'>Start Your</h2>
      <h2 className='font-bold text-7xl font-game text-yellow-400'
      style={{
        textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0px 2px 0 #000, 2px 0px 0 #000, 0px -2px 0 #000, -2px 0px 0 #000'
  }}>Coding Journey</h2>
  <h2 className='text-xl text-gray-300 font-game'>Beginner friendly courses and projects</h2>
      <Link href={'sign-in'}>
      <Button className='mt-6 font-game text-2xl ' variant={'pixel'}>Get Started</Button>
      </Link>
     </div>
    </div>
  )
}

export default Hero
