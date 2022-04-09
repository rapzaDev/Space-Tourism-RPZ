import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import GlobalStyle from '../styles/global';

import Home from '../pages/Home';

function Router() {
    return(
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route  index element={ <Home /> }/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;

