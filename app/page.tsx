"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Cell from "./components/cell";

export default function Home() {
  const arrwinner =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

  const [cells,setcell]=useState(["","","","","","","","",""])
  const [go,setgo]=useState("circle")
  const[winmsg,setwinmsg]=useState("")
  useEffect(()=>{
    arrwinner.forEach((combo)=>{
      const circlewin = combo.every((cell)=>cells[cell]==="circle")
      const crosswin = combo.every((cell)=>cells[cell]==="cross")
      if(circlewin){
        setwinmsg("circle wins !")
      }
      else if (crosswin){
        setwinmsg("cross wins !")

      }
    })
  },[cells])
  useEffect(() => {
    if(cells.every((cell) => cell !== "") && !winmsg )
    {
      setwinmsg("Draw")
    }

  },[cells,winmsg])
  return (
    <div className="container">
      <div className="gameboard">
        {cells.map((cell,index) => (
          <Cell 
          id={index} 
          go={go} 
          setgo={setgo} 
          key={index}
          cells={cells}
          setcell={setcell}
          cell={cell}
          winmsg={winmsg}/>
          
        ))}
      </div>
      <div className="msg">{winmsg}</div>
      {!winmsg && <div>{`its now ${go} turn`}</div>}
    </div>
  );
}
      
