import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'

import {BsBoxArrowRight} from 'react-icons/bs'

import {FaBriefcase} from 'react-icons/fa'

import './index.css'

const Navbar = props => (
  <nav className="navbar-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
      alt="website logo"
      className="website-logo-nav"
    />
    <div className="nav-container">
      <div className="nav-links">
        <li className="listItam">Home</li>
        <li className="listItam">Jobs</li>
      </div>
      <div className="jobButton">
        <button type="button" className="logout">
          Logout
        </button>
      </div>
    </div>
    <div className="nav-itmes-none">
      <button type="button" className="iconimg">
        <AiFillHome />
      </button>
      <button type="button" className="iconimg">
        <FaBriefcase />
      </button>
      <button type="button" className="iconimg">
        <BsBoxArrowRight />
      </button>
    </div>
  </nav>
)

export default withRouter(Navbar)
