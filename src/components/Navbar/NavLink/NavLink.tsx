import "./NavLink.css"
import { FC } from "react"

interface NavLinkProps {
  label: string
  href: string
  icon: string
  style: {a: React.CSSProperties, label: React.CSSProperties}
}

const NavLink: FC<NavLinkProps> = ({ label, href, icon, style }) => {
  return (
    <a href={href} style={style.a}>
      <span className="material-symbols-outlined">{icon}</span>
        {label}
    </a>
  )
}

export default NavLink
