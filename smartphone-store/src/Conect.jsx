// Importando os módulos necessários do React e do React Router DOM.
import React from "react";
import { Switch, Route } from "react-router-dom";
// Importando os componentes de páginas Store e Cart.
import { Store } from "./pages/Store";
import { Cart } from "./pages/Cart";
// Componente funcional Content que renderiza o conteúdo com base nas rotas.
export const Content = () => {
    return (
        // Switch garante que apenas uma rota seja renderizada por vez.
        <Switch>
            {/* Rota para a página do carrinho de compras, exibida quando o caminho é "/cart". */}
            <Route exact path="/cart" component={Cart} />

            {/* Rota para a página da loja, exibida quando o caminho é "/" (página inicial). */}
            <Route exact path="/" component={Store} />
        </Switch>
    )
}