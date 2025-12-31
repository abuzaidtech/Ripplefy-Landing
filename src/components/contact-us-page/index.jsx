import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { useLanguage } from "../../context/LanguageContext";

function Contact() {
	const { isRTL } = useLanguage();
	return (
		<section className="section sofax-section-padding2" dir={isRTL ? "rtl" : "ltr"}>
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<ContactInfo />
					</div>
					<div className="col-lg-7">
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
