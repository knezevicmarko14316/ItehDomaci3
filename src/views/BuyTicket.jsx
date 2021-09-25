import {useEffect, useState} from "react";
import EventTicketLI from "../components/EventTicketLI";
import * as handler from "../EventDataHandler/Handle";

function BuyTicket() {
	const [events, setEvent] = useState([]);

	const getAll = () => {
		handler.getAll()
			.then(setEvent)
	}

	useEffect(() => {
		getAll()
	}, []);

	const handlePurchase = (id) => {
		const event = events.find(event => event.id === id);
		if (!event) return;

		event.ticketsAvailable--;
		event.ticketsSold++;
		handler.update(event)
			.then(() => getAll())
	}

	return (
		<div className="container">
			<ul className="collection">
				{events.map(event => <EventTicketLI onPurchase={handlePurchase} event={event} />)}
			</ul>
		</div>
	);
};

export default BuyTicket;