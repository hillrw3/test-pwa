import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import {BrowserRouter, Link, Route} from "react-router-dom"

class App extends Component {
  render() {
    const images = [
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/09/funny-dog-thoughts-tweets-1.jpg",
      "https://timedotcom.files.wordpress.com/2016/09/gettyimages-101904705.jpg",
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/09/funny-dog-thoughts-tweets-1.jpg",
      "https://timedotcom.files.wordpress.com/2016/09/gettyimages-101904705.jpg",
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/09/funny-dog-thoughts-tweets-1.jpg",
      "https://timedotcom.files.wordpress.com/2016/09/gettyimages-101904705.jpg",
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/09/funny-dog-thoughts-tweets-1.jpg",
      "https://timedotcom.files.wordpress.com/2016/09/gettyimages-101904705.jpg",
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/09/funny-dog-thoughts-tweets-1.jpg",
      "https://timedotcom.files.wordpress.com/2016/09/gettyimages-101904705.jpg",
    ]


    const App = () => (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {images.map((imghref, i) => <div key={i}>
            <Link to={{pathname: "/dog", state: {imghref: imghref}}} imghref={imghref}>
              <img src={imghref} alt="dog" width="200px" height="auto"/>
            </Link>
          </div>
        )}
      </div>
    )

    const Dog = (match) => (
      <div>
        {console.log(match)}
        <h1>Look at this dog!</h1>
        <img src={match.location.state.imghref} alt="dog" width="200px" height="auto"/>
      </div>
    )

    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={App}/>
          <Route path="/dog" component={Dog}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
