import BreadCrumb from "../../components/common/Breadcrumb";
import Contact from "../../components/contact-us-page";
import MyMap from "../../components/contact-us-page/MyMap";
import HeroImage from "../../assets/images/Hero/contact.jpg";

function ContactUs() {
	return (
		<>
			<BreadCrumb title="Contact Us" backgroundImage={HeroImage} />
			<Contact />
			<MyMap />
		</>
	);
}

export default ContactUs;
