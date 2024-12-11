import React from 'react'
import '../styles/HomePage.scss'
import Header from '../components/Header'
import ForcaBruta from '../components/ForcaBruta'
import DivisaoConquista from '../components/DivisaoConquista'
import ProgramacaoDinamica from '../components/ProgramacaoDinamica'


function HomePage() {
    return (
        <div>
            <Header/>
            <ForcaBruta/>
            <DivisaoConquista/>
            <ProgramacaoDinamica/>
        </div>
    )
}

export default HomePage
