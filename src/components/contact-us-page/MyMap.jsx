import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

function MyMap() {
	const position = { lat: 30.0444, lng: 31.2357 };
	return (
		<div className="responsive-map">
			<APIProvider apiKey={""}>
				<Map defaultCenter={position} defaultZoom={10} mapId="DEMO_MAP_ID">
					<AdvancedMarker position={position} />
				</Map>
			</APIProvider>
		</div>
	);
}

export default MyMap;
