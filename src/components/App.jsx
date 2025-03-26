import { BrowserRouter } from 'react-router-dom'
import Router from "./Router"
import '../assets/styles/App.scss'

function App() {
  return (
      <BrowserRouter basename="/coeurcoeur">
          <Router />
      </BrowserRouter>
    )
}

export default App
