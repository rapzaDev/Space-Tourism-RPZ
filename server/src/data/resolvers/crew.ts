import { Query, Resolver } from "type-graphql";

import Crew from "../model/crew";
import { crewSamples } from '../samples/crew';

@Resolver()
class CrewResolver {
    constructor(private crew: Crew[] = crewSamples()) {}

    @Query(() => [Crew])
    getCrew(): Crew[] {
        return this.crew;
    }
};

export default CrewResolver;