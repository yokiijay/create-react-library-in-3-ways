import React, { useEffect, useState } from 'react'
import { css } from '@emotion/core'

function Button() {
  const [state, setState] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setState(!state)
    }, 1000)
  })

  const btnStyle = css`
    padding: 10px 20px;
    font-size: 4rem;
    border: none;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  `

  return (
    <button
      css={css`
        ${btnStyle};
        color: ${state ? 'royalblue' : 'hotpink'};
      `}
    >
      Button
    </button>
  )
}

export default Button
