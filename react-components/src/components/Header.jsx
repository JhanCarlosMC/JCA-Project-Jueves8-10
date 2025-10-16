function Header(){
    const styleHeader = {
        border: '4px solid black', 
        borderRadius: '15px',
        padding: '10px',
        margin: '10px',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    } 

    return (
        <div style={styleHeader}>  
            <h1>Header del proyecto por componentes!</h1>
            <p>Este es el header del proyecto por componentes!</p>
        </div>
    )
}

export default Header