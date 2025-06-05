import "./App.css"
import Hello from "./components/Hello/Hello"

function App() {
   let content = "desde react"; 
  return (
    
    <>
      <Hello content = {content}/>
    </>
  )
}

export default App
