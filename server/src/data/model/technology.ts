import { Field, ObjectType } from "type-graphql";

import { TechnologyImages } from '../types'
import TechnologyImage from "./technologyImage";


@ObjectType()
class Technology {
    @Field()
    id: number;

    @Field()
    name: string;
    
    @Field(() => TechnologyImage)
    images: TechnologyImages;
    
    @Field()
    description: string;
};

export default Technology;