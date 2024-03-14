import {  useState } from "react"
import Cards from "./Cards/Cards"
import Credit from "./Cradits/Credit"
import Header from "./header/Header"

function App() {

  
const [dataForCredit,setDataCredit]=useState([])


function handleCredit(data){
  // const CreditSum=dataForCredit.reduce((p,c)=>p+c.Credit)
  const Credit=document.getElementById('Credit').innerText
  if(parseInt(Credit) + data.credit >15){return}
  else{
    
  }

  setDataCredit([...dataForCredit,data])


}
// if(dataForCredit.reduce((p,c)=>p+c.credit,0)>=15){alert()}

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
