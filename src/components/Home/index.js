import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="heading-card">
          <h1 className="heading">Find The Job That Fits Your Life</h1>
          <p className="descrptions">
            Millons of people are searhing for jobs, salary information, company
            reviews. Find the job that fits your abilities and potential.
          </p>
          <div>
            <button type="button" className="button1">
              Find Jobs
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
