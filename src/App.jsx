import { useState } from "react"
import Navbar from "./components/Navbar"
import RecipeBoard from "./components/RecipeBoard";

function App() {
  const [tag , setTag] = useState("");
  return (
    <>
    <Navbar setTag = {setTag}/>
    <RecipeBoard tag = {tag}/>
    </>
  )
}

export default App
