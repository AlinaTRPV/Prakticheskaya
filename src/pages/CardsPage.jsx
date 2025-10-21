import React from 'react'
import CardComponent from '../components/CardComponent';

const CardsPage = () => {
  return (
    <div>
        <div className="row g-4">
            <div className="col-md-4">
            <CardComponent
            title="Лягушечка 1"
            imageUrl = "/images/1.jpeg"
            desctiption="Это самая крутая лягушечка номер 1"
            imageAlt="Лягушечка 1"/>
          </div>
          
          <div className="col-md-4">
            <CardComponent
            title="Лягушечка 2"
            imageUrl = "/images/2.jpeg"
            desctiption="Это самая крутая лягушечка номер 2 Это самая крутая лягушечка номер 2 Это самая крутая лягушечка номер 2 Это самая крутая лягушечка номер 2"
            imageAlt="Лягушечка 2"/>
          </div>

            <div className="col-md-4">
            <CardComponent
            title="Лягушечка 3"
            imageUrl = "/images/3.jpeg"
            desctiption="Это самая крутая лягушечка номер 3"
            imageAlt="Лягушечка 3"/>
          </div>
        </div>
    </div>
  );
};

export default CardsPage;