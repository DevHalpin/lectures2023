import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import './App.css'
import Home from './components/routing/Home'
import About from "./components/routing/About"
import Nav from "./components/routing/Nav"
import ProtectedRoute from "./components/routing/ProtectedRoute"
import { useState } from "react"
import ProductList from "./components/routing/ProductList"
import { ThemeProvider } from "./contexts/useTheme"
import Ref from "./components/ref/Ref"

function App() {
  const [user, setUser] = useState(false);
  return (
    <div className="App">
      <ThemeProvider>
      <Router>
      <Nav/>
        <Routes>
          <Route path="/about" element={<ProtectedRoute user={user}>
            <About/>
          </ProtectedRoute>} />
          <Route path="/"  element={<Home/>}/>
          <Route path="/products/*" element={<ProductList/>} />
          <Route path='/useRef' element={<Ref/>} />
           {/* <Route path="/about"  element={<About/>}/> */}
        </Routes>
      </Router>
      </ThemeProvider>
      
    </div>
  )
}

export default App
