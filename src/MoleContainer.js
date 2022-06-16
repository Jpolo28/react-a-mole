import Mole from './Mole'
import { useState, useEffect } from 'react'

function MoleContainer(props){
    const [displayMole, setDisplayMole] = useState(false);

    useEffect (() => {
        let randSeconds = Math.ceil((Math.random) * 500)
        let timer = setTimeout ( () => {
            props.setDIsplayMode(!displayMole)
        }, randSeconds)
        return () => clearTimeout(timer)
    
    }, [displayMole])
    const hitMole = () => {
        if (displayMole) {
            setDisplayMole(false);
            props.setScore(props.score + 1)
        }
        else {
            console.log('Boohoo , You Missed!!')
        }
    }

    return (
        <div>
            <h2> Mole Container </h2>
            <Mole hitMole={hitMole} displayMole={displayMole}/>
        </div>
    )
}

export default 'MoleContainer';
