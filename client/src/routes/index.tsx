import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Home from '../pages/Home';

import { CategoriesContextProvider } from '../contexts/categories';


function Router() {
    return(
        <CategoriesContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route  index element={ <Home /> }/>
                </Routes>
            </BrowserRouter>
        </CategoriesContextProvider>
    );
};

export default Router;

