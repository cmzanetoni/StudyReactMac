const UserDetails = ({id, name, age, profession}) => {
    return (
        <>
            <p>Nome: {name}, Idade: {age}, Profissão: {profession}, Pode tirar habilitação: {age >= 18 ? "Sim" : "Não"}
            </p>
        </>
    )
}

export default UserDetails;