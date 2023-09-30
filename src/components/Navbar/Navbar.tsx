import { CSSProperties, FC, useState } from "react"
import NavLink from "./NavLink/NavLink"
import "./Navbar.css"

interface NavbarProps {
  open: boolean
  handleMenuBtnClick: () => void
  style: {nav: CSSProperties, link: CSSProperties}
}

const Navbar: FC<NavbarProps> = ({ open, handleMenuBtnClick, style }) => {

  return (
    <nav style={style.nav}>
      <button className="menuBtn" onClick={handleMenuBtnClick}>
        <span className="material-symbols-outlined">menu</span>
      </button>

      <div className="logo" />
      <div className="links">
        <div className="pages">
          <NavLink
            label={open ? "Home" : ""}
            href=""
            icon="home"
            style={style.link}
          />
          <NavLink
            label={open ? "Placeholder" : ""}
            href=""
            icon="credit_card"
            style={style.link}
          />
          <NavLink
            label={open ? "Placeholder" : ""}
            href=""
            icon="shopping_bag"
            style={style.link}
          />
          <NavLink
            label={open ? "Placeholder" : ""}
            href=""
            icon="payments"
            style={style.link}
          />
          <NavLink
            label={open ? "Placeholder" : ""}
            href=""
            icon="pie_chart"
            style={style.link}
          />
        </div>
        <NavLink
          label={open ? "Placeholder" : ""}
          href=""
          icon="settings"
          style={style.link}
        />
      </div>
    </nav>
  )
}

export default Navbar
