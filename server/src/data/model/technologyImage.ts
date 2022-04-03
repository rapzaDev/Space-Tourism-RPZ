import { Field, ObjectType } from "type-graphql";

@ObjectType()
class TechnologyImage {
    @Field()
    portrait: string; 
    
    @Field()
    landscape: string;
};

export default TechnologyImage;