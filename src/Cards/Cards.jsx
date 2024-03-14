import { useEffect } from "react";
import Card from "../Card/Card";
import { useState } from "react";

const Cards = ({handleCredit}) => {

const [data,setData]=useState([])

useEffect(function(){

const dataLoad=async()=>{
const res=await fetch('./data.json')
const data=await res.json();
setData(data)
}
dataLoad()

},[])



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] mx-auto md:w-[80%]">
            
{
    data.map((Data,index)=><Card key={index} Data={Data} handleCredit={handleCredit}/>)
}            


        </div>
    );
};

export default Cards;