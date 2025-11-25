import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Field from "../common/Field";
import { useLanguage } from "../../context/LanguageContext";

function ContactForm() {
	const { t } = useLanguage();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		toast("Form Submited!");
		reset();
		console.log("Submite Form Data = ", formData);
	};
	return (
		<div className="sofax-field-box ml-50">
			<ToastContainer position="bottom-right" />
			<h3>{t('contact.title')}</h3>
			<form onSubmit={handleSubmit(submitForm)}>
				<div className="row">
					<div className="col-lg-6">
						<div className="sofax-main-field">
							<Field label={t('contact.form.name')} error={errors.name}>
								<input
									{...register("name", { required: "Name is required." })}
									type="name"
									name="name"
									id="name"
								/>
							</Field>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="sofax-main-field">
							<Field label={t('contact.form.email')} error={errors.email}>
								<input
									{...register("email", { required: "Email is required." })}
									type="email"
									name="email"
									id="email"
								/>
							</Field>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="sofax-main-field">
							<label>{t('contact.form.message')}</label>
							<textarea name="textarea" placeholder={t('contact.form.message')}></textarea>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="sofax-form-box">
							<input type="checkbox" id="css" />
							<label htmlFor="css">
								Save my name, email, & website in this browser for the next time I comment.
							</label>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="tac">
							<button id="sofax-submit-btn" className="mt-30" type="submit">
								{t('contact.form.submit')}
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
