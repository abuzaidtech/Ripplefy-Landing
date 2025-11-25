import Icon1 from "../../assets/images/contact/icon1.png";
import Icon2 from "../../assets/images/contact/icon2.png";
import Icon3 from "../../assets/images/contact/icon3.png";
import { useLanguage } from "../../context/LanguageContext";

function ContactInfo() {
	const { t } = useLanguage();
	return (
		<div className="contactus-authore-wrapper">
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<img src={Icon1} alt="Icon chat" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>{t('contact.support.title')}</h4>
					<p>{t('contact.info.hours')}</p>
				</div>
			</div>
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<img src={Icon2} alt="Call icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Give us a call</h4>
					<p>{t('contact.info.phone')}</p>
				</div>
			</div>
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<img src={Icon3} alt="Email Icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Email Us</h4>
					<p>{t('contact.info.email')}</p>
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;
