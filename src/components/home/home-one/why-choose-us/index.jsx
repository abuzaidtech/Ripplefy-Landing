import { Link } from "react-router-dom";
import Card from "../../../../assets/images/v1/card.png";
import CheckCircle from "../../../../assets/images/v1/check-circle.png";
import Contentimg2 from "../../../../assets/images/v1/contentimg2.png";
import ContentThumb from "../../../../assets/images/v1/contentthumb1.png";
import Icon4 from "../../../../assets/images/v1/icon4.png";
import Icon9 from "../../../../assets/images/v1/icon9.png";
import Shape3 from "../../../../assets/images/v1/shape3.png";
import FadeInLeft from "../../../animation/FadeInLeft";
import FadeInRight from "../../../animation/FadeInRight";
import FadeInUp from "../../../animation/FadeInUp";
import { useLanguage } from "../../../../context/LanguageContext";

// RTL-Aware Icon Box Component
function IconBox({ icon, title, description, isRTL }) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: isRTL ? 'row-reverse' : 'row',
				alignItems: 'flex-start',
				gap: '20px',
				marginBottom: '25px',
				width: '100%'
			}}
		>
			<div style={{ flexShrink: 0 }}>
				<img src={icon} alt="icon" style={{ width: '50px', height: '50px' }} />
			</div>
			<div style={{ flex: 1, textAlign: isRTL ? 'right' : 'left' }}>
				<h4 style={{ marginBottom: '8px', textAlign: isRTL ? 'right' : 'left' }}>{title}</h4>
				<p style={{ margin: 0, lineHeight: 1.6, textAlign: isRTL ? 'right' : 'left' }}>{description}</p>
			</div>
		</div>
	);
}

// Image Section Component
function ImageSection({ image, cardImage, animation: Animation, className }) {
	return (
		<Animation className={className}>
			<img src={image} alt="Content" />
			{cardImage && (
				<div className="sofax-card-shape">
					<img src={cardImage} alt="Card" />
				</div>
			)}
		</Animation>
	);
}

// Text Section Component  
function TextSection({ title, subtitle, reasons, isRTL, showCTA, ctaText, ctaLink }) {
	return (
		<div style={{ textAlign: isRTL ? 'right' : 'left' }}>
			<div className="tg-heading-subheading animation-style3" style={{ marginBottom: '25px' }}>
				<h2 style={{ textAlign: isRTL ? 'right' : 'left' }}>{title}</h2>
			</div>
			<p style={{ textAlign: isRTL ? 'right' : 'left', marginBottom: '30px' }}>{subtitle}</p>
			<div className="extra-mt">
				{reasons.map((reason, index) => (
					<IconBox key={index} icon={reason.icon} title={reason.title} description={reason.description} isRTL={isRTL} />
				))}
			</div>
			{showCTA && (
				<FadeInUp className="extra-mt">
					<Link className="sofax-default-btn pill" data-text={ctaText} to={ctaLink}>
						<span className="button-wraper">{ctaText}</span>
					</Link>
				</FadeInUp>
			)}
		</div>
	);
}

function WhyChooseUs() {
	const { t, isRTL, language } = useLanguage();

	const section1Reasons = [
		{ icon: CheckCircle, title: t('whyChooseUs.reason1.title'), description: t('whyChooseUs.reason1.description') },
		{ icon: CheckCircle, title: t('whyChooseUs.reason2.title'), description: t('whyChooseUs.reason2.description') },
		{ icon: CheckCircle, title: t('whyChooseUs.reason3.title'), description: t('whyChooseUs.reason3.description') },
	];

	const section2Reasons = [
		{ icon: Icon9, title: t('whyChooseUs.reason4.title'), description: t('whyChooseUs.reason4.description') },
		{ icon: Icon4, title: t('whyChooseUs.reason5.title'), description: t('whyChooseUs.reason5.description') },
	];

	return (
		<div className="sofax-section-padding2">
			{/* First Section - Why Choose Ripplefy */}
			<div className="container" style={{ marginBottom: '130px' }}>
				<div 
					style={{ 
						display: 'flex', 
						flexWrap: 'wrap',
						alignItems: 'center',
						gap: '30px'
					}}
				>
					{/* For English: Image LEFT, Text RIGHT */}
					{/* For Arabic: Text RIGHT (visually left), Image LEFT (visually right) */}
					{language === 'ar' ? (
						<>
							{/* Arabic: Text first (appears on right due to RTL), then Image */}
							<div style={{ flex: '1 1 55%', minWidth: '300px' }}>
								<TextSection
									title={t('whyChooseUs.title')}
									subtitle={t('whyChooseUs.subtitle')}
									reasons={section1Reasons}
									isRTL={isRTL}
								/>
							</div>
							<div style={{ flex: '1 1 40%', minWidth: '300px' }}>
								<ImageSection
									image={ContentThumb}
									cardImage={Card}
									animation={FadeInLeft}
									className="sofax-content-img box-shadow"
								/>
							</div>
						</>
					) : (
						<>
							{/* English: Image first (LEFT), then Text (RIGHT) */}
							<div style={{ flex: '1 1 40%', minWidth: '300px' }}>
								<ImageSection
									image={ContentThumb}
									cardImage={Card}
									animation={FadeInLeft}
									className="sofax-content-img box-shadow"
								/>
							</div>
							<div style={{ flex: '1 1 55%', minWidth: '300px' }}>
								<TextSection
									title={t('whyChooseUs.title')}
									subtitle={t('whyChooseUs.subtitle')}
									reasons={section1Reasons}
									isRTL={isRTL}
								/>
							</div>
						</>
					)}
				</div>
			</div>

			{/* Second Section - Complete Restaurant Ecosystem */}
			<div className="container">
				<div 
					style={{ 
						display: 'flex', 
						flexWrap: 'wrap',
						alignItems: 'center',
						gap: '30px'
					}}
				>
					{language === 'ar' ? (
						<>
							{/* Arabic: Text first (appears on right due to RTL), then Image */}
							<div style={{ flex: '1 1 55%', minWidth: '300px' }}>
								<TextSection
									title={t('whyChooseUs.ecosystem.title')}
									subtitle={t('whyChooseUs.ecosystem.description')}
									reasons={section2Reasons}
									isRTL={isRTL}
									showCTA={true}
									ctaText={t('nav.startTrial')}
									ctaLink="/contact-us"
								/>
							</div>
							<div style={{ flex: '1 1 40%', minWidth: '300px' }}>
								<FadeInRight className="sofax-content-img2 position-ralatiove">
									<img src={Contentimg2} alt="Thumbs" />
									<div className="sofax-content-shape-v1">
										<img src={Shape3} alt="shape" />
									</div>
								</FadeInRight>
							</div>
						</>
					) : (
						<>
							{/* English: Image first (LEFT), then Text (RIGHT) */}
							<div style={{ flex: '1 1 40%', minWidth: '300px' }}>
								<FadeInRight className="sofax-content-img2 position-ralatiove">
									<img src={Contentimg2} alt="Thumbs" />
									<div className="sofax-content-shape-v1">
										<img src={Shape3} alt="shape" />
									</div>
								</FadeInRight>
							</div>
							<div style={{ flex: '1 1 55%', minWidth: '300px' }}>
								<TextSection
									title={t('whyChooseUs.ecosystem.title')}
									subtitle={t('whyChooseUs.ecosystem.description')}
									reasons={section2Reasons}
									isRTL={isRTL}
									showCTA={true}
									ctaText={t('nav.startTrial')}
									ctaLink="/contact-us"
								/>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default WhyChooseUs;
