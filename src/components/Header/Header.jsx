import './Header.css'
import './Responsividade.css'
import Logo from "../../assets/images/logo.svg"
import Todo from "../../assets/images/icon-todo.svg"
import Calendar from "../../assets/images/icon-calendar.svg"
import Reminders from "../../assets/images/icon-reminders.svg"
import Planning from "../../assets/images/icon-planning.svg"
import Menu     from "../../assets/images/icon-menu.svg"
function Header() {
  return (
    <>
      <header>
        <img src={Logo} alt="Logo" />
        <nav className="content-nav">
          <ul className='hist'>
            <li className="dropdown">
              Features
              <ul className="dropdown-menu">
                <li> <img src={Todo} alt="" /> Todo List</li>
                <li> <img src={Calendar} alt="" /> Calendar</li>
                <li> <img src={Reminders} alt="" /> Reminders</li>
                <li> <img src={Planning} alt="" /> Planning</li>
              </ul>
            </li>
            <li className="dropdown">
              Company
              <ul className="dropdown-menu">
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            </li>
            <li>Careers</li>
            <li><a href='#'>About</a></li>
          </ul>

          <div className="btns">
            <a href="#" className="login">Login</a>
            <a href="#" className="register">Register</a>
          </div>
         
        </nav>
        
        <img src={Menu} alt="" />
      </header>
    </>
  )
}

export default Header
