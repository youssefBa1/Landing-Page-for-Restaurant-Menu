import Heading from "./components/Heading";
import Menu from "./components/Menu";
import Form from "./components/Form";
export default function App() {
  return (
    <div className="max-w-screen overflow-hidden">
      <Heading></Heading>
      <Menu></Menu>
      <Form></Form>
    </div>
  )
}