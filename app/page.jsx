import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <main className='min-h-screen bg-linear-to-br from-orange-50'>
      <header className='bg-white/80 backdrop-blur-sm border-b border-gray-200 flex justify-between items-center'>
          <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
            <div className='flex items-center gap-3'></div>
            <Image src={"/trackly.png"} alt='logo' width={600} height={200} className='h-20 w-auto rounded-full'/>
          </div>
      </header>
    </main>
  )
}

export default Home