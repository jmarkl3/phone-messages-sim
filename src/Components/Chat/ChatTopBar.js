import React, { useEffect, useState } from 'react'
import backArrow from "../../Images/Screenshot message icon back.png"
import rightButtons from "../../Images/Screenshot message icons right.png"
import "./ChatTopBar.css"

function ChatTopBar({name}) {


    const [initial, setInitial] = useState()

    useEffect(()=>{
        if(!name || typeof name !== "string"){
            setInitial("")
            return
        }
        setInitial(name[0])
    },[name])

  return (
    <div className='chatTopBar'>
        <div className='chatTopBarLeft'>
            <div className='backArrow'>
                <img src={backArrow}></img>
            </div>
            <div className='nameInitialsArea'>
                <div className='initialsCircle'>{initial}</div>
                <div className='topBarName'>
                    {name}
                </div>

            </div>
        </div>
        
        <div className='chatTopBarRight'>
            <img src={rightButtons}></img>
        </div>
    
    </div>
  )
}

export default ChatTopBar