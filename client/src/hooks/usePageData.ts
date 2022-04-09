import { useEffect, useState } from "react";

import { getHomeData } from '../services/graphql/queries/home';
import { Home as HomeType } from '../services/graphql/types';

import { getDestinationData } from '../services/graphql/queries/destination';
import { Destination as DestinationType } from '../services/graphql/types';
import { PlanetType } from "../contexts/navButtons";

export function usePageData (category: string, planetData: PlanetType) {
    //HOME PAGE STATE:
    const [home, setHome] = useState<HomeType>({} as HomeType);

    //DESTINATION PAGE STATE:
    const [destination, setDestination] = useState<DestinationType>({} as DestinationType);
    // const [image, setImage] = useState("");
    const [planet, setPlanet] = useState<PlanetType>({id: 1,title: 'Moon'});

    function timeout(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const setHomeData = async () => {
        await timeout(1200);

        const data = await getHomeData();    
        setHome(data);

        return;
    };

    const setDestinationData = async() => {
        await timeout(1200);

        const currentPlanet = planetData.id ? planetData.id : 1;

        const data = await getDestinationData(currentPlanet);
        setDestination(data);
        
        return;
    }

    useEffect(() => {
        if (category === 'home') setHomeData();

        if (category === 'destination') {
            if (planetData.id !== planet.id) setPlanet(planetData)    
            setDestinationData();
        }
    },[category, planetData]);

    const page = {
        home: (home) ? true : false,
        destination: (destination) ? true : false,
    }

    // HOME PAGE RETURN
    if (( page.home && (category === 'home') )) {
        return {
            home,
        };
    }

    // DESTINATION PAGE RETURN  
    if (( page.destination && (category === 'destination') )) {
        return {
            destination,
            // image
        };
    }
};
