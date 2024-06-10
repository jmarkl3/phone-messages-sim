import React, { useState } from 'react'
import screenshot from "../../Images/Screenshot_20240527-101421.png"
import "./ScreenshotOverlay.css"

function ScreenshotOverlay() {

    const [showOverlay, setShowOverlay] = useState(true)

  return (
    <div>
        {showOverlay && 
            <div className='screenshotOverlay'>
                <img src={screenshot}></img>
            </div>
        }
        <div className='screenshotOverlayButton'>
            <button onClick={()=>setShowOverlay(!showOverlay)}>{showOverlay?"Hide Overlay":"Show Overlay"}</button>
        </div>
    </div>
  )
}

export default ScreenshotOverlay