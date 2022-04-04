import { Arg, Query, Resolver } from "type-graphql";

import Destination from "../model/destination";
import { destinationsSamples } from '../samples/destinations';

@Resolver()
class DestinationsResolver {
    constructor(private destinations: Destination[] = destinationsSamples()) {}

    @Query(() => [Destination])
    Destinations(): Destination[] {
        return this.destinations;
    }

    @Query(() => Destination)
    Destination(@Arg("id") id: number): Destination {
        let destination = {} as Destination;
        const data = this.destinations.find( target => target.id === id )

        if (data) destination = data;

        return destination;
    }
};

export default DestinationsResolver;