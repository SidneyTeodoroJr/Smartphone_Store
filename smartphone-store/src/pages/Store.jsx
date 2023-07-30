// Importações das bibliotecas e componentes necessários
import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill } from 'react-icons/bs';
import { getItem, setItem } from '../services/LocalStorageFuncs';
import { Link } from "react-router-dom";
import { ProductsArea } from '../css/style';
import { Header } from '../components/Header';

// Componente funcional "Store"
export const Store = () => {
    // Estado para armazenar os dados da API
    const [data, setData] = useState([]);

    // Estado para armazenar os itens do carrinho
    const [cart, setCart] = useState(getItem('carrinhoStore') || []);

    // Utiliza o hook useEffect para buscar dados da API quando o componente é montado
    useEffect(() => {
        const fetchApi = async () => {
            const url = 'https://api.mercadolibre.com/sites/MLB/search?q=celular'
            const response = await fetch(url);
            const objJson = await response.json()
            setData(objJson.results)
        }
        fetchApi();
    }, [])

    // Função para adicionar ou remover itens do carrinho
    const handleClick = (obj) => {
        const element = cart.find((e) => e.id === obj.id)
        if (element) {
            const arrFilter = cart.filter((e) => e.id !== obj.id);
            setCart(arrFilter)
            setItem('carrinhoStore', arrFilter)
        } else {
            setCart([...cart, obj])
            setItem('carrinhoStore', [...cart, obj])
        }
    }

    return (
        <div>
            {/* Renderiza o componente "Header" */}
            <Header />

            {/* Área de exibição dos produtos */}
            <ProductsArea>
                {
                    // Mapeia os dados da API e renderiza um bloco para cada produto
                    data.map((e) => (
                        <div key={e.id}>
                            {/* Exibe o título do produto */}
                            <h4>{e.title}</h4>
                            {/* Exibe a imagem do produto */}
                            <img src={e.thumbnail} alt="Smartphone" />
                            {/* Exibe o preço do produto */}
                            <h4>{`R$ ${e.price}`}</h4>
                            {/* Botão para adicionar ou remover o produto do carrinho */}
                            <button
                                onClick={() => handleClick(e)}
                            >
                                {
                                    // Verifica se o produto já está no carrinho e renderiza o ícone apropriado
                                    cart.some((itemCart) => itemCart.id === e.id) ? (
                                        <BsFillCartCheckFill /> // Ícone de carrinho com check
                                    ) : (
                                        <BsFillCartPlusFill /> // Ícone de carrinho com sinal de adição
                                    )
                                }
                            </button>
                        </div>
                    ))
                }
            </ProductsArea>
        </div>
    )
}