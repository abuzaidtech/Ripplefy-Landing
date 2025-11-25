import React, { createContext, useContext, useEffect, useState } from "react";
import enTranslations from "../translations/en.json";
import arTranslations from "../translations/ar.json";

const LanguageContext = createContext();

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};

export const LanguageProvider = ({ children }) => {
	// Get initial language from localStorage or default to 'en'
	const [language, setLanguage] = useState(() => {
		const savedLanguage = localStorage.getItem("ripplefy-language");
		return savedLanguage || "en";
	});

	const translations = {
		en: enTranslations,
		ar: arTranslations,
	};

	// Update document direction and language when language changes
	useEffect(() => {
		const direction = language === "ar" ? "rtl" : "ltr";
		document.documentElement.setAttribute("dir", direction);
		document.documentElement.setAttribute("lang", language);
		localStorage.setItem("ripplefy-language", language);
	}, [language]);

	const toggleLanguage = () => {
		setLanguage((prev) => (prev === "en" ? "ar" : "en"));
	};

	const t = (key) => {
		const keys = key.split(".");
		let value = translations[language];

		for (const k of keys) {
			value = value?.[k];
			if (value === undefined) {
				console.warn(`Translation key not found: ${key}`);
				return key;
			}
		}

		return value;
	};

	const value = {
		language,
		setLanguage,
		toggleLanguage,
		t,
		isRTL: language === "ar",
	};

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
