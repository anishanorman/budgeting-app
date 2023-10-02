import { CSSProperties, FC } from "react";
import NavLink from "./NavLink/NavLink";
import "./Navbar.css";

interface NavbarProps {
	open: boolean;
	handleMenuBtnClick: () => void;
	style: {
		nav: CSSProperties;
		link: {
			a: CSSProperties;
			label: CSSProperties;
		};
	};
}

const Navbar: FC<NavbarProps> = ({ open, handleMenuBtnClick, style }) => {
	return (
		<nav style={style.nav}>
			<button className="menuBtn" onClick={handleMenuBtnClick}>
				<span className="material-symbols-outlined">menu</span>
			</button>

			<div className="logo" />
			<hr className="divider" />
			<div className="links">
				<div className="pages">
					<NavLink label="Home" href="" icon="home" style={style.link} />
					<NavLink
						label="Placeholder"
						href=""
						icon="credit_card"
						style={style.link}
					/>
					<NavLink
						label="Placeholder"
						href=""
						icon="shopping_bag"
						style={style.link}
					/>
					<NavLink
						label="Placeholder"
						href=""
						icon="payments"
						style={style.link}
					/>
					<NavLink
						label="Placeholder"
						href=""
						icon="pie_chart"
						style={style.link}
					/>
				</div>
				<div className="divider" />
				<NavLink
					label="Placeholder"
					href=""
					icon="settings"
					style={style.link}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
