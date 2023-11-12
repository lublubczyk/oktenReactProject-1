import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { Context } from '../../hok';
import { IQuery } from '../../interfaces';

const Search = () => {
    
    const [[, setOuery]] = useContext(Context);
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    
    const search = async ({ query }: IQuery) => {
        navigate('movies?page=1');
        setOuery(query);
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(search)} >
                <input type="text" placeholder='enter word' {...register('query')} />
                <button>Search</button>
            </form>
        </div>
    )
};

export { Search };