import { useState } from "react"

const Counter = () =>{
    const [contador, setContador] = useState(0);
     const sumarContador = () =>{
        if (contador < 15 ) {
            setContador(contador + 1 );
        } else{
            alert('Excediste el limite actual de stock.');
        }
    }
     const restarContador = () => {
        if (contador > 0) {
            setContador(contador - 1);
        } else{
            alert('El carrito ya se encuentra vacio');
        }
    }
    return(
        <div className="counterContainer">
            <h3 className="counterTittle">Counter</h3>
            <div className="btnContainer">
                <button onClick={sumarContador}>+</button>
                <p className="counter">{contador}</p>
                <button onClick={restarContador}>-</button>
            </div>
            
        </div>
    )
}
export default Counter;