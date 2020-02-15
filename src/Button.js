import React, { useEffect, useState } from 'react'

function Button(){
  const [state, setState] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setState(!state)
    },1000)
  })

  return(
    <button style={{
      color: state ? 'royalblue' : 'hotpink'
    }}>Button</button>
  )
}

export default Button