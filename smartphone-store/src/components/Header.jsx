// Importando as dependências necessárias do React.
import React from "react";
// Importando o componente 'Link' do 'react-router-dom', que será usado para a navegação entre as páginas.
import { Link } from "react-router-dom";
// Importando a dependência 'styled-components' para criar estilos de forma mais legível e organizada.
import styled from 'styled-components'

// Criando um componente estilizado de cabeçalho (header) usando a sintaxe do 'styled-components'.
const HeaderArea = styled.header`
// Definindo o estilo do container do cabeçalho como uma flexbox, 
//alinhado ao centro, com espaçamento entre os elementos e cor de fundo.
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    background-color: #0c0f0c;
    padding: 1em;

    // Definindo o estilo dos links no cabeçalho.
    a {
        text-decoration: none;
        color: #fff;

        &:hover {
            color: #058214; 
            letter-spacing: 5px;
            background-color: #ffffff;
        }
    }
`;

// Definindo o componente 'Header', que será exportado para uso em outros lugares da aplicação.
export const Header = () => {
    // O componente renderiza o 'HeaderArea' que contém dois links, um para a página inicial ("/") e outro para a página do carrinho ("/cart").
    return (
        <HeaderArea>
            <Link to="/">Store</Link>
            <Link to="/cart">Cart</Link>
        </HeaderArea>
    )
}