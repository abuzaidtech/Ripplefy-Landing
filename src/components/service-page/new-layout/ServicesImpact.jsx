import React from 'react';
import { useLanguage } from "../../../context/LanguageContext";
import FadeInUp from "../../animation/FadeInUp";

function ServicesImpact() {
    const { t } = useLanguage();

    return (
        <section 
            className="sofax-section-padding2"
            style={{
                background: 'linear-gradient(135deg, #0e1e3f 0%, #1a2d5c 100%)',
                color: '#fff'
            }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <FadeInUp>
                            <h2 style={{ 
                                color: '#fff', 
                                marginBottom: '25px',
                                fontSize: '36px',
                                fontWeight: '700'
                            }}>
                                {t('servicesPage.impact.title')}
                            </h2>
                            <p style={{ 
                                fontSize: '18px', 
                                lineHeight: '1.9', 
                                color: 'rgba(255,255,255,0.85)',
                                margin: 0
                            }}>
                                {t('servicesPage.impact.description')}
                            </p>
                        </FadeInUp>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesImpact;
