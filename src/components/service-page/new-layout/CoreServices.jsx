import React, { useState } from 'react';
import { useLanguage } from "../../../context/LanguageContext";
import FadeInUp from "../../animation/FadeInUp";
import Icon1 from "../../../assets/images/v1/icon1.png";
import Icon2 from "../../../assets/images/v1/icon2.png";
import Icon3 from "../../../assets/images/v1/icon3.png";
import Icon4 from "../../../assets/images/v1/icon4.png";
import Icon5 from "../../../assets/images/v1/icon5.png";
import Icon6 from "../../../assets/images/v1/icon6.png";

const serviceIcons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6];

function ServiceCard({ service, index, isRTL }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <FadeInUp delay={index * 0.1}>
                <div 
                    className="service-card"
                    style={{
                        backgroundColor: '#fff',
                        padding: '35px 30px',
                        borderRadius: '20px',
                        height: '100%',
                        minHeight: '320px',
                        boxShadow: '0 5px 25px rgba(0,0,0,0.04)',
                        transition: 'all 0.3s ease',
                        border: '1px solid #f0f0f0',
                        display: 'flex',
                        flexDirection: 'column',
                        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                        cursor: 'pointer'
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Icon */}
                    <div style={{ marginBottom: '20px', textAlign: isRTL ? 'right' : 'left' }}>
                        <img 
                            src={serviceIcons[index % serviceIcons.length]} 
                            alt={service.title} 
                            style={{ width: '60px', height: '60px' }} 
                        />
                    </div>
                    
                    {/* Title */}
                    <h4 style={{ 
                        marginBottom: '20px', 
                        fontSize: '20px', 
                        fontWeight: '700',
                        color: '#0e1e3f',
                        textAlign: isRTL ? 'right' : 'left'
                    }}>
                        {service.title}
                    </h4>
                    
                    {/* Content area - switches between description and features */}
                    <div style={{ 
                        position: 'relative',
                        flex: 1,
                        minHeight: '150px'
                    }}>
                        {/* Description - visible by default */}
                        <p style={{ 
                            margin: 0,
                            color: '#666',
                            fontSize: '14px',
                            lineHeight: '1.7',
                            textAlign: isRTL ? 'right' : 'left',
                            opacity: isHovered ? 0 : 1,
                            transition: 'opacity 0.3s ease',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0
                        }}>
                            {service.description}
                        </p>
                        
                        {/* Features List - visible on hover */}
                        <ul style={{ 
                            listStyle: 'none', 
                            padding: 0, 
                            margin: 0,
                            textAlign: isRTL ? 'right' : 'left',
                            direction: isRTL ? 'rtl' : 'ltr',
                            opacity: isHovered ? 1 : 0,
                            transition: 'opacity 0.3s ease',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0
                        }}>
                            {service.features.map((feature, idx) => (
                                <li 
                                    key={idx}
                                    style={{ 
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '10px',
                                        marginBottom: '10px',
                                        color: '#555',
                                        fontSize: '14px',
                                        lineHeight: '1.6',
                                        flexDirection: isRTL ? 'row-reverse' : 'row',
                                        justifyContent: 'flex-start',
                                        textAlign: isRTL ? 'right' : 'left'
                                    }}
                                >
                                    <span style={{ 
                                        color: '#40E0D0', 
                                        fontWeight: 'bold',
                                        flexShrink: 0
                                    }}>✓</span>
                                    <span style={{ 
                                        textAlign: isRTL ? 'right' : 'left',
                                        direction: isRTL ? 'rtl' : 'ltr'
                                    }}>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </FadeInUp>
        </div>
    );
}

function CoreServices() {
    const { t, isRTL } = useLanguage();
    const services = t('servicesPage.services', { returnObjects: true });

    return (
        <section className="sofax-section-padding2 bg-light">
            <div className="container">
                <div className="row">
                    {services.map((service, index) => (
                        <ServiceCard 
                            key={index} 
                            service={service} 
                            index={index} 
                            isRTL={isRTL}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CoreServices;
