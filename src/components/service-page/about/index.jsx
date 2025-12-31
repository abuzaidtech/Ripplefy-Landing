import Icon2 from "../../../assets/images/service/icon2.png";
import Icon3 from "../../../assets/images/service/icon3.png";
import Icon4 from "../../../assets/images/service/icon4.png";
import Thumb from "../../../assets/images/service/service-thumb.png";
import Shape1 from "../../../assets/images/service/shape1.png";
import FadeInRight from "../../animation/FadeInRight";
import FadeInLeft from "../../animation/FadeInLeft";
import { useLanguage } from "../../../context/LanguageContext";

function About() {
	const { t, isRTL } = useLanguage();
	
	return (
		<section className="sofax-section-padding2 position-ralatiove">
			<div className="container">
				<div className="row" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
					<div className="col-lg-5" style={{ position: 'relative' }}>
						{isRTL ? (
							<FadeInLeft className="sofax-inner-service-thumb">
								<img src={Thumb} alt="Thumbs" />
							</FadeInLeft>
						) : (
							<FadeInRight className="sofax-inner-service-thumb">
								<img src={Thumb} alt="Thumbs" />
							</FadeInRight>
						)}
						<div 
							className="sofax-inner-service-shape"
							style={{
								position: 'absolute',
								top: '2%',
								right: isRTL ? 'auto' : '9%',
								left: isRTL ? '-15%' : 'auto',
								transform: isRTL ? 'scaleX(-1)' : 'none'
							}}
						>
							<img src={Shape1} alt="content-shape" />
						</div>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content mr-50 tac" style={{ textAlign: isRTL ? 'right' : 'left' }}>
							<h2>{t('serviceAbout.title')}</h2>
							<p>{t('serviceAbout.description')}</p>
							<div className="extra-mt">
								<div className="sofax-iconbox-wrap2" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
									<div className="sofax-iconbox-icon2">
										<img src={Icon2} alt="icon" />
									</div>
									<div className="sofax-iconbox-data2" style={{ textAlign: isRTL ? 'right' : 'left' }}>
										<h4>{t('serviceAbout.feature1.title')}</h4>
										<p>{t('serviceAbout.feature1.description')}</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
									<div className="sofax-iconbox-icon2">
										<img src={Icon3} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data2" style={{ textAlign: isRTL ? 'right' : 'left' }}>
										<h4>{t('serviceAbout.feature2.title')}</h4>
										<p>{t('serviceAbout.feature2.description')}</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
									<div className="sofax-iconbox-icon2">
										<img src={Icon4} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data2" style={{ textAlign: isRTL ? 'right' : 'left' }}>
										<h4>{t('serviceAbout.feature3.title')}</h4>
										<p>{t('serviceAbout.feature3.description')}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
