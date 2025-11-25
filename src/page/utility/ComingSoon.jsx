import Countdown from "react-countdown";
import CountDownRenderer from "../../components/coming-soon-page";

function ComingSoonPage() {
	return (
		<>
			<Countdown date="Decembar 31, 2025" renderer={CountDownRenderer} />
		</>
	);
}

export default ComingSoonPage;
