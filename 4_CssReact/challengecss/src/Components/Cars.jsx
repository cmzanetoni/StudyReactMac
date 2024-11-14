import styles from './Cars.module.css';

const Cars = ( {brand, model}) => {
    return (
        <div>
            <h1 className={styles.cars_h1}>Carro</h1>
            <h2 className={styles.cars_h2}>Marca</h2>
            <p className={styles.cars_p}>{brand}</p>
            <h2 className={styles.cars_h2}>Modelo</h2>
            <p className={styles.cars_p}>{model}</p>
        </div>
    )
}

export default Cars;