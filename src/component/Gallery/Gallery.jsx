import React from 'react'
import bg from '../../Assets/bg1.jpg'
import bg2 from '../../Assets/bg2.jpg'
import bg3 from '../../Assets/bg3.jpg'
import bg4 from '../../Assets/bg4.jpg'
import bg5 from '../../Assets/bg5.jpg'
import bg6 from '../../Assets/bg6.jpg'

const Gallery = () => {
  return (
    <>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-12 mx-auto flex flex-wrap">
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-y-3 transtion duration-500">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={bg}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={bg2}/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={bg3}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2 hover:scale-75 hover:translate-y-4 hover:skew-x-3 transtion duration-500">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={bg5}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={bg4}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={bg6}/>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Gallery
