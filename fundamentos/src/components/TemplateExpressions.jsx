const TemplateExpressions = () => {

    const name = "Caio";
    const data = {
        age: 31,
        job: "Programer"
    };

    return (
        <div>
            <h2>Olá {name}, tudo bem?</h2>
            <p>Você atua como: {data.job}</p>
            <p>Soma de 4 + 4 = {4+4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )
}

export default TemplateExpressions;