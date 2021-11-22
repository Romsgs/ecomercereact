import React, { useState, useEffect } from 'react';
import api from '../services/api'
import Card from '../components/cards';
//const lista1 = [{title: 'cenoura crua'},{title: 'cenoura picada'},{title: 'cenoura congelada'},{title: 'cenoura cozida'},{title: 'cenoura orgânica'}]

function Main(){
    const [produtos, setprodutos] = useState([]);
    
    async function carregaProdutos(a){
            if(a === undefined){
            console.log('primeiro a' + a)
            const dados = await api.get(``)
            
            console.log(dados.data)
            
            setprodutos(dados.data)
        }else{ 
            console.log('dentro do else a' + a)
            const dados = await api.get(``)
            
            
            console.log(dados.data)
            
            setprodutos(dados.data)
        }
        }
    

    useEffect(()=>{
        carregaProdutos()
    }, [])

    return(
        <main>
            {/* <div id='searchbar'>
                <input id='busca' type='text' onChange={(event)=> carregaProdutos(event.target.value)}/>
            </div> */}

            {produtos.map((t,i)=>{ return <Card title={t.title} key={i} price={t.price} category={t.category }image={t.image}></Card>})}
        

        
    </main>)
}

export default Main;