import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/movies'
import Series from './pages/series'

function App() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/series' element={<Series/>}/>
        </Routes>
      </Router>
    )
  }
  
  export default App
