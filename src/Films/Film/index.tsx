import { useEffect, useState } from "react";
import api from "../../services/api";
import styles from "./Film.module.scss";

export default function Film() {
    
    const [films, setFilms] = useState<any|[]>([]);
    const getApi = async () => {
        await api.get("/films")
            .then((response) => setFilms(response.data))
            .catch((err) => {
                console.error("Ops! Ocorreu um erro" + err);
            })
    }
    useEffect(() => {
        getApi();
    }, []);

    return (
        <section className={styles.films}>
            {films.map((film) => (
                <div key={film.id}>
                    <h3 className={styles.films__title}>{film.title}</h3>
                    <img className={styles.films__img} src={film.image} alt={film.title} />
                </div>
            ))}
        </section>
    )
}