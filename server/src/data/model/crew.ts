import { Field, ObjectType } from "type-graphql";

import { Image as ImageType } from '../types'
import Image from "./image";

@ObjectType()
class Crew {
    @Field()
    name: string;
    
    @Field(() => Image)
    images: ImageType;
    
    @Field()
    role: string;
    
    @Field()
    bio: string;
};

export default Crew;
