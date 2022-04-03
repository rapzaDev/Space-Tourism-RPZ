import { Query, Resolver } from "type-graphql";

import Destinations from "../model/destinations";
import { destinationsSamples } from '../samples/destinations';

@Resolver()
class DestinationsResolver {
    constructor(private destinations: Destinations[] = destinationsSamples()) {}

    @Query(() => [Destinations])
    getDestinations(): Destinations[] {
        return this.destinations;
    }
};

export default DestinationsResolver;