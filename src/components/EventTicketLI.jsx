import EventLI from "./EventLI";

function EventTicketLI({event, onPurchase}) {

	const handlePurchase = () => {
		onPurchase(event.id);
	};

	return <>
        <EventLI event={event}/>
		<button onClick={handlePurchase} disabled={event.ticketsAvailable === 0} className="btn btn-flat secondary-content"><i
			className="material-icons">local_activity</i></button>
	</>;
}

export default EventTicketLI;