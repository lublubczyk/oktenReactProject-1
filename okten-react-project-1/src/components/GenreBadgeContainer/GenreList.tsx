import { FC } from "react";

import { IGenre } from "../../interfaces";
import { GenreBadge } from "./GenreBadge";
import style from './GenreList.module.css';

interface IProps { genres: IGenre[] };

const GenreList: FC<IProps> = ({ genres }) => {
    return (
        <div className={style.GenreList} >
            {genres.map(genre => <GenreBadge key={genre.id} genre={genre} />)}
        </div>
    )
};

export { GenreList };