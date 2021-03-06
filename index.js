import React from 'react'
import { Link, BrowserRouter, StaticRouter, Route } from 'react-router-dom'
import ReactDOMServer from 'react-dom/server'
import ReactDOM from 'react-dom'
import './styles/index.scss'

const Home = props => 
<div>
	<header>
		<div class="container">
			<p>Header</p>
		</div>
	</header>
	<div class='container content'>
	  <h2>Home</h2>
	  <p>Hello, world</p>
	</div>
	<footer>
		<div class="container">
			<p>Copyright Eric Hendrickson</p>
		</div>
	</footer>
	</div>

const Random = props =>
	<div>
		<h1>ANOTHER PATH!</h1>
	</div>

const Html = props => 
	<html>
		<head><title>My Static Site</title></head>
		<body>
		<div id="app">
			{props.children}
		</div>
		<script src="/bundle.js"></script>
		</body> 
	</html>

const routes = (
	<div>
		<Route exact path="/" component={Home} />
		<Route exact path="/random" component={Random} />
	</div>
)

export default locals => ReactDOMServer.renderToString(
	<StaticRouter basename={locals.path} context={{}}>
		<Html>
			{routes}
		</Html>
	</StaticRouter>
)

if (typeof document != 'undefined') {
	ReactDOM.render(
	  <BrowserRouter>{routes}</BrowserRouter>,
	  document.getElementById('app')
	)
  }