import { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../../../../assets/images/v1/dashboard.png";
import Shape4 from "../../../../assets/images/v1/shape4.png";
import { useLanguage } from "../../../../context/LanguageContext";

function Cta() {
	const { t, isRTL, language } = useLanguage();
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		businessName: '',
		branches: '',
		country: '',
		termsAccepted: false,
		privacyAccepted: false
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Demo request submitted:', formData);
		// Handle form submission
	};

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value
		}));
	};

	const inputStyle = {
		width: '100%',
		padding: '14px 16px',
		borderRadius: '8px',
		border: '1px solid #e0e0e0',
		backgroundColor: '#fff',
		fontSize: '14px',
		color: '#333',
		outline: 'none',
		transition: 'border-color 0.3s ease'
	};

	const labelStyle = {
		display: 'block',
		marginBottom: '6px',
		fontSize: '14px',
		fontWeight: '500',
		color: '#333'
	};

	return (
		<section 
			className="sofax-section-padding2" 
			id="demo-form"
			style={{ 
				backgroundColor: '#f8f9fa',
				direction: isRTL ? 'rtl' : 'ltr'
			}}
		>
			<div className="container">
				{/* Title Section with Arrow Shape */}
				<div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative' }}>
					<div style={{ position: 'relative', display: 'inline-block' }}>
						<h2 style={{ 
							fontSize: '42px', 
							fontWeight: '700', 
							color: '#0e1e3f',
							marginBottom: '0'
						}}>
							{t('cta.title')}
						</h2>
					</div>
				</div>

				<div className="row align-items-stretch" style={{ minHeight: '600px' }}>
					{/* Right Side - Form */}
					<div className="col-lg-8 offset-lg-2">
						<div style={{ 
							backgroundColor: '#fff', 
							borderRadius: '24px', 
							padding: '40px',
							height: '100%',
							boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
						}}>
							<form onSubmit={handleSubmit}>
								{/* First Name & Last Name */}
								<div className="row mb-3">
									<div className="col-md-6 mb-3 mb-md-0">
										<label style={labelStyle}>
											{t('cta.form.firstName')}<span style={{ color: '#dc3545' }}>*</span>
										</label>
										<input
											type="text"
											name="firstName"
											value={formData.firstName}
											onChange={handleChange}
											style={inputStyle}
											required
										/>
									</div>
									<div className="col-md-6">
										<label style={labelStyle}>
											{t('cta.form.lastName')}<span style={{ color: '#dc3545' }}>*</span>
										</label>
										<input
											type="text"
											name="lastName"
											value={formData.lastName}
											onChange={handleChange}
											style={inputStyle}
											required
										/>
									</div>
								</div>

								{/* Email */}
								<div className="mb-3">
									<label style={labelStyle}>
										{t('cta.form.email')}<span style={{ color: '#dc3545' }}>*</span>
									</label>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										style={inputStyle}
										required
									/>
								</div>

								{/* Phone */}
								<div className="mb-3">
									<label style={labelStyle}>
										{t('cta.form.phone')}<span style={{ color: '#dc3545' }}>*</span>
									</label>
									<div style={{ display: 'flex', gap: '10px' }}>
										<select 
											style={{ 
												...inputStyle, 
												width: '140px',
												cursor: 'pointer'
											}}
										>
											<option value="+20">🇪🇬 +20</option>
											<option value="+966">🇸🇦 +966</option>
											<option value="+971">🇦🇪 +971</option>
											<option value="+965">🇰🇼 +965</option>
											<option value="+974">🇶🇦 +974</option>
											<option value="+973">🇧🇭 +973</option>
											<option value="+968">🇴🇲 +968</option>
											<option value="+962">🇯🇴 +962</option>
										</select>
										<input
											type="tel"
											name="phone"
											value={formData.phone}
											onChange={handleChange}
											style={{ ...inputStyle, flex: 1 }}
											required
										/>
									</div>
								</div>

								{/* Business Name & Branches */}
								<div className="row mb-3">
									<div className="col-md-6 mb-3 mb-md-0">
										<label style={labelStyle}>
											{t('cta.form.businessName')}<span style={{ color: '#dc3545' }}>*</span>
										</label>
										<input
											type="text"
											name="businessName"
											value={formData.businessName}
											onChange={handleChange}
											style={inputStyle}
											required
										/>
									</div>
									<div className="col-md-6">
										<label style={labelStyle}>
											{t('cta.form.branches')}<span style={{ color: '#dc3545' }}>*</span>
										</label>
										<select
											name="branches"
											value={formData.branches}
											onChange={handleChange}
											style={{ ...inputStyle, cursor: 'pointer' }}
											required
										>
											<option value="">{t('cta.form.pleaseSelect')}</option>
											<option value="1">1</option>
											<option value="2-5">2-5</option>
											<option value="6-10">6-10</option>
											<option value="11-20">11-20</option>
											<option value="20+">20+</option>
										</select>
									</div>
								</div>

								{/* Country */}
								<div className="mb-4">
									<label style={labelStyle}>
										{t('cta.form.country')}<span style={{ color: '#dc3545' }}>*</span>
									</label>
									<select
										name="country"
										value={formData.country}
										onChange={handleChange}
										style={{ ...inputStyle, cursor: 'pointer' }}
										required
									>
										<option value="">{t('cta.form.pleaseSelect')}</option>
										<option value="egypt">Egypt</option>
										<option value="saudi">Saudi Arabia</option>
										<option value="uae">UAE</option>
										<option value="kuwait">Kuwait</option>
										<option value="qatar">Qatar</option>
										<option value="bahrain">Bahrain</option>
										<option value="oman">Oman</option>
										<option value="jordan">Jordan</option>
										<option value="other">Other</option>
									</select>
								</div>

								{/* Terms Checkbox */}
								<div className="mb-3" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
									<input
										type="checkbox"
										name="termsAccepted"
										checked={formData.termsAccepted}
										onChange={handleChange}
										style={{ marginTop: '4px', width: '16px', height: '16px', cursor: 'pointer' }}
										required
									/>
									<span style={{ fontSize: '13px', color: '#666', lineHeight: '1.5' }}>
										{t('cta.form.termsCheckbox')}{' '}
										<Link to="/terms-and-condition" style={{ color: '#4318FF', textDecoration: 'underline' }}>
											{t('cta.form.termsLink')}
										</Link>*
									</span>
								</div>

								{/* Privacy Checkbox */}
								<div className="mb-4" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
									<input
										type="checkbox"
										name="privacyAccepted"
										checked={formData.privacyAccepted}
										onChange={handleChange}
										style={{ marginTop: '4px', width: '16px', height: '16px', cursor: 'pointer' }}
										required
									/>
									<span style={{ fontSize: '13px', color: '#666', lineHeight: '1.5' }}>
										{t('cta.form.privacyCheckbox')}{' '}
										<Link to="/terms-and-condition" style={{ color: '#4318FF', textDecoration: 'underline' }}>
											{t('cta.form.privacyLink')}
										</Link>*
									</span>
								</div>

								{/* Submit Button */}
								<button
									type="submit"
									className="demo-btn-animated"
									style={{
										width: 'auto',
										padding: '16px 40px',
										borderRadius: '50px',
										border: 'none',
										backgroundColor: '#0e1e3f',
										color: '#fff',
										fontSize: '16px',
										fontWeight: '600',
										cursor: 'pointer',
										transition: 'all 0.3s ease',
										position: 'relative',
										overflow: 'hidden'
									}}
								>
									{t('cta.button1')}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cta;

