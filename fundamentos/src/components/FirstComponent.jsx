// Exemplo de comentário

import MyComponent from "./MyComponent.jsx";

const FirstComponent = () => {
    // essa função faz isso

    /*
    comentário de
    múltiplas linhas
     */

    return (
        <div>
            {/* comentário em interpolação */}
            <h1>Meu Primeiro Componente</h1>
            <p className="teste"></p>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;