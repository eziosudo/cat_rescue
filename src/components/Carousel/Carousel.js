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
import shandian from '../../assets/adopted/shandian.jpeg';
import boots from '../../assets/adopted/boots.jpeg';
import dayeAndNitro from '../../assets/adopted/daye_and_Nitro.jpeg';

const adoptedCats = [
  {
    name: "Fuke & Maru",
    image: fukeAndMaru,
    description: "这对亲密的伙伴一起找到了温暖的新家"
  },
  {
    name: "Luna",
    image: luna,
    description: "甜美的Luna为新家庭带来欢乐"
  },
  {
    name: "Miso",
    image: miso,
    description: "活泼的Miso在永远的家中过着幸福的生活"
  },
  {
    name: "Oreo",
    image: oreo,
    description: "可爱的Oreo在充满爱的新家庭中快乐成长"
  },
  {
    name: "Tom",
    image: tom,
    description: "温和的Tom找到了最适合他的家"
  },
  {
    name: "闪电",
    image: shandian,
    description: "活泼可爱的闪电在新家庭中快乐生活"
  },
  {
    name: "Boots",
    image: boots,
    description: "温柔的Boots找到了他的温暖新家"
  },
  {
    name: "Daye & Nitro",
    image: dayeAndNitro,
    description: "Daye和Nitro在新家庭中幸福相伴"
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
      <h2>被领养的幸运儿</h2>
      <h2>被领养的幸运儿</h2>
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
