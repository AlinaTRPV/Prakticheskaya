import React from 'react'

const TablesPage = () => {
  return (
    <div>
        <h2>Таблицы:</h2> 
        <table className="table table-hover">
            <thead className="table-dark">
                <tr>
                    <th>ФИО</th>
                    <th>Email</th>
                    <th>Статус</th>
                </tr>
            </thead>
            <tbody>
                <tr className="table-success">
                    <td>Образцова Ксения Сергеевна</td>
                    <td>k.s.obrazcova@mpt.ru</td>
                    <td><span className="badge bg-success">Пользователь активен</span></td>
                </tr>
                <tr className="table-warning">
                    <td>Образцова Ксения Сергеевна</td>
                    <td>k.s.obrazcova@mpt.ru</td>
                    <td><span className="badge bg-warning">Пользователь заблокирован</span></td>
                </tr>
                <tr className="table-danger">
                    <td>Образцова Ксения Сергеевна</td>
                    <td>k.s.obrazcova@mpt.ru</td>
                    <td><span className="badge bg-danger">Пользователь удален</span></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TablesPage