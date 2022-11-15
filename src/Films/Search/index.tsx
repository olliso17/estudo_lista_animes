import { MdOutlineSearch } from 'react-icons/md';
import styles from './Search.module.scss';

interface Props{
    titleFilm: string
    setFilms: React.Dispatch<React.SetStateAction<string>>
}

export default function Search({titleFilm, setFilms}:Props) {

    return (
        <div className={styles.search}>
            <input type="text" onChange={event=>setFilms(event.target.value)}/>
            <span>
                <MdOutlineSearch />
            </span>
        </div>
    )
}