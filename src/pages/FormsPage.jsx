import React from 'react'

const FormsPage = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-md-12'>
       <h2>Заполните заявку на обратную связь</h2>
       </div>
      </div>
      <div className='row'>
        <div className='col-ms-12'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Форма регистрации</h4>
              <form>
                <div className='mb-1'>
                  <label className='form-label'></label>
                  <input type="text" placeholder='Фамилия' className='form-control'></input>
                </div>
                <div className='mb-1'>
                  <label className='form-label'></label>
                  <input type="text" placeholder='Имя' className='form-control'></input>
                </div>
                <div className='mb-1' style={{textAlign: 'left'}}>
                  <label className='form-label'></label>
                  <input type="text" placeholder='Отчество' className='form-control'></input>
                  <div className='mb-1'>
                  <label className='form-label'></label>
                  <input type="email" placeholder='Email' className='form-control'></input>
                </div>
                <button type='submit' className='btn btn-outline-primary'>Отправить</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-ms-12'>
          <div className='card'>
            <div className='card-header'>
              <h4 className='mb-0'>Обратная связь</h4>
            </div>
            <div className='card-body'>
              <form>
               <div className='mb-3'>
                <label className='form-label'>Оцените наш сервис</label>
                <select className='form-select'>
                  <option value=""> ⭐Выберите оценку ⭐</option>
                  <option value="1"> ⭐1 звезда </option>
                  <option value="2"> ⭐ ⭐2 звезды </option>
                  <option value="3"> ⭐ ⭐ ⭐3 звезды </option>
                  <option value="4"> ⭐ ⭐ ⭐ ⭐4 звезды </option>
                  <option value="5"> ⭐ ⭐ ⭐ ⭐ ⭐5 звезд </option>
                </select>
                <label className='form-label'>Комментарий</label>
                <textarea className='form-control' rows="5" placeholder='Ваш отзыв...'></textarea>
               </div>
               <button type='submit' className='btn btn-warning w-100'>Отправить отзыв</button>
              </form>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default FormsPage