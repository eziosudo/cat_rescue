import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

// Import adopted cat images
import fukeAndMaru from '../../assets/adopted/fuke_and_maru.jpeg';
import luna from '../../assets/adopted/luna.jpeg';
import miso from '../../assets/adopted/miso.jpeg';
import oreo from '../../assets/adopted/oreo.jpg';
import tom from '../../assets/adopted/tom.jpeg';

const adoptedCats = [
  {
    name: "Fuke & Maru",
    image: fukeAndMaru,
    description: "A lovely bonded pair who found their forever home together"
  },
  {
    name: "Luna",
    image: luna,
    description: "Sweet Luna bringing joy to her new family"
  },
  {
    name: "Miso",
    image: miso,
    description: "Playful Miso living her best life in her forever home"
  },
  {
    name: "Oreo",
    image: oreo,
    description: "Charming Oreo enjoying his new loving family"
  },
  {
    name: "Tom",
    image: tom,
    description: "Gentle Tom found his perfect match"
  }
];

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-section">
      <h2>已被领养的幸运儿</h2>
      <div className="carousel-container">
        <Slider {...settings}>
          {adoptedCats.map((cat, index) => (
            <div key={index} className="carousel-slide">
              <div className="carousel-card">
                <img src={cat.image} alt={cat.name} />
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
