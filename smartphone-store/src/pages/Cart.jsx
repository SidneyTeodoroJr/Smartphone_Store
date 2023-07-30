// Importando os módulos necessários do React e de outras dependências
import React, { useState, useEffect } from "react";
// Importando funções de serviço para manipular o armazenamento local
import { getItem, setItem } from '../services/LocalStorageFuncs';
// Importando ícones da biblioteca 'react-icons'
import { BsCartDashFill, BsFillCartDashFill } from 'react-icons/bs'
// Importando estilos CSS para a área de produtos
import { ProductsArea } from '../css/style';
// Importando o componente de cabeçalho
import { Header } from '../components/Header';
// Definindo o componente funcional 'Cart'
export const Cart = () => {
    // Estado para armazenar os dados do carrinho obtidos do armazenamento local
    const [data, setData] = useState(getItem('carrinhoStore') || []);

    // Função para remover um item do carrinho
    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id);
        setData(arrFilter);
    }

    // Efeito colateral que salva os dados do carrinho no armazenamento local sempre que o estado 'data' é atualizado
    useEffect(() => {
        const saveDataToLocalStorage = () => {
            setItem('carrinhoStore', data);
        };

        // Salvando os dados do carrinho no armazenamento local
        saveDataToLocalStorage();

        // Função de limpeza para garantir que os dados sejam salvos apenas se o componente estiver montado
        return () => {
            saveDataToLocalStorage();
        };
    }, [data]);

    // Cálculo do subtotal dos itens no carrinho
    const subTotal = data.reduce((acc, cur) => acc + cur.price, 0);

    // Renderização do componente 'Cart'
    return (
        <div>
            {/* Renderiza o componente de cabeçalho */}
            <Header />
            {/* Renderiza o total da compra com base no subtotal calculado */}
            <h4>{`Total da Compra: R$ ${subTotal}`}</h4>
            {/* Renderiza a área dos produtos */}
            <ProductsArea>
                {
                    // Mapeia os itens do carrinho para renderizar seus detalhes
                    data.map((e) => (
                        <div key={e.id}>
                            <h4>{e.title}</h4>
                            <img src={e.thumbnail} alt={e.title} />
                            <h4>{`R$ ${e.price}`}</h4> {/* Correção das chaves nesta linha */}
                            <button
                                onClick={() => removeItem(e)} // Remove o item ao clicar no botão
                            >
                                <BsFillCartDashFill /> {/* Correção do ícone importado */}
                            </button>
                        </div>
                    ))
                }
            </ProductsArea>
        </div>
    );
}