import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useLanguage } from "../../context/LanguageContext";
import Field from "../common/Field";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
	const { t, isRTL } = useLanguage();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		const subject = "Contact Request";
		const body = `Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0APhone: ${data.phone}%0D%0AMessage: ${data.message}`;
		window.location.href = `mailto:info@ripplefy.app?subject=${subject}&body=${body}`;
		toast.success(t('contact.form.success') || "Message sent successfully!");
		reset();
	};

	return (
		<div className="sofax-field-box" dir={isRTL ? "rtl" : "ltr"}>
			<ToastContainer position="bottom-right" rtl={isRTL} />
			<h3>{t('contact.title')}</h3>
			<p>{t('contact.description')}</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="sofax-main-field">
					<Field label={t('contact.form.name') + " *"} error={errors.name}>
						<input
							{...register("name", { required: t('contact.form.error') || "Name is required" })}
							type="text"
							placeholder={t('contact.form.name')}
						/>
					</Field>
				</div>
				<div className="sofax-main-field">
					<Field label={t('contact.form.email')} error={errors.email}>
						<input
							{...register("email")}
							type="email"
							placeholder={t('contact.form.email')}
						/>
					</Field>
				</div>
				<div className="sofax-main-field">
					<Field label={t('contact.form.phone') + " *"} error={errors.phone}>
						<input
							{...register("phone", { required: t('contact.form.error') || "Phone is required" })}
							type="tel"
							placeholder={t('contact.form.phone')}
						/>
					</Field>
				</div>
				<div className="sofax-main-field">
					<Field label={t('contact.form.message')} error={errors.message}>
						<textarea
							{...register("message")}
							placeholder={t('contact.form.message')}
						/>
					</Field>
				</div>
				<div className="sofax-form-btn">
					<button type="submit" className="sofax-default-btn">
						{t('contact.form.submit')}
					</button>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
