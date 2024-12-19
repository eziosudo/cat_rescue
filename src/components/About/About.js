import React from 'react';
import './About.css';

const About = () => {
  const features = [
    {
      title: '救助流浪猫',
      description: '我们致力于救助街头的流浪猫，为它们提供医疗救治和临时庇护。'
    },
    {
      title: '负责任领养',
      description: '严格的领养流程确保每只猫咪都能找到合适的永久家庭。'
    },
    {
      title: '绝育项目',
      description: '推广TNR项目，通过绝育手术控制流浪猫数量，改善它们的生活质量。'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>我们的理念</h2>
        <h3>Our Mission</h3>
        <p className="mission-statement">
          我们相信每只猫都应该有一个充满爱的家。通过救助、领养和教育，
          我们致力于改善流浪猫的生活，创造人与猫和谐共处的社会。
        </p>
        
        <div className="features">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="stats">
          <div className="stat-item">
            <h3>200+</h3>
            <p>成功领养</p>
          </div>
          <div className="stat-item">
            <h3>500+</h3>
            <p>救助数量</p>
          </div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>志愿者</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
