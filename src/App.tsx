import React, { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import { appStyles } from "./utils/consts"

function App() {

  const [navOpen, setNavOpen] = useState(true)

  let layout = navOpen ? appStyles.open : appStyles.closed

  function handleMenuBtnClick() {
    setNavOpen(!navOpen)
  }

  return (
    <div className="App">
      <Navbar open={navOpen} handleMenuBtnClick={handleMenuBtnClick} style={layout.nav}/>
      <main style={layout.main}>
        <Header />
      </main>
    </div>
  )
}

export default App
