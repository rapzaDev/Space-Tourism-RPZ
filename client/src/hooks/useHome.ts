import { useEffect, useState } from "react";

import { getHomeData } from '../services/graphql/queries/home';
import { Home as HomeType } from '../services/graphql/types';

export function useHome () {
    //HOME PAGE STATE:
    const [home, setHome] = useState<HomeType>({} as HomeType);

    const setHomeData = async () => {
        function timeout(ms: number) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

        await timeout(1200);

        const data = await getHomeData();    
        setHome(data);

        return;
    };

    useEffect(() => {
        setHomeData();
    },[]);


    if ( home ) return home;
};
