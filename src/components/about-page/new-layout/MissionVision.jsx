import React from 'react';
import { useLanguage } from "../../../context/LanguageContext";
import FadeInUp from "../../animation/FadeInUp";

function MissionVision() {
    const { t, isRTL } = useLanguage();

    const cardStyle = {
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '40px 35px',
        height: '100%',
        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden'
    };

    const iconStyle = {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '25px',
        fontSize: '32px'
    };

    return (
        <section className="sofax-section-padding2" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="container">
                <div className="row">
                    {/* Mission Card */}
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <FadeInUp>
                            <div style={cardStyle} className="mission-card">
                                <div style={{
                                    ...iconStyle,
                                    backgroundColor: 'rgba(64, 224, 208, 0.15)'
                                }}>
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#40E0D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <circle cx="12" cy="12" r="6"></circle>
                                        <circle cx="12" cy="12" r="2"></circle>
                                    </svg>
                                </div>
                                <h3 style={{ 
                                    fontSize: '28px', 
                                    fontWeight: '700', 
                                    marginBottom: '20px',
                                    color: '#1a1a1a'
                                }}>
                                    {t('aboutPage.mission.title')}
                                </h3>
                                <p style={{ 
                                    fontSize: '16px', 
                                    lineHeight: '1.8', 
                                    color: '#666',
                                    margin: 0
                                }}>
                                    {t('aboutPage.mission.desc')}
                                </p>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-20px',
                                    [isRTL ? 'left' : 'right']: '-20px',
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(64, 224, 208, 0.08)'
                                }}></div>
                            </div>
                        </FadeInUp>
                    </div>

                    {/* Vision Card */}
                    <div className="col-lg-6">
                        <FadeInUp delay={0.2}>
                            <div style={cardStyle} className="vision-card">
                                <div style={{
                                    ...iconStyle,
                                    backgroundColor: 'rgba(64, 224, 208, 0.15)'
                                }}>
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#40E0D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </div>
                                <h3 style={{ 
                                    fontSize: '28px', 
                                    fontWeight: '700', 
                                    marginBottom: '20px',
                                    color: '#1a1a1a'
                                }}>
                                    {t('aboutPage.vision.title')}
                                </h3>
                                <p style={{ 
                                    fontSize: '16px', 
                                    lineHeight: '1.8', 
                                    color: '#666',
                                    margin: 0
                                }}>
                                    {t('aboutPage.vision.desc')}
                                </p>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-20px',
                                    [isRTL ? 'left' : 'right']: '-20px',
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(64, 224, 208, 0.08)'
                                }}></div>
                            </div>
                        </FadeInUp>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MissionVision;
