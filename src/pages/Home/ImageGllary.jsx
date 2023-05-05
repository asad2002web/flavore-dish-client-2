import React from 'react'

const ImageGllary = () => {
  return (
    <>
    <div className='text-center fw-bold fs-3'>Image Gllary</div>
    <div className='mb-5 container d-flex gap-3'>
        <div className='my-2'>
            <img className='img-fluid' src="https://i.ibb.co/jkK6XW2/image-1.png" alt="" />
        </div>
        <div className='my-2'>
            <img className='img-fluid' src="https://i.ibb.co/xYrKwvT/image-2.png" alt="" />
        </div>
        <div className='my-2'>
            <img className='img-fluid' src="https://i.ibb.co/nBKF0j8/image-3.png" alt="" />
        </div>
    </div>
    </>
  )
}

export default ImageGllary