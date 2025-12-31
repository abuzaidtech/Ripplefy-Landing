import React from 'react';
import { useLanguage } from "../../../context/LanguageContext";
import FadeInUp from "../../animation/FadeInUp";

function ServicesOverview() {
    const { t } = useLanguage();

    return (
        <section className="sofax-section-padding2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <FadeInUp>
                            <div className="tg-heading-subheading animation-style3">
                                <h2>{t('servicesPage.overview.title')}</h2>
                            </div>
                            <p style={{ 
                                fontSize: '18px', 
                                lineHeight: '1.8', 
                                color: '#555',
                                marginTop: '20px'
                            }}>
                                {t('servicesPage.overview.subtitle')}
                            </p>
                        </FadeInUp>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesOverview;
