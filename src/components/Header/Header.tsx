import { formatDate } from "../../utils/helpers";
import "./Header.css";

function Header() {
	let currentDate = new Date();

	return (
		<header>
			<p style={{ float: "left" }}>{formatDate(currentDate)}</p>
			<div className="profile">
				<div id="info">
					<p>Hi, Anisha!</p>
					<p id="logout">Logout</p>
				</div>
				<div id="profile" />
			</div>
		</header>
	);
}

export default Header;
