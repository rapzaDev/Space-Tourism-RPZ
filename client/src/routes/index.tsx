import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Home from '../pages/Home';

import { NavButtonsContextProvider } from '../contexts/navButtons';


function Router() {
    return(
        <NavButtonsContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route  index element={ <Home /> }/>
                </Routes>
            </BrowserRouter>
        </NavButtonsContextProvider>
    );
};

export default Router;

