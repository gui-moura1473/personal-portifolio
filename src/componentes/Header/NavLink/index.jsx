import './NavLink.css';

const NavLink = ({ children, to }) => {
  return (
    <li className='navItem'>
      <a href={to} className='navLink'>
        {children}
      </a>
    </li>
  )
}

export default NavLink