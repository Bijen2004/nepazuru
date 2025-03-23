import Banner from '@/components/banner'
import Categories from '@/components/categories'
import PuzzleGallery from '@/components/gallery'
import React from 'react'

const JigsawGallery = () => {
  return (
    <>
    <div className='bg-[#0a192f]  pt-10'>
        <Banner/>
  
        <PuzzleGallery/>
        
      </div>
    </>
  )
}

export default JigsawGallery

