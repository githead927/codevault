import { Button } from '@/components/ui/button'
import React from 'react'

function Header() {
  return (
    <div className='p-4 max-w-7xl'>
      <div className='flex gap-2 items-center'><img src="/bot.png" alt="Logo" width={35} height={35}/>
      <h2 className='font-bold text-3xl font-game'>Jinx-E</h2>
      </div>
      {/* Navbar */}

      {/* Signup Button */}
      <Button className='font-game text-2xl'>Sign Up</Button>
    </div>
  )
}

export default Header
