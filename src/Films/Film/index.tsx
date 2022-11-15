import { useEffect, useState } from "react";
import api from "../../services/api";
import IFilm from "../interfaces/IFilm";
import styles from "./Film.module.scss";

interface Props{
    titleFilm: string,
}

export default function Film({titleFilm}:Props) {
    
    const [list, setList] = useState<IFilm|any>([]);

    const getApi = async () => {
        await api.get("/films")
            .then((response) => setList(response.data))
            .catch((err) => {
                console.error("Ops! Ocorreu um erro" + err);
            })
    }

    function testFilms(title: string) {
        const regex = new RegExp(titleFilm, 'i');
        return regex.test(title);
    }
    const newList = list.filter(film => testFilms(film.title));
   
    useEffect(() => {
        getApi(); 
        setList(newList);
    }, [titleFilm]);

    return (
        <section className={styles.films}>
            {list.map(film => (
                <div key={film.id}>
                    <h3 className={styles.films__title}>{film.title}</h3>
                    <img className={styles.films__img} src={film.image} alt={film.title} />
                </div>
            ))}
        </section>
    )
}