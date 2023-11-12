import { Button } from "@mui/material";
import { useState } from "react";

import style from './ChangeTheme.module.css';

const ChangeTheme = () => {
   
    const [flag, setFlag] = useState<boolean>(true);
    const body = document.getElementsByTagName('body')[0];
    
    const change = () => {
        if (flag) {
            body.style.backgroundColor = 'black';
            body.style.color = 'white';
        } else {
            body.style.backgroundColor = '';
            body.style.color = '';
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