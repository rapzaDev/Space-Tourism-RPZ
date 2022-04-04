import { Field, ObjectType } from "type-graphql";

@ObjectType()
class Categories {
    @Field()
    home: string;
    
    @Field()
    destination: string;
    
    @Field()
    crew: string;
    
    @Field()
    technology: string;
};

export default Categories;