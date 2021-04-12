import React, {useContext} from 'react'
import Banner from "../images/banner.png"
import styled from "styled-components"
import "../css/typography.css"
import {useHistory} from 'react-router-dom'
import { MyContext } from '../context'

const HomeDiv = styled.div`
    min-height: 90vh;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    color: white;
    align-items: center;
    > div {
        display: flex;
        flex-direction: column;
    }
    h1 {
        font-family: 'L Light';
        color: white;
        font-size: 6vw;
        border-bottom: 2px solid white;
        line-height: 100%;
        margin-bottom: -.5vw;
    }
    p {
        font-family: 'L Black';
        font-size: 1.8vw;
        margin-top: .8vw
    }
    button {
        border: 2px solid white;
        background-color: transparent;
        font-family: 'L Regular';
        font-size: 2vw;
        width: 18vw;
        align-self: center;
        margin-top: 1.5vw;
        cursor: pointer;
    }

    @media only screen and (max-width: 480px) {
        min-height: 77vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
        display: flex;
        justify-content: center;
        color: white;
        align-items: center;
    > div {
        display: flex;
        flex-direction: column;
    }
    h1 {
        font-family: 'L Light';
        color: white;
        font-size: 15vw;
        border-bottom: 2px solid white;
        line-height: 100%;
        margin-bottom: -.5vw;
        margin-top: -20vw;
    }
    p {
        font-family: 'L Black';
        font-size: 5vw;
        margin-top: .8vw
    }
    button {
        border: 2px solid white;
        background-color: transparent;
        font-family: 'L Regular';
        font-size: 6vw;
        width: 55vw;
        padding: 1vw;
        align-self: center;
        margin-top: 10vw;
        cursor: pointer;
    }
    }
`

function Home() {
    let history = useHistory();
    const { clearCtxUser, user } = useContext(MyContext);

    const buttonClick = () => {
        history.push('/tour-select')
    }

    return (
        <HomeDiv style={{backgroundImage: `url(${Banner})`}}>
            <div>
                <h1>Crea tu oasis</h1>
                <p>¡Empieza a decorar tu hogar!</p>
                <button onClick={buttonClick}>Iniciar recorrido</button>
                {user && (
                    <button style={{marginTop: '5vw'}} onClick={() => history.push('/create-furniture-hhvc3an28yu21okq32wzs')}>Crear Mueble</button>
                )}
            </div>
        </HomeDiv>
    )
}

export default Home
