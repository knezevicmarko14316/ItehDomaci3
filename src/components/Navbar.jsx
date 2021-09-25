import {Link} from "react-router-dom";

function Navbar() {
	return (<nav>
		<div className="nav-wrapper container">
			<Link to="/" className="brand-logo">Pocetna</Link>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li><Link to="/events/new">Novi Dogadjaj</Link></li>
				<li><Link to="/events">Dogadjaji</Link></li>
				<li><Link to="/tickets">Karte</Link></li>
			</ul>
		</div>
	</nav>);
}

export default Navbar;