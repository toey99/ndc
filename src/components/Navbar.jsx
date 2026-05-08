import { useState } from 'react'
import {
  FaReact,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaEnvelope,
  FaGithub,
  FaBars,
  FaTimes,
} from 'react-icons/fa'
import './Navbar.css'

const links = [
  { href: '#home', label: 'Home', icon: <FaHome /> },
  { href: '#about', label: 'About', icon: <FaInfoCircle /> },
  { href: '#services', label: 'Services', icon: <FaCogs /> },
  { href: '#contact', label: 'Contact', icon: <FaEnvelope /> },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#home">
        <FaReact className="navbar-brand-icon" />
        <span>MyApp</span>
      </a>

      <button
        className="navbar-toggle"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`navbar-links ${open ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setOpen(false)}>
              {link.icon}
              <span>{link.label}</span>
            </a>
          </li>
        ))}
        <li>
          <a
            className="navbar-cta"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
