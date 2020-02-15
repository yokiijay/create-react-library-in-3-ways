import { css } from '@emotion/core'
import { useState } from 'react'
import { motion } from 'framer-motion'

const variants = {
  off: {
    left: 0,
    right: 'unset'
  },
  on: {
    right: 0,
    left: 'unset'
  }
}

const Switch = () => {
  const [state, setState] = useState(false)

  return (
    <motion.div
      css={{
        width: 80,
        height: 40,
        background: 'whitesmoke',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        position: 'relative',

        '.oval': {
          position: 'absolute',
          width: 38,
          height: 38,
          borderRadius: '50%',
          background: 'royalblue'
        }
      }}
      onTap={() => setState(!state)}
    >
      <motion.div className='oval' positionTransition css={css`
        left: ${state ? 'unset' : 0};
        right: ${state ? 0 : 'unset'};
      `} whileTap={{scale: 1.2}}></motion.div>
    </motion.div>
  )
}

export default Switch
