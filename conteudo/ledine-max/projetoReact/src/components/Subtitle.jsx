function Subtitle(props) {
    return (
        <h3>{props.children.toLowerCase()}</h3>
    )
}

export default Subtitle; // importar esse componente em outros lugares do projeto
