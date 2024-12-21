import React, { useState } from 'react';
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';
import emailjs from '@emailjs/browser';
import './JoinUs.css';

const containerStyle = {
  width: '100%',
  height: '400px'
};

// 定义投喂点坐标
const feedingLocations = [
  { lat: 37.40753136435281, lng: -121.89411776047099 }, // 投喂点1
  { lat: 37.41914689652877, lng: -121.86263642978349 }, // 投喂点2
  { lat: 37.333007625891945, lng: -121.89484392978653 }, // 投喂点3
  { lat: 37.393130906411166, lng: -121.88426812167526 }  // 投喂点4
];

// 计算中心点
const center = {
  lat: feedingLocations.reduce((sum, loc) => sum + loc.lat, 0) / feedingLocations.length,
  lng: feedingLocations.reduce((sum, loc) => sum + loc.lng, 0) / feedingLocations.length
};

// 计算最大半径（从中心点到最远的投喂点 + 500米）
const calculateRadius = () => {
  const R = 6371000; // 地球半径（米）
  let maxDistance = 0;

  feedingLocations.forEach(loc => {
    const dLat = (loc.lat - center.lat) * Math.PI / 180;
    const dLon = (loc.lng - center.lng) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(center.lat * Math.PI / 180) * Math.cos(loc.lat * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;
    maxDistance = Math.max(maxDistance, distance);
  });

  return maxDistance + 500; // 最大距离加上500米
};

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    occupation: '',
    intention: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // 配置多个接收邮箱
      const recipientEmails = [
        'safepaws.send@gmail.com',
        'eziosudo@gmail.com'
      ];

      // 发送邮件给每个接收者
      const emailPromises = recipientEmails.map(email => {
        const templateParams = {
          to_email: email,
          from_name: formData.name,
          message: `
            姓名: ${formData.name}
            性别: ${formData.gender}
            年龄: ${formData.age}
            工作: ${formData.occupation}
            投喂意向: ${formData.intention}
          `
        };

        return emailjs.send(
          'service_fc711go',
          'template_h1jlv5s',
          templateParams,
          'K_olbUfXa7EErgkY-'
        );
      });

      await Promise.all(emailPromises);
      alert('申请已成功提交！我们会尽快联系您。');
      setFormData({
        name: '',
        gender: '',
        age: '',
        occupation: '',
        intention: ''
      });
    } catch (error) {
      console.error('发送失败:', error);
      alert('提交失败，请稍后重试。');
    }
  };

  return (
    <div className="join-us">
      <h2>加入我们</h2>
      <div className="map-container">
        <LoadScript googleMapsApiKey="AIzaSyBHHNTZtkNxkOyp8u25Z0aF5ovBJLsBqdE">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
          >
            <Circle
              center={center}
              radius={calculateRadius()}
              options={{
                fillColor: '#FF0000',
                fillOpacity: 0.2,
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
              }}
            />
          </GoogleMap>
        </LoadScript>
      </div>

      <div className="volunteer-form">
        <h3>投喂义工报名</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">姓名：</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">性别：</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="">请选择</option>
              <option value="male">男</option>
              <option value="female">女</option>
              <option value="other">其他</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="age">年龄：</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
              min="18"
              max="100"
            />
          </div>

          <div className="form-group">
            <label htmlFor="occupation">工作：</label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="intention">投喂意向：</label>
            <textarea
              id="intention"
              name="intention"
              value={formData.intention}
              onChange={handleInputChange}
              required
              placeholder="请描述您的投喂意向和可投入的时间..."
            />
          </div>

          <button type="submit" className="submit-btn">提交申请</button>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
