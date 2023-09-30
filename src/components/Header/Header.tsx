import { formatDate } from "../../utils/helpers";
import "./Header.css";

function Header() {
	let currentDate = new Date();

	return (
		<div className="header">
			<p style={{ float: "left" }}>{formatDate(currentDate)}</p>
			<div className="profile">
				<div id="info">
					<p>Hi, Anisha!</p>
					<p id="logout">Logout</p>
				</div>
				<div id="profile" />
			</div>
		</div>
	);
}

export default Header;
