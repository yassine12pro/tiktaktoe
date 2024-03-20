import React, { Dispatch, SetStateAction } from 'react'
type cellprops= {
    id:number;
    go:string ;
    setgo:Dispatch<SetStateAction<string>>;
    cells:string[]
    setcell:Dispatch<SetStateAction<string[]>>
    cell:string
    winmsg:string
}
export default function Cell({id,go,setgo,cells,setcell,cell,winmsg}:cellprops) {
    const handelclick =(e)=>{
        if (winmsg){
            return
        }
        const nottaken= !cells[id]
        if (nottaken){
            if (go=="circle"){
                handelchange("circle")
                setgo("cross")
            }else if (go=="cross"){
                handelchange("cross")
                setgo("circle")
            }
        }
        
    }

    const handelchange = (celltochange :string)=>{
        let copycells=[...cells]
        copycells[id]=celltochange
        setcell(copycells)
    }
  return (
    <div className='square' onClick={handelclick}>
        <div className={cell}> {cell ? (cell ==="circle" ? "O" : "X"):"" } </div>
    </div>
  )
}
