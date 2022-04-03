import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import DestinationsResolver from './data/resolvers/destinations';
import TechnologiesResolver from './data/resolvers/technologies';
import CrewResolver from './data/resolvers/crew';

export async function bootstrap() {
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [DestinationsResolver, TechnologiesResolver, CrewResolver]
        })
    });

    server.listen({port: 4100}, console.log('Server is running.'));
};

bootstrap();