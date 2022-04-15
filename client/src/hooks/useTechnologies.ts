import { useEffect, useState } from "react";

import { getTechnologiesData } from '../services/graphql/queries/technologies';
import { Technology } from "../services/graphql/types";

export function useTechnologies() {
    const [techs, setTechs] = useState<Technology[]>([]);

    const setTechsData = async() => {
        function timeout(ms: number) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

        await timeout(1200);
        
        const techData = await getTechnologiesData();
        setTechs(techData);

        return;
    };

    useEffect(() => {
        setTechsData();
    },[]);

    if (techs?.length) return techs;
};
