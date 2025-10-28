import React, {useEffect, useState} from 'react'

const API_URL = 'https://6900d2e2ff8d792314bba4d6.mockapi.io/api/users';
const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const[formData, setFormData] = useState({
    name: '',
    avatar: '',
    cat: ''
  });
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try{
      const responce = await fetch(API_URL);
      const data = await responce.json();
      setUsers(data);
      setLoading(false);
    }
    catch (error){
      console.error('Ошибка загрузки:', error);
      setLoading(false);
    }
  }
  return (
    <div>
      <h2 className='text-center mb-4'>Управление пользователями</h2>
      <h5 className='mb-3'>Все пользователи ({users.length})</h5>
      <div className='row g-3'>
        {users.map((user) => (
          <div className='col-md-6' key={user.id}>
            <div className='card h-100'>
              <div className='card-body'>
                <div className='d-flex align-items-start mb-3'>
                  <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className='rounded-circle' 
                  width="64px" 
                  height="64" 
                  style={{objectFit: 'cover'}}>
                  </img>
                  <div className='flex-grow-1'>
                    <h5 className='card-title mb-1'>{user.name}</h5>
                    <p className='card-text mb-0'>
                      <b>Любимая порода Кошечки: {user.cat}</b>
                    </p>
                  </div>


                </div>
              </div>
            </div>

          </div>

        ))}
      </div>
    </div>
  )
}

export default UsersPage