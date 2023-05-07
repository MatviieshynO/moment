import React from 'react'
import PromoGallerySection from '../components/PromotGallerySection'
import NavBar from '../components/Navbar'

const Gallery = () => {
  return (
    <div>
      <div className="bg-[#343434] w-full h-[90px]">
        <NavBar />
      </div>
      <PromoGallerySection />
    </div>
  )
}

export default Gallery
