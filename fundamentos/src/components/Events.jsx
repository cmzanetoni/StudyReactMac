const Events = () => {
    const handleMyEvent = () => {
      console.log("Ativou o evento!");
    };

    //Exibindo os eventos
    const handleMyEventE = (e) => {
        console.log(e);
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={handleMyEventE}>Eventos aqui!</button>
            </div>
        </div>
    )
}

export default Events;