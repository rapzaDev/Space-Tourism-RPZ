import { Field, ObjectType } from "type-graphql";

import { Image as ImageType } from '../types'
import Image from "./image";

@ObjectType()
class Destinations {
    @Field()
    name: string;
    
    @Field(() => Image)
    images: ImageType;
    
    @Field()
    description: string;
    
    @Field()
    distance: string;

    @Field()
    travel: string;
};

export default Destinations;
