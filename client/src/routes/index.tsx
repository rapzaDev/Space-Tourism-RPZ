import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Home from '../pages/Home';
import Destination from '../pages/Destination';


function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route  index element={ <Home /> }/>
                <Route  path="/destination" element={ <Destination /> }/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

