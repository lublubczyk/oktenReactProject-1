import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { IGenre } from "../../../interfaces";
import { Context } from "../../../hok";
import style from './GenreBadge.module.css'

interface IProps { genre: IGenre };

const GenreBadge: FC<IProps> = ({ genre }) => {
    
    const naigate = useNavigate();
    const [, , [, setGenreId]] = useContext(Context);

    const click = async () => {
        naigate('movies?page=1');
        setGenreId(genre.id);
    };
   
    return (
        <div onClick={click} className={style.GenreBadge} >
            <h2>{genre.name}</h2>
        </div>
    )
};

export { GenreBadge };