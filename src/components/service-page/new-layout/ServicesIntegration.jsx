import React from 'react';
import { useLanguage } from "../../../context/LanguageContext";
import FadeInUp from "../../animation/FadeInUp";
import IntegrationImage from "../../../assets/images/v1/dashboard.png";

function ServicesIntegration() {
    const { t, isRTL, language } = useLanguage();

    return (
        <section className="sofax-section-padding2">
            <div className="container">
                <div className="row align-items-center">
                    {/* Text Column */}
                    <div className={`col-lg-6 ${language === 'ar' ? 'order-lg-2' : ''}`}>
                        <FadeInUp>
                            <div className="tg-heading-subheading animation-style3">
                                <h2 style={{ textAlign: isRTL ? 'right' : 'left' }}>
                                    {t('servicesPage.integration.title')}
                                </h2>
                            </div>
                            <p style={{ 
                                fontSize: '16px', 
                                lineHeight: '1.9', 
                                color: '#555',
                                marginTop: '25px',
                                textAlign: isRTL ? 'right' : 'left'
                            }}>
                                {t('servicesPage.integration.description')}
                            </p>
                        </FadeInUp>
                    </div>
                    
                    {/* Image Column */}
                    <div className={`col-lg-6 ${language === 'ar' ? 'order-lg-1' : ''}`}>
                        <FadeInUp delay={0.2}>
                            <div style={{ 
                                marginTop: language !== 'ar' ? '0' : '30px',
                                marginBottom: language === 'ar' ? '0' : '30px'
                            }}>
                                <img 
                                    src={IntegrationImage} 
                                    alt="Services Integration" 
                                    style={{ 
                                        width: '100%', 
                                        borderRadius: '20px',
                                        boxShadow: '0 15px 40px rgba(0,0,0,0.08)'
                                    }} 
                                />
                            </div>
                        </FadeInUp>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesIntegration;
