// Link API: https://sujeitoprogramador.com/rn-api/?api=posts

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function RequisicaoHTTPS(props) {
    const [ nutri, setNutri ] = useState([]);

    useEffect(() => {
        let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

        function loadAPI()  {
            fetch(url)
            .then((result) => result.json())
            .then((json) => {
                setNutri(json);       
            })
        }

        loadAPI();
    }, []);

    return (
        <Section className="https">
            <Header>
                <p>Dicas da Nutri</p>
            </Header>
            <Overlay></Overlay>

            {nutri.map((item) => {
                return(
                    <Article key={item.id}>
                        <ContainerImagem>
                            <img src={item.capa} alt={item.titulo} />
                        </ContainerImagem>
                        
                        <ContainerTextos>
                            <span>{item.titulo}</span>
                            
                            <p>{item.subtitulo}</p>
                        </ContainerTextos>

                       <Categoria>
                            <h1>Categoria: {item.categoria}</h1>
                       </Categoria>

                        <a href="https://www.sonutricao.com.br/dicas.php" target="_blank" rel="noreferrer">Acessar</a>
                    </Article>
                )
            })}
        </Section>
    );
}

const Section = styled.section`
    align-items: center;

    display: flex;

    flex-direction: column;

    justify-content: center;
`;

const Overlay = styled.div`
    background-color: #4C89E3;

    height: 60px;

    margin-bottom: 20px;
`;

const Header = styled.header`
    align-items: center;

    background-color: #4C89E3;

    color: #FFFFFF;

    display: flex;

    font-size: 30px;

    font-weight: bold;

    height: 60px;

    justify-content: center;

    position: fixed;

    top: 0;

    width: 100%;
`;

const Article = styled.article`
    align-items: center;

    display: flex;

    flex-direction: column;

    justify-content: center;

    margin-bottom: 50px;

    max-width: 100%;

    width: 500px;

    a {
        background-color: #FFFFFF;

        border: 2px solid #4C89E3;

        border-radius: 5px;

        color: #4C89E3;

        cursor: pointer;

        font-size: 16px;

        margin-top: 15px;

        max-width: 90%;

        padding: 8px;

        text-align: center;

        text-decoration: none;

        transition: all 0.5s;

        width: 500px;
    }

    a:hover {
        background-color: #4C89E3;

        color: #FFFFFF;
    }
`;

const ContainerImagem = styled.div`
    margin-bottom: 10px;

    img {
        border-radius: 5px;

        height: 150px;

        width: 250px;
    }
`;

const ContainerTextos = styled.div`
    align-items: center;
      
    display: flex;

    flex-direction: column;

    justify-content: center;

    max-width: 90%;

    width: 500px;

    span  {
      font-size: 16px;

      font-weight: bold;

      padding-bottom: 10px;

      text-align: center;
    }

    p {
      font-size: 14px;

      text-align: justify;
    }
`;

const Categoria = styled.div`
    display: flex;

    justify-content: flex-start;

    max-width: 90%;
    
    width: 500px;

    h1  {
        background-color: #2B4482;

        border-radius: 5px;

        color: #FFFFFF;

        font-weight: bold;

        margin-top: 10px;

        padding: 10px;
    }
`;