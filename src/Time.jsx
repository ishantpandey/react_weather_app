import React, { useState } from 'react'

function Time() {
  const[time,setTime]=useState()
  let a=setInterval(()=>{
    setTime(new Date().toLocaleTimeString())
  },1000)
  return (
   <>
   {time}
   </>
  )
}

export default Time