import React from 'react'
import ForcaBruta from './ForcaBruta'
import DivisaoConquista from './DivisaoConquista'
import ProgramacaoDinamica from './ProgramacaoDinamica'

function Section({children}) {

  return (
    <div>
      {
        children === 'body' && (
            <>
                <ForcaBruta/>
                <DivisaoConquista/>
                <ProgramacaoDinamica/>
            </>
        )
      }
    </div>
  )
}

export default Section
