import React from 'react'
import image from '../assets/card.png';
import '../Styles/form.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div>
        <h1>Manage Your virtual Cards Effortlessly</h1>
        <p>Create, control and minitor virtual payment cards in real-time</p>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Home
