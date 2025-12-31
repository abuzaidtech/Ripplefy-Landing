import React, { useState } from 'react';
import { useLanguage } from "../../../context/LanguageContext";
import FadeInUp from "../../animation/FadeInUp";
import Icon1 from "../../../assets/images/v1/icon1.png"; // Placeholder icons
import Icon2 from "../../../assets/images/v1/icon2.png";
import Icon3 from "../../../assets/images/v1/icon3.png";

function WhyChooseCard({ item, icon }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="why-choose-card"
            style={{
                backgroundColor: '#fff',
                padding: '40px 30px',
                borderRadius: '20px',
                textAlign: 'center',
                height: '100%',
                minHeight: '220px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.03)',
                transition: 'all 0.3s ease',
                transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="icon-wrapper mb-4">
                <img src={icon} alt={item.title} style={{ width: '60px', height: '60px' }} />
            </div>
            <div style={{ 
                position: 'relative',
                width: '100%',
                minHeight: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Title - visible by default, hidden on hover */}
                <h4 style={{ 
                    margin: 0,
                    fontSize: '20px', 
                    fontWeight: '700',
                    opacity: isHovered ? 0 : 1,
                    transition: 'opacity 0.3s ease',
                    position: 'absolute',
                    width: '100%',
                    textAlign: 'center'
                }}>
                    {item.title}
                </h4>
                {/* Description - hidden by default, visible on hover */}
                <p style={{ 
                    margin: 0, 
                    color: '#666',
                    fontSize: '15px',
                    lineHeight: '1.6',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    position: 'absolute',
                    width: '100%',
                    textAlign: 'center'
                }}>
                    {item.desc}
                </p>
            </div>
        </div>
    );
}

function WhyChooseUs() {
    const { t, isRTL } = useLanguage();
    const items = t('aboutPage.whyChoose.items', { returnObjects: true });

    // Helper to get icon based on index (cycling through placeholders)
    const getIcon = (index) => {
        const icons = [Icon1, Icon2, Icon3];
        return icons[index % icons.length];
    };

    return (
        <section className="sofax-section-padding2 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="tg-heading-subheading animation-style3" style={{ textAlign: 'center' }}>
                            <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>{t('aboutPage.whyChoose.title')}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {items.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4">
                            <FadeInUp delay={index * 0.1}>
                                <WhyChooseCard item={item} icon={getIcon(index)} />
                            </FadeInUp>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
