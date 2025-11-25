import { useLanguage } from "../../../../context/LanguageContext";

function CopyRight() {
	const { t } = useLanguage();

	return (
		<div className="sofax-footer-bottom center">
			<p>{t('footer.copyright')}</p>
		</div>
	);
}

export default CopyRight;

