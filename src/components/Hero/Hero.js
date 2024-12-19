import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>给流浪猫一个温暖的家</h1>
          <h2>Give Stray Cats a Loving Home</h2>
          <p>每一只猫都值得被爱和关怀。加入我们，一起帮助更多的流浪猫找到永远的家。</p>
          <div className="hero-buttons">
            <a href="#adopt" className="btn btn-primary">立即领养</a>
            <a href="#donate" className="btn btn-secondary">我要捐助</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
