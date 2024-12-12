import React from 'react'
import '../styles/Header.scss'

function Header() {
    return (
        <div>
            <div className='header'>
                <div className='header-titulo'>
                    <p>ACC</p>
                </div>
                <div className='header-itens'>
                    <ul className='header-lista'>
                        <li>
                            Força Bruta
                        </li>
                        <li>
                            Divisão & Conquista
                        </li>
                        <li>
                            Programação Dinâmica
                        </li>
                        <li>
                            Sobre
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
