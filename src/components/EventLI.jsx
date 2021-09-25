import {Link} from "react-router-dom"

function EventLI({event}){
    return <>
		<li className="colection-item avatar">
        <img src={event.image} alt="Artist Image" className="circle"/>
        <span className="title">{event.title}</span>
        <p> Tip dogadjaja: {event.type}<br/>
			Datum i vreme: {event.date} {event.time}<br/>
			Cena karte: {event.ticketPrice}<br/>
			Dostupno karata: {event.ticketsAvailable === 0 ? "Sold out" : event.ticketsAvailable}<br/>
			Prodato karata: {event.ticketsSold}
		</p>
		<p className="truncate">
			{event.description}
		</p>
		<Link to={`/events/${event.id}`} className="secondary-content btn btn-flat right"><i className="material-icons">edit</i></Link>
		</li>
	</>;
}

export default EventLI;
