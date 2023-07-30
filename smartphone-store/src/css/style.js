// Importa o módulo "styled" da biblioteca "styled-components"
import styled from "styled-components";


/* 
O código cria um componente estilizado chamado ProductsArea usando
styled-components para aplicar estilos a um elemento div, tornando-o
exportável para uso em outras partes do código.
*/
export const ProductsArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    flex-wrap: wrap;
    margin-top: 3.5em;
    margin-bottom: 5em;

    div {
        height: 100%;
        width: 10.5em;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, 
        rgba(0, 0, 0, 0.3) 0px 2px 4px -1px;
        color: #323332;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding: 0.8em;

        button {
            font-size: 1.3em;
            background: transparent;
            border: none;
            color: #0c6905;
        }
    }
`;