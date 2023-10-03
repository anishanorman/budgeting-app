import { FC } from "react"
import { Link } from "react-router-dom"
import "./NavLink.css"
import { useLocation } from "react-router-dom"

interface NavLinkProps {
  className?: string
  label: string
  href: string
  icon: string
  style: { link: React.CSSProperties; label: React.CSSProperties }
  open: boolean
}

const NavLink: FC<NavLinkProps> = ({
  label,
  href,
  icon,
  style,
  open,
  className,
}) => {
  const currentLocation = useLocation().pathname

  const active = currentLocation == href

  className += active ? (open ? " openHighlight" : " closedHighlight") : ""

  return (
    <Link to={href} style={style.link} className={className}>
      <span className="material-symbols-outlined">{icon}</span>
      <p className="label" style={style.label}>
        {label}
      </p>
    </Link>
  )
}

export default NavLink
