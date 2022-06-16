import moleImg from './mole.png';
import moleHillImg from './molehill.png';



const Mole = (props) => {
    return (
    <div style={ { 'cursor' : 'pointer'}}>
        <div onClick={props.hitMole}>
        {
            props.DisplayMole ? (
                <img src={moleImg}/>
         ) : 
            (
                <img src={moleHillImg}/>
            )
        }
        </div>
    </div> )
};

export default Mole;