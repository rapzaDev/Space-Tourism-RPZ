import { Query, Resolver } from "type-graphql";

import Categories from "../model/categories";
import { categoriesSamples } from '../samples/categories';

@Resolver()
class CategoriesResolver {
    constructor(private categories: Categories = categoriesSamples()) {}

    @Query(() => Categories)
    Categories(): Categories {
        return this.categories;
    }
};

export default CategoriesResolver;