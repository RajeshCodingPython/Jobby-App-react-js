import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const logoW = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

class LoginForm extends Component {
  state = {
    userName: '',
    Password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  getUsername = event => {
    this.setState({userName: event.target.value})
  }

  getUserPassword = event => {
    this.setState({Password: event.target.value})
  }

  onSubmitSuccess = token => {
    console.log(token)
    Cookies.set('jwt_token', token, {expires: 30})
  }

  formSubmit = async event => {
    event.preventDefault()
    const {userName, Password} = this.state
    const data = {username: userName, password: Password}
    console.log(data)
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
    }
    const response = await fetch(url, options)
    const responseData = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(responseData.jwt_token)
    } else {
      console.log(responseData.error_msg)
      this.setState({errorMsg: responseData.error_msg, showSubmitError: true})
    }
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="loginCard">
        <form className="form-card" onSubmit={this.formSubmit}>
          <img src={logoW} alt="website logo" className="websiteLogo" />
          <div className="inputCard">
            <label htmlFor="username" className="username">
              USERNAME
            </label>
            <input
              className="inputCard1"
              type="search"
              id="username"
              onChange={this.getUsername}
              placeholder="Username"
            />
          </div>
          <div className="inputCard">
            <label htmlFor="password" className="username">
              PASSWORD
            </label>
            <input
              className="inputCard1"
              type="search"
              id="password"
              onChange={this.getUserPassword}
              placeholder="Password"
            />

            <button className="button1" type="submit">
              Login
            </button>
            {showSubmitError && <p1 className="errorMsg">{errorMsg}</p1>}
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
