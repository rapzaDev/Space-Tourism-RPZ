import { Arg, Query, Resolver } from "type-graphql";

import Technology from "../model/technology";
import { technologySamples } from '../samples/technology';

@Resolver()
class TechnologiesResolver {
    constructor(private technologies: Technology[] = technologySamples()) {}

    @Query(() => [Technology])
    Technologies(): Technology[] {
        return this.technologies;
    }

    @Query(() => Technology)
    Technology(@Arg("id") id: number): Technology {
        let technology = {} as Technology;
        const data = this.technologies.find( target => target.id === id )

        if (data) technology = data;

        return technology;
    }
};

export default TechnologiesResolver;