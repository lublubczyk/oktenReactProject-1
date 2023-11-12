import { FC, PropsWithChildren, createContext, useState } from "react";

import { IMovies } from "../interfaces";

const Context = createContext(null);

interface IProps extends PropsWithChildren { };

const ContextProvider: FC<IProps> = ({ children }) => {
    
    const defaultValue: IMovies = { page: 0, results: [], total_pages: 0, total_results: 0 };
    
    const movies = useState<IMovies>(defaultValue);
    const query = useState<string>('');
    const genreId = useState<number>(18);

    return (
        <Context.Provider value={[query, movies, genreId]}>
            {children}
        </Context.Provider>
    )
};

export { ContextProvider, Context };