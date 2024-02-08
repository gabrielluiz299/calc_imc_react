import { useState } from "react"

const Formulario = () => {

    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);

    const renderizaResultado = () => {
        const alturaPeso = altura * altura;
        const imc = peso / alturaPeso;
        
        if (imc < 18,5) {
            return (
                <p>Você está abaixo do peso</p>
            )
        } else if (imc >= 18,5 && imc < 25) {
            return (
                <p>Você está com o peso normal</p>
            )
        } else if (imc >= 25 && imc < 30) {
            return (
                <p>Você está com sobrepeso</p>
            )
        } else if (imc > 30 && imc < 40) {
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