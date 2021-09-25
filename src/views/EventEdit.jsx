import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router";
import * as handler from "../EventDataHandler/Handle";


function EventEdit() {
	const {id} = useParams();
	const history = useHistory();
	const [event, setEvent] = useState({
		description: '',
		ticketsAvailable: 0 ,
		ticketPrice: 0,
		image: '',
		type: '',
		date: '',
		time: '',
		title: '',
		ticketsSold: 0
	});

	useEffect(() => {
		if (id !== "new") {
		handler.getById(id)
			.then(setEvent);
			};
	}, []);

	// useEffect(() => {
	// 	M.updateTextFields();
	// }, [event]);

	const handleInput = ({currentTarget: input}) => {
		let {value, name} = input;
		if (name === "ticketsAvailable") {
			value = parseInt(value);
		}

		setEvent({...event, [name]: value});
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		if (event.id) {
			handler.update(event)
				.then(_event => {
					setEvent(_event);
					alert("Updated");
				});
		} else {
			handler.save(event)
				.then(_event => {
					setEvent(_event);
					alert("Saved");
					history.replace("/events");
				});
		}
	};

	const handleDelete = () => {
		handler.deleteById(event.id)
			.then(() => history.replace("/events"));
	};

	return <div className="container">
		<form onSubmit={handleSubmit}>
			<div className="row">
				<div className="input-field col s12 m6 l4">
					<img style={{height: 200}} src={(event) ? event.image : ""} alt='No image'/>
					<input value={(event) ? event.image : ""}
					       onChange={handleInput}
					       name="image"
					       placeholder="image"
					       id="image"
					       type="text"/>
					<label for="image">Image</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m6 l4">
					<input value={(event) ? event.title : ""}
					       onChange={handleInput}
					       name="title"
					       placeholder="Title"
					       id="title"
					       type="text"/>
					<label for="title">Title</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m6 l4">
					<input value={(event) ? event.type : ""}
					       onChange={handleInput}
					       name="type"
					       placeholder="Tip dogadjaja"
					       id="type"
					       type="text"/>
					<label for="type">Tip dogadjaja</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m6 l4">
					<input value={(event) ? event.date : ""}
					       onChange={handleInput}
					       name="date"
					       placeholder="Datum"
					       id="date"
					       type="date"/>
					<label for="date">Datum</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m6 l4">
					<input value={(event) ? event.time : ""}
					       onChange={handleInput}
					       name="time"
					       placeholder="Vreme"
					       id="time"
					       type="time"/>
					<label class="active" for="time">Vreme</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m4 l2">
					<input value={(event) ? event.ticketPrice : "0"}
					       onChange={handleInput}
					       name="ticketPrice"
					       placeholder="Cena karte"
					       id="ticketPrice"
					       type="number"/>
					<label class="active" for="ticketPrice">Cena karte</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m4 l2">
					<input value={(event) ? event.ticketsAvailable : "0"}
					       onChange={handleInput}
					       name="ticketsAvailable"
					       placeholder="Dostupno karata"
					       id="ticketsAvailable"
					       type="number"/>
					<label class="active" for="ticketsAvailable">Dostupno karata</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m4 l2">
					<textarea value={(event) ? event.description : ""}
					          className="materialize-textarea"
					          onChange={handleInput}
					          name="description"
					          id="description"/>
					<label class="active" for="description">Description</label>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<button className="btn">Save</button>
					<br/>
					<button className="btn red" type="button" onClick={handleDelete}>Delete</button>
				</div>
			</div>
		</form>
	</div>;
};

export default EventEdit;