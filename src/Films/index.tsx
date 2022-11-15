import { useState } from "react";
import Film from "./Film";
import styles from "./Films.module.scss";
import Search from "./Search";

export default function Films() {
    const [titleFilm, setFilms] = useState('')
   
    return (
        <div className={styles.catalog_films}>
            <h1 className={styles.catalog_films__title}>
                Lista de Filmes
            </h1>
            <section className={styles.catalog_films__section}>
              <Search titleFilm = {titleFilm} setFilms={setFilms}/> 
              <Film titleFilm = {titleFilm} /> 
            </section>
        </div>
    )
}