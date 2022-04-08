import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Home from '../pages/Home';
import Destination from '../pages/Destination';

import { CategoriesContextProvider } from '../contexts/categories';


function Router() {
    return(
        <CategoriesContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route  index element={ <Home /> }/>
                    <Route  path="/destination" element={ <Destination /> }/>
                </Routes>
            </BrowserRouter>
        </CategoriesContextProvider>
    );
};

export default Router;

