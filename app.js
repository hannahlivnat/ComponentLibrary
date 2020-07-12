class Footer extends React.Component {
  render = () => {
    return <footer>@2020 Hannah Livnat</footer>
  }
}

class Signup extends React.Component {
  render = () => {
    const { changedisplay } = this.props
    return <form>
      <h4>Register <span><a onClick={changedisplay}>Log In?</a></span></h4>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="text" placeholder="User Name" />
      <input type="text" placeholder="Password" />
      <input type="submit" value="Continue" />
    </form>
  }
}

class Login extends React.Component {
  render = () => {
    const {changedisplay} = this.props
    return <form>
      <h4>Login <span><a onClick={changedisplay}>Register?</a></span></h4>
      <input type="text" placeholder="User Name" />
      <input type="text" placeholder="Password" />
      <input type="submit" value="Continue" />
    </form>
  }
}

class NoUser extends React.Component {
  state = {
    display : 'login'
  }

  changeDisplay = () => {
    (this.state.display === 'login') ? this.setState({display: 'signup'}) : 
    this.setState({display: 'login'})
  }

  render = () => {
    return <div className="nouser-section">
      <header>
        <h4>TheLibrary</h4>
      </header>
      <div className="main-nouser-section">
        <div>
          <h2>Stop Rewriting</h2>
          <h2>Start Filing it in The Library</h2>
          <p>
           A meaningful paragraph here
          </p>
        </div>
        {(this.state.display === 'login') ? <Login changedisplay={this.changeDisplay}/> : <Signup changedisplay={this.changeDisplay}/>}
      </div>
      <div className="bottom-banner">
        <ul>
          <li>
            <img />
            <p>Write Code</p>
          </li>
          <li>
            <img />
            <p>Create Snippet</p>
          </li>
          <li>
            <img />
            <p>Save Copy Share</p>
          </li>
          <li>Another paragraph ...</li>
        </ul>
      </div>
    </div>
  }
}

class UserPresent extends React.Component {

}

class App extends React.Component {
  state = {
    currentUser: null,
    display: 'home'
  }
  
  changeDisplay = (str) => {
    this.setState({display: str})
  }
  
  render = () => {
    return <div className="containerdiv">
      <div className="main-section">
        {(this.state.currentUser) ?
          <UserPresent display={this.state.display} changedisplay={this.changeDisplay} />
          :
          <NoUser />}
      </div>
      <Footer />
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('main')
)