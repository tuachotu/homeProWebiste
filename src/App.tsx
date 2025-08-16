import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Product from './components/Product'
import Team from './components/Team'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App