import { useState } from "react"

const Formulario = () => {

    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);

    const renderizaResultado = () => {
        const alturaPeso = peso / altura ** 2;
        console.log(alturaPeso);
        
        if (alturaPeso < 18.5) {
            return (
                <p>Você está abaixo do peso</p>
            )
        } else if (alturaPeso >= 18.5 && alturaPeso < 25) {
            return (
                <p>Você está com o peso normal</p>
            )
        } else if (alturaPeso >= 25 && alturaPeso < 30) {
            return (
                <p>Você está com sobrepeso</p>
            )
        } else if (alturaPeso > 30 && alturaPeso < 40) {
            return (
                <p>Você está com obesidade</p>
            )
        } else {
            return (
                <p>Você está com obesidade grave</p>
            )
        }
    }

   return (
    <form>
        <input type="number" placeholder="altura" onChange={evento => setAltura(parseFloat(evento.target.value))} />
        <input type="number" placeholder="peso" onChange={evento => setPeso(parseInt(evento.target.value))} />
        {renderizaResultado()}
    </form>
   )
 }

 export default Formulario