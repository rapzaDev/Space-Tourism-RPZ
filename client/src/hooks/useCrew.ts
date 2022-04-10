import { useEffect, useState } from "react";

import { getCrewData } from '../services/graphql/queries/crew';
import { Crew } from "../services/graphql/types";

export function useCrew() {
    const [crew, setCrew] = useState<Crew[]>([]);

    const setCrewData = async() => {
        function timeout(ms: number) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

        await timeout(1200);
        
        const crewData = await getCrewData();
        setCrew(crewData);

        return;
    };

    useEffect(() => {
        setCrewData();
    },[]);

    if (crew?.length) return crew;
};
