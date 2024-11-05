const Events = () => {
    const handleMyEvent = () => {
      console.log("Ativou o evento!");
    };

    //Exibindo os eventos
    const handleMyEventE = (e) => {
        console.log(e);
    }

    const renderSomthing = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        }
        else {
            return <h1>Também posso renderizar isso!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={handleMyEventE}>Eventos aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também</button>
            </div>
            <div>
                <button onClick={() => {
                    if (true) {
                        console.log("Isso não deveria existir!");
                    }
                }}>Clique aqui por favor!</button>
            </div>
            {renderSomthing(true)}
            {renderSomthing(false)}
        </div>
    )
}

export default Events;