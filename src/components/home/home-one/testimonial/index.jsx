import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Thumb1Img from "../../../../assets/images/v1/member1.png";
import Thumb2Img from "../../../../assets/images/v1/member2.png";
import Thumb3Img from "../../../../assets/images/v1/member3.png";
import TestimonialCard from "./TestimonialCard";
import { useLanguage } from "../../../../context/LanguageContext";

const swiperSettingsOne = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 1,
	spaceBetween: 30,
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
		1536: {
			slidesPerView: 3,
		},
	},
};

const swiperSettingsTwo = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
		reverseDirection: true,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 1,
	spaceBetween: 30,

	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
		1536: {
			slidesPerView: 3,
		},
	},
};

function Testimonial() {
	const { t } = useLanguage();

	const testimonialData = [
		{
			id: crypto.randomUUID(),
			rating: 5,
			description: t('testimonials.testimonial1.text'),
			author: t('testimonials.testimonial1.author'),
			designation: t('testimonials.testimonial1.role'),
			img: Thumb1Img,
		},
		{
			id: crypto.randomUUID(),
			rating: 5,
			description: t('testimonials.testimonial2.text'),
			author: t('testimonials.testimonial2.author'),
			designation: t('testimonials.testimonial2.role'),
			img: Thumb2Img,
		},
		{
			id: crypto.randomUUID(),
			rating: 5,
			description: t('testimonials.testimonial3.text'),
			author: t('testimonials.testimonial3.author'),
			designation: t('testimonials.testimonial3.role'),
			img: Thumb3Img,
		},
	];

	return (
		<section className="sofax-section-padding2" id="testimonial">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>{t('testimonials.title')}</h2>
						<p>{t('testimonials.subtitle')}</p>
					</div>
				</div>
			</div>
			<div className="sofax-testimonial-slider">
				<Swiper {...swiperSettingsOne}>
					{testimonialData.map((testimonial) => (
						<SwiperSlide key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="sofax-testimonial-slider-2">
				<Swiper {...swiperSettingsTwo}>
					{testimonialData.map((testimonial) => (
						<SwiperSlide key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default Testimonial;

