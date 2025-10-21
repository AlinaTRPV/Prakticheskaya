import React from 'react'

const DescriptionPage = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-md-12'>
          <h2 className='text-center mb-5'>Мое описание</h2>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-md-10'>
          <div className='card shadow-lg border-0'style={{
            borderRadius: '15px',
            overflow: 'hidden'
            }}>
              <div className='card-body p-0'>
                <div className='row g-0'>
                  <div className='col-md-4'>
                    <div className='h-100 d-flex align-items-center justify-content-center' style={{background: 'linear-gradient(135deg, #e1a7d0ff 0%, #7a2867ff 100%)'}}>
                      <div className='text-center p-4'>
                        <img
                        src="/images/2.jpeg"
                        alt="жабонька"
                        className='img-fluid rounded-circle shadow-lg mb-3'
                        style={{width: '200px', height: '200px', objectFit: 'cover', }}
                        />
                      </div>

                    </div>

                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DescriptionPage