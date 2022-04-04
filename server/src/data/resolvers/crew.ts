import { Arg, Query, Resolver } from "type-graphql";

import Crew from "../model/crew";
import { crewSamples } from '../samples/crew';

@Resolver()
class CrewResolver {
    constructor(private crew: Crew[] = crewSamples()) {}

    @Query(() => [Crew])
    Crew(): Crew[] {
        return this.crew;
    }

    @Query(() => Crew)
    CrewMember(@Arg("id") id: number): Crew {
        let crewMember = {} as Crew;
        const data = this.crew.find( target => target.id === id )

        if (data) crewMember = data;

        return crewMember;
    }
};

export default CrewResolver;