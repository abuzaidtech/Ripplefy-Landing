import BreadCrumb from "../../components/common/Breadcrumb";
import Contact from "../../components/contact-us-page";
import MyMap from "../../components/contact-us-page/MyMap";

function ContactUs() {
	return (
		<>
			<BreadCrumb title="Contact Us" />
			<Contact />
			<MyMap />
		</>
	);
}

export default ContactUs;
