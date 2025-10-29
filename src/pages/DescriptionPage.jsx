import React from 'react'
import {motion} from 'framer-motion';
const DescriptionPage = () => {
  const containerVariants = {
    hidden: {opacity:0},
    visible: {
      opacity: 1,
      transition:{
        staggerChildren:0.1
      }
    }
  };
  const itemVariants = {
    hidden: {opacity: 0, x: -20},
    visible: {
      opacity: 1,
      x: 0,
      transition:{
        duration:0.8
      }
    }
  };
    const itemVariants_reverse = {
    hidden: {opacity: 0, x: 20},
    visible: {
      opacity: 1,
      x: 0,
      transition:{
        duration:0.8
      }
    }
  };
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
                        style={{width: '200px', height: '200px', objectFit: 'cover', transition: 'transform 0.3s ease'}}
                        onMouseEnter={(event) => event.target.style.transform = 'scale(1.2)'}
                        onMouseLeave={(event) => event.target.style.transform = 'scale(1)'}
                        />
                        <h4 className='text-white mb-0'>Торопова Алина</h4>
                       <p className='text-white'>Frontend, DevOps</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-8'>
                    <div className='p-5'>
                      <div className='mb-4'>
                        <h3 className='text-primary mb-4'>Личная информация</h3>
                        <div className='row'>
                          <div className='col-md-6'>
                            <p className='mb-2'><b>Полное имя:</b>Торопова Алина Игоревна</p>
                            <p className='mb-2'><b>Возраст:</b>31</p>
                            <p className='mb-2'><b>Место рождения:</b>Ярославская область, г. Ростов</p>
                          </div>
                          <div className='col-md-6'>
                            <p className='mb-2'><b>Email:</b>asdfghhgfdf@mail.ru</p>
                            <p className='mb-2'><b>Телефон:</b>+7(910)815-58-17</p>
                            <p className='mb-2'><b>Статус:</b><span className='badge bg-warning'>В поиске работы</span></p>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        className='mb-4'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible">
                        <h4 className='text-success mb-3'>Профессиональные навыки</h4>
                        <div className='row'>
                          <div className='col-md-6'>
                            <h6>Frontend</h6>
                            <div className='mb-2'>
                              <motion.span variants={itemVariants} className='badge bg-primary me-1'>React</motion.span>
                              <motion.span variants={itemVariants} className='badge bg-primary me-1'>JavaScript</motion.span>
                              <motion.span variants={itemVariants} className='badge bg-primary me-1'>TypeScript</motion.span>
                              
                            </div>
                            <div className='mb-2'>
                              <motion.span variants={itemVariants} className='badge bg-secondary me-1'>HTML</motion.span>
                              <motion.span variants={itemVariants} className='badge bg-secondary me-1'>CSS</motion.span>
                              <motion.span variants={itemVariants} className='badge bg-secondary me-1'>Bootstrap</motion.span>
                              
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <h6>Навыки</h6>
                            <div className='mb-2'>
                              <motion.span variants={itemVariants_reverse} className='badge bg-danger me-1'>Ответственный</motion.span>
                              <motion.span variants={itemVariants_reverse} className='badge bg-danger me-1'>Трудолюбивый</motion.span>
                              <motion.span variants={itemVariants_reverse} className='badge bg-danger me-1'>Пунктуальный</motion.span>
                              
                            </div>
                            <div className='mb-2'>
                              <motion.span variants={itemVariants_reverse} className='badge bg-warning me-1'>Замотивированный</motion.span>
                              <motion.span variants={itemVariants_reverse} className='badge bg-warning me-1'>Быстрообучаемый</motion.span>
                              <motion.span variants={itemVariants_reverse} className='badge bg-warning me-1'>Результативный</motion.span>
                              
                            </div>
                          </div>
                        </div>

                      </motion.div>

                      <div className='mb-4'>
                        <h3 className='text-warning mb-4'>Образование</h3>
                        <div className='card bg-light'>
                          <div className='card-body'>
                            <h5 className='card-title'>РАНХИГС при Президенте РФ</h5>
                            <p className='card-text mb-1'>Юридический факультет им. М.М. Сперанского</p>
                            <p className='card-text mb-1'>2012-2016 г.</p>
                          </div>
                          
                        </div>
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