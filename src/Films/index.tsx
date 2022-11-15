import { useState } from "react";
import Film from "./Film";
import styles from "./Films.module.scss";
import Filter from "./Filter";
import Search from "./Search";
import Sort from "./Sort";

export default function Films() {
    const [titleFilm, setFilms] = useState('')

    return (
        <div className={styles.catalog_films}>
            <section >
                <h1 className={styles.catalog_films__title}>
                    Lista de Animes
                </h1>
                <div className={styles.catalog_films__menu}>
                    <Search titleFilm={titleFilm} setFilms={setFilms} />
                    <Filter />
                    <Sort />
                </div>

                <Film titleFilm={titleFilm} />
            </section>
        </div>
    )
}