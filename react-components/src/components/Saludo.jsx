import styles from './styles/Saludo.module.css'

//Componente con Props = Propiedades
function Saludo({nombre, edad, peso}){
    const pesoIf = peso ? <p>Tu peso es de {peso} kg.</p> : null;

    return (
        <div className={styles['saludo-container']}>
            <h2>¡Hola, {nombre}!</h2>
            <p>Tienes {edad} años.</p>
            {pesoIf}
        </div>
    )
}

export default Saludo