
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Main from "./views/main";
import AdminDashboard from "./views/Admin";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/admin" element={<AdminDashboard></AdminDashboard>}></Route>

      </Routes>
    </Router>
  )
}