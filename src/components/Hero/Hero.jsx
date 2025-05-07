import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">DiaGuard-AI</h1>
                    <p className="hero-subtitle">
                        Aplikasi Pendeteksi Risiko Diabetes dengan Tingkat Akurasi 85%
                    </p>
                    <div className="hero-buttons">
                        <a href="#check" className="btn-primary">
                            Cek Sekarang
                        </a>
                        <a href="#learn-more" className="btn-outline">
                            Pelajari Lebih Lanjut
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;