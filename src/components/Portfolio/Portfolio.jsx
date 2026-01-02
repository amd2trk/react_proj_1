import React, { useState } from 'react'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [img1, img2, img3, img1, img2, img3];

  const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <h1 className="text-4xl text-center font-bold text-slate-700 capitalize mt-10">
        PORTFOLIO SECTION
      </h1>
      <div className='text-slate-700 text-center'>
        <div className='border-t-4 w-14 h-2 inline-block'></div>
        <i className="fa-solid fa-star mx-2 text-sm"></i>
        <div className='border-t-4 w-14 h-2 inline-block'></div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-10 mb-20'>
        {images.map((img, index) => (
          <div key={index} className="relative group cursor-pointer" onClick={() => openModal(img)}>
            <img src={img} alt={`Portfolio ${index + 1}`} className="rounded-md w-full h-auto" />
            <div className='overlay absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-80 flex justify-center items-center rounded-md transition-opacity duration-300'>
              <i className='fa-solid fa-plus text-white text-center text-6xl group-hover:opacity-100'></i>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-blue-500/20 z-50 flex justify-center items-center p-4"
          onClick={closeModal}
        >

          <div
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  )
}