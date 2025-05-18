import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./components/Homepage"
import FullDetails from "./components/FullDetails"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:countryName" element={<FullDetails />} />
        {/* <Route path="/details/:countryName" element={<FullDetails />} /> */}
      </Routes>
      {/* <Homepage />     */}
      {/* <FullDetails /> */}
    </Router>
  )
}

export default App
