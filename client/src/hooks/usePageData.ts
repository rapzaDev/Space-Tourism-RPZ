import { useEffect, useState } from "react";

import { getHomeData } from '../services/graphql/queries/home';
import { Home as HomeType } from '../services/graphql/types';

import { getDestinationData } from '../services/graphql/queries/destination';
import { Destination as DestinationType } from '../services/graphql/types';

export function usePageData (category: string, planetID?: number) {
    //HOME PAGE STATE:
    const [home, setHome] = useState<HomeType>({} as HomeType);

    //DESTINATION PAGE STATE:
    const [destination, setDestination] = useState<DestinationType>({} as DestinationType);
    const [image, setImage] = useState("");

    function timeout(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const setData = async (categoryName: string) => {

        await timeout(1200);

        if (categoryName === 'home') {
            const data = await getHomeData();    
            setHome(data);

            return;
        }

        if (categoryName === 'destination') {
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
        if (category === 'home') setData(category);

        if (category === 'destination') setData(category);
    },[category]);

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
            image
        };
    }
};
