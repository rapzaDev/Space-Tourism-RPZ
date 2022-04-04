import { Field, ObjectType } from "type-graphql";

@ObjectType()
class Home {
    @Field()
    h5: string;
    
    @Field()
    h1: string;
    
    @Field()
    description: string;
};

export default Home;