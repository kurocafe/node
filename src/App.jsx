import './App.css'
import  { Navbar } from "./components/navbar/navbar"
import {Button} from "./components/button/button"

function App() {
  return (
    <section>
      <h1>Blue Archive!</h1>{/* 映った */}
      <Navbar />

      <div className="content">
            <h1>Sensei!</h1>
            <p>
              Welcome to the official site of Blue Archive!
            </p>

            <div>
              <a href="https://t.co/cFEZ2MGrG5"><Button name="Discord"/></a>
              <a href="https://x.com/EN_BlueArchive?s=20"><Button name="Twitter"/></a>
            </div>
        </div>
    </section>
  )
}

export default App
