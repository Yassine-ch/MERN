import './App.css';
import axios from 'axios'
import CreateForm from './components/CreateForm';
import { Routes, Route,link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>Products Manager</h1>
      <Routes>
      <Route path='/'element={<CreateForm />} />
            </Routes>

    </div>
  )
}

export default App
