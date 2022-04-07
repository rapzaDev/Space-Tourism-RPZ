import { useEffect, useState } from "react";

import { getHomeData } from '../services/graphql/queries/home';
import { Home as HomeType } from '../services/graphql/types';

import { getDestinationData } from '../services/graphql/queries/destination';
import { Destination as DestinationType } from '../services/graphql/types';

export function usePageData (location: string, planetID?: number) {
    //HOME PAGE STATE:
    const [home, setHome] = useState<HomeType>({} as HomeType);

    //DESTINATION PAGE STATE:
    const [destination, setDestination] = useState<DestinationType>({} as DestinationType);
    const [image, setImage] = useState("");

    function timeout(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const setData = async (pathname: string) => {

        await timeout(1200);

        if (pathname === '/') {
            const data = await getHomeData();    
            setHome(data);

            return;
        }

        if (pathname === '/destination') {
            const planet = planetID ? planetID : 1;

            const data = await getDestinationData(planet);
            setDestination(data);

            if (data.images){
                const url = `${process.env.REACT_APP_DESTINATION_IMAGES_URL}/${data.images.png}`;
                fetch(url).then(response => response.json()).then(data => {
                    setImage(data.download_url);
                })
            }

            return;
        }
    };

    useEffect(() => {
        if (location === '/') setData('/');

        if (location === '/destination') setData('/destination');
    },[]);

    const page = {
        home: (home) ? true : false,
        destination: (destination) ? true : false,
    }

    // HOME PAGE
    if (( page.home && (location === '/') )) {
        return {
            home,
        };
    }

    // DESTINATION PAGE
    if (( page.destination && (location === '/destination') )) {
        return {
            destination,
            image
        };
    }
};
