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

function WhyChooseUs() {
	const { t } = useLanguage();

	return (
		<div className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="sofax-content-img box-shadow mb-130">
							<img src={ContentThumb} alt="ContentThumb" />
							<div className="sofax-card-shape">
								<img src={Card} alt="Card" />
							</div>
						</FadeInLeft>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content tac ml-50 mb-130 animation-title animation-style3">
							<div className="tg-heading-subheading animation-style3">
								<h2>{t('whyChooseUs.title')}</h2>
							</div>
							<p>
								{t('whyChooseUs.subtitle')}
							</p>
							<div className="extra-mt">
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<img src={CheckCircle} alt="check" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>{t('whyChooseUs.reason1.title')}</h4>
										<p>
											{t('whyChooseUs.reason1.description')}
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<img src={CheckCircle} alt="check" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>{t('whyChooseUs.reason2.title')}</h4>
										<p>
											{t('whyChooseUs.reason2.description')}
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<img src={CheckCircle} alt="check" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>{t('whyChooseUs.reason3.title')}</h4>
										<p>
											{t('whyChooseUs.reason3.description')}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="sofax-content-img2 position-ralatiove ml-31">
							<img src={Contentimg2} alt="Thumbs" />
							<div className="sofax-content-shape-v1">
								<img src={Shape3} alt="shape" />
							</div>
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content mr-80 tac fs-19">
							<div className="tg-heading-subheading animation-style3">
								<h2>Complete Restaurant Ecosystem</h2>
							</div>
							<p>
								All the tools you need to run a successful restaurant in one integrated platform. From digital menus to inventory management, we've got you covered.
							</p>
							<div className="extra-mt">
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<img src={Icon9} alt="icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>{t('whyChooseUs.reason4.title')}</h4>
										<p>
											{t('whyChooseUs.reason4.description')}
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<img src={Icon4} alt="icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>{t('whyChooseUs.reason5.title')}</h4>
										<p>
											{t('whyChooseUs.reason5.description')}
										</p>
									</div>
								</div>
							</div>
							<FadeInUp className="extra-mt">
								<Link className="sofax-default-btn pill" data-text={t('nav.startTrial')} to="/sign-up">
									<span className="button-wraper">{t('nav.startTrial')}</span>
								</Link>
							</FadeInUp>
							<div className="sofax-content-shape-v1">
								<img src={Shape3} alt="shape" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhyChooseUs;

