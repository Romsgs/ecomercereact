function Card(props){
    return (
    <div id='card'>
        <div id='imgcont'>
       <img src={props.image} alt='imagem'/>
       </div>
    
       

        <div id='descricao'>
            <p>{props.title}</p>
            <p>Categoria: {props.category}</p>
            <div id='preco'>
                <strong>Preço: R$ {props.price}</strong>
            </div>
        </div>
        <button id='comprar'> Comprar </button>
    </div>
    )
}

export default Card