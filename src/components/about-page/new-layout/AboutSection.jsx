import React from 'react';
import { useLanguage } from "../../../context/LanguageContext";
import AboutImage from "../../../assets/images/v1/dashboard.png"; // Using dashboard image as placeholder
import FadeInUp from "../../animation/FadeInUp";

function AboutSection() {
    const { t, isRTL } = useLanguage();

    return (
        <section className="sofax-section-padding2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <FadeInUp className="about-content">
                            <div className="tg-heading-subheading animation-style3">
                                <h2>{t('aboutPage.about.title')}</h2>
                            </div>
                            <p className="mt-30">{t('aboutPage.about.p1')}</p>
                            <p className="mt-20">{t('aboutPage.about.p2')}</p>
                        </FadeInUp>
                    </div>
                    <div className="col-lg-6">
                        <FadeInUp className="about-image-wrapper mt-4 mt-lg-0">
                            <img 
                                src={AboutImage} 
                                alt="About Ripplefy" 
                                style={{ 
                                    width: '100%', 
                                    borderRadius: '20px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                                }} 
                            />
                        </FadeInUp>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
