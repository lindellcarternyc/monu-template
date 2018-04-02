import * as React from 'react'

import { Colors } from '../constants'

interface ActionButtonBackgroundProps {
  visible: boolean
}
export const ActionButtonBackground = (props: ActionButtonBackgroundProps): JSX.Element => {
  return(
    <div 
      style={{
        backgroundColor: Colors.Blue,
        position: 'absolute',
        width: props.visible ? 'calc(100% - 1px)' : '0',
        height: 'calc(100% - 1px)',
        top: 'calc(50%)', left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '2rem',
        zIndex: -1,
        transition: 'width 0.3s ease'
      }}
    >{' '}
    </div>
  )
}