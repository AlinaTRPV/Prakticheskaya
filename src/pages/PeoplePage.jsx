import React, {useState, useEffect} from 'react'

const PeoplePage = () => {
  const [human, setHuman] = useState([]);

  useEffect(() => {
    fetch('/api/Data.json')
    .then((res) => res.json())
    .then((data) => setHuman(data.human || []));
  }, []);

  return (
    <div>
      <h2 className='text-center mb-4'>Данные из файла</h2>
      <div className='row g-3'>
        {human.map((hum) => (
          <div className='col-md-6' key={hum.id}>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='cars-title mb-1'>{hum.fio}</h5>
                <p className='mb-1'>{hum.age}</p>
              </div>
            </div>
          </div>
        )
        )}
      </div>

    </div>
  );
};

export default PeoplePage