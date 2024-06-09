import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import { Route, Router, Routes} from 'react-router-dom';
import Tree from './Components/Tree/Tree';
import {treeData} from './Components/Tree/treeData';
import generateRoutes from './Components/Tree/routes';
// const routes = [
//   {path: "/", element: <About/>},
//   {path: "/projects/*", element: <Projects/>},  
// ]

function App() {
  const routes = generateRoutes(treeData);
  // const items = routes.map(({path, element}, i) => 
  //  <Route path={path} key={`${path}-${i}`} element={element}></Route> 
  // )
  return (
	<div className="App">
		<div style={{display: 'flex'}}>
			<Tree data={treeData}/>
			<div>
				<Routes>
				{routes}
				</Routes>
			</div>
		</div>
	</div>
  )
}

export default App;
