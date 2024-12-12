import React from 'react'
import ForcaBruta from './ForcaBruta'
import DivisaoConquista from './DivisaoConquista'

function Section({children}) {

  return (
    <div>
      {
        children === 'body' && (
            <>
                <ForcaBruta/>
                <DivisaoConquista/>
            </>
        )
      }
    </div>
  )
}

export default Section
