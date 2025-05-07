import React from 'react';
import { FaStethoscope, FaChartLine, FaMobile } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <FaStethoscope />,
      title: "Prediksi Akurat",
      description: "Deteksi risiko diabetes dengan tingkat akurasi mencapai 85% menggunakan model AI terkini"
    },
    {
      icon: <FaChartLine />,
      title: "Monitoring Berkala",
      description: "Pantau riwayat pemeriksaan dan lihat tren kesehatan Anda secara detail"
    },
    {
      icon: <FaMobile />,
      title: "Mudah Digunakan",
      description: "Antarmuka yang user-friendly dan dapat diakses dari berbagai perangkat"
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="text-center mb-5">Fitur Unggulan</h2>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;