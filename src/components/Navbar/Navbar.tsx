import { CSSProperties, FC } from "react";
import NavLink from "./NavLink/NavLink";
import "./Navbar.css";

interface NavbarProps {
	open: boolean;
	handleMenuBtnClick: () => void;
	style: {
		nav: CSSProperties;
		link: {
			link: CSSProperties;
			label: CSSProperties;
		};
	};
}

const Navbar: FC<NavbarProps> = ({ handleMenuBtnClick, style, open }) => {
	return (
		<nav style={style.nav}>
			<button className="menuBtn" onClick={handleMenuBtnClick}>
				<span className="material-symbols-outlined">menu</span>
			</button>

			<div className="logo" />
			<div className="links">
				<div className="pages">
					<NavLink label="Dashboard" href="/" icon="home" style={style.link} open={open}/>
					<NavLink
						label="Budget"
						href="/budget"
						icon="payments"
						style={style.link}
						open={open}
					/>
					<NavLink
						label="Spending"
						href="/spending"
						icon="shopping_bag"
						style={style.link}
						open={open}
					/>
					<NavLink
						label="History"
						href="/history"
						icon="History"
						style={style.link}
						open={open}
					/>
				</div>
				<NavLink
					label="Settings"
					href="/settings"
					icon="settings"
					style={style.link}
					className="border-top"
					open
				/>
			</div>
		</nav>
	);
};

export default Navbar;
