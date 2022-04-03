import { Field, ObjectType } from "type-graphql";

@ObjectType()
class Image {
    @Field()
    png: string;
    
    @Field()
    webp: string;
};

export default Image;