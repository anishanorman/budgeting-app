import "./NavLink.css"
import { FC } from "react"

interface NavLinkProps {
  label: string
  href: string
  icon: string
  style: React.CSSProperties
}

const NavLink: FC<NavLinkProps> = ({ label, href, icon, style }) => {
  return (
    <a href={href} style={style}>
      <span className="material-symbols-outlined">{icon}</span>
      {label}
    </a>
  )
}

export default NavLink
