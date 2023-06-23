function Relogio() {
    const time = new Date().toLocaleTimeString()

    return (
        <h2>{time}</h2>
    )
}

export default Relogio