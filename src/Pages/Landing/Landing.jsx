/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import "./Landing.css"
const Landing = () => {
  const images = [
    "https://source.unsplash.com/1600x900/?tree",
    "https://source.unsplash.com/1600x900/?forest",
    "https://source.unsplash.com/1600x900/?winter"
  ]
  return (
    <div>
    <section className="carousel" aria-label="Gallery">
      <ol className="carousel__viewport">
        {images && images.map((item,index) => {
          return (
            <li key={index} id="carousel__slide1"
        tab="0"
        className="carousel__slide">
            <div className="carousel__snapper">
                <img className='img_car' src={item} alt=""/>
           </div>
            </li>
          )
        })}   
  </ol>
  <aside className="carousel__navigation">
    <ol className="carousel__navigation-list">
      <li className="carousel__navigation-item">
        <a href="#carousel__slide1"
           className="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li className="carousel__navigation-item">
        <a href="#carousel__slide2"
           className="carousel__navigation-button">Go to slide 2</a>
      </li>
      <li className="carousel__navigation-item">
        <a href="#carousel__slide3"
           className="carousel__navigation-button">Go to slide 3</a>
      </li>
     
    </ol>
  </aside>
      </section>
      </div>
    )
}

export default Landing