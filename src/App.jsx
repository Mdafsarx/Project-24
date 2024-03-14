import {  useState } from "react"
import Cards from "./Cards/Cards"
import Credit from "./Cradits/Credit"
import Header from "./header/Header"

function App() {

const [dataForCredit,setDataCredit]=useState([])

function handleCredit(data){
setDataCredit([...dataForCredit,data])

}


  return (
    <div>
      <Header/>

<main className="md:max-w-7xl mx-auto flex flex-col-reverse md:flex-row my-16 gap-10">
  <Cards handleCredit={handleCredit}/>
  <Credit data={dataForCredit}/>
</main>

    </div>
  )
}

export default App
