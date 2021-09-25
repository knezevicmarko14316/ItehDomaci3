import {Route, Switch} from "react-router";
import EventEdit from "../views/EventEdit";
import Event from "../views/Event";
import BuyTicket from "../views/BuyTicket";

function Routes() {
	return (
		<Switch>
			<Route exact path="/events/new">
				<EventEdit/>
			</Route>
			<Route path="/events/:id">
				<EventEdit/>
			</Route>
			<Route path="/tickets">
				<BuyTicket/>
			</Route>
			<Route exact path="/events">
				<Event/>
			</Route>
			<Route>
				<Event/>
			</Route>
		</Switch>
	);
};

export default Routes;
