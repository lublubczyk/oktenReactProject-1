import { Pagination } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import style from './Footer.module.css';

const Footer = () => {
    
    const { pathname, search } = useLocation();
    const navigate = useNavigate();
    const page = +search.split('=').reverse()[0];
    
    const change = (_: any, num: number) => {
        navigate(`${pathname}?page=${num}`);
    }

    return (
        <div className={style.Footer}>
            {pathname.endsWith('movies') ?
                <Pagination
                    count={500}
                    page={page}
                    onChange={change} />
                : <h1>{pathname}</h1>}
        </div>
    )
};

export { Footer };