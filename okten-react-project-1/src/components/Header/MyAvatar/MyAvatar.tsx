import { Avatar } from "@mui/material";

import style from './MyAvatar.module.css';
import { urls } from "../../../constants";

const MyAvatar = () => {
    
    const src = urls.baceURL.bacePoster + "8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg";
    const alt = 'login'
    const sx = { width:70, height:60};

    return (
        <div className={style.MyAvatar}>
            Hello
            <Avatar src={src} alt={alt} sx={sx}/>
            Mentor
        </div>
    )
};

export { MyAvatar };