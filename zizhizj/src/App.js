import React from "react";
import 'antd/dist/antd.css'; 
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './pages/Home/Home.js'
const Routers = [
	{path: '/', pathName:'首页' }
]

const App = () => (
	<Router>
		<div>
      		<Route exact  path='/' component={Home}/>
		</div>
	</Router>
);

export default App;