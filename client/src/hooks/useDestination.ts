import { useEffect, useState } from "react";
import { PlanetType } from "../contexts/navButtons";

import { getPlanetsData } from '../services/graphql/queries/planets';
import { Destination } from "../services/graphql/types";

export function useDestination () {
    const [planets, setPlanets] = useState<Destination[]>([]);
    const [navPlanets, setNavPlanets] = useState<PlanetType[]>([]);

    const setDestinationData = async() => {
        function timeout(ms: number) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

        await timeout(1200);
        
        const planetsData = await getPlanetsData();
        setPlanets(planetsData);

        const navPlanetsData: PlanetType[] = planetsData.map<PlanetType>( planet => ({
            id: planet.id,
            title: planet.name
        }));
        setNavPlanets(navPlanetsData);

        return;
    };

    useEffect(() => {
        setDestinationData();
    },[]);

    if (planets?.length) return {planets, navPlanets};
};
