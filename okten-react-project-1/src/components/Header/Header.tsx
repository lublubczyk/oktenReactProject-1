import { ChangeTheme } from './ChangeTheme';
import { Title } from './Title';
import { HeaderLinks } from "./HeaderLinks";
import { MyAvatar } from "./MyAvatar";
import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.Header}>
            <Title />
            <HeaderLinks />
            <div className={style.AvatarButton}>
                <ChangeTheme />
                <MyAvatar />
            </div>
        </div>
    )
};

export { Header };