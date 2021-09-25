import {useEffect, useState} from "react";
import EventLI from "../components/EventLI";
import * as handler from "../EventDataHandler/Handle";

function Event() {
	const [events, setEvents] = useState([]);
	useEffect(() => {
		handler.getAll()
			.then(setEvents);
	}, []);

	return (
		<div className="container">
			<ul className="collection">
				{events.map(event => <EventLI event={event} />)}
			</ul>
		</div>
	);
}

export default Event;