import { Query, Resolver } from "type-graphql";

import Technology from "../model/technology";
import { technologySamples } from '../samples/technology';

@Resolver()
class TechnologiesResolver {
    constructor(private technologies: Technology[] = technologySamples()) {}

    @Query(() => [Technology])
    getTechnologies(): Technology[] {
        return this.technologies;
    }
};

export default TechnologiesResolver;