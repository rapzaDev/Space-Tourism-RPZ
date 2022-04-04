import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import DestinationsResolver from './data/resolvers/destinations';
import CrewResolver from './data/resolvers/crew';
import TechnologiesResolver from './data/resolvers/technologies';
import CategoriesResolver from './data/resolvers/categories';
import HomeResolver from './data/resolvers/home';

export async function bootstrap() {
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                DestinationsResolver, 
                TechnologiesResolver, 
                CrewResolver,
                CategoriesResolver,
                HomeResolver
            ]
        })
    });

    server.listen({port: 4100}, console.log('Server is running.'));
};

bootstrap();