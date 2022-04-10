import { useEffect, useState } from "react";

import { getPlanetsData } from '../services/graphql/queries/planets';
import { Destination } from "../services/graphql/types";

export function useDestination() {
    const [planets, setPlanets] = useState<Destination[]>([]);

    const setDestinationData = async() => {
        function timeout(ms: number) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

        await timeout(1200);
        
        const planetsData = await getPlanetsData();
        setPlanets(planetsData);

        return;
    };

    useEffect(() => {
        setDestinationData();
    },[]);

    if (planets?.length) return planets;
};
