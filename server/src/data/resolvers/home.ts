import { Query, Resolver } from "type-graphql";

import Home from "../model/home";
import { homeSamples } from '../samples/home';

@Resolver()
class HomeResolver {
    constructor(private home: Home = homeSamples()) {}

    @Query(() => Home)
    Home(): Home {
        return this.home;
    }
};

export default HomeResolver;