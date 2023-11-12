import { Button } from "@mui/material";
import { useState } from "react";

import style from './ChangeTheme.module.css';

const ChangeTheme = () => {
   
    const [flag, setFlag] = useState<boolean>(true);
    const body = document.getElementsByTagName('body')[0];
    const elements = Array.from(document.getElementsByClassName('MoviesListCards_MoviesListCards__J3R5N'));
    const cards = elements.filter(element => element instanceof HTMLElement) as HTMLElement[];

    const change = () => {
        if (flag) {
            body.style.backgroundColor = 'black';
            cards.forEach((element: HTMLElement) => element.style.backgroundColor = 'gray');
        } else {
            body.style.backgroundColor = '';
            cards.forEach((element: HTMLElement) => element.style.backgroundColor = '')
        }
        setFlag(!flag);
    };

    return (
        <div>
            <Button variant="contained" className={style.Button} onClick={change} >Change Theme</Button>
        </div>
    )
};

export { ChangeTheme };