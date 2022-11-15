import Film from "./Film";
import styles from "./Films.module.scss";

export default function Films() {
    return (

        <div className={styles.catalog_films}>
            <h1 className={styles.catalog_films__title}>
                Lista de Filmes
            </h1>
            
            <Film />
         
        </div>
    )
}