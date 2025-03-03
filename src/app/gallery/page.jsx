import Banner from '@/components/banner'
import Categories from '@/components/categories'
import PuzzleGallery from '@/components/gallery'
import PuzzleCard from '@/components/PuzzleCard'
import React from 'react'

const JigsawGallery = () => {
  return (
    <>
    <div className='bg-[#0a192f] mt-[-30px] pt-10'>
        <Banner/>
        <Categories/>
        <PuzzleGallery/>
        <PuzzleCard/>
      </div>
    </>
  )
}

export default JigsawGallery

