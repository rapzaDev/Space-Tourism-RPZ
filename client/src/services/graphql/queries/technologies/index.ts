import { gql } from '@apollo/client';

import { client } from '../../../apollo/client';

import { Technology } from '../../types';

async function getTechnologiesData() {
    const GET_TECHNOLOGIES_DATA = await client.query({
        query: gql`
            query {
                Technologies {
                    id
                    name
                    description
                    images {
                      portrait
                      landscape
                    }
                }
            }
        `
    });

    const { data } = GET_TECHNOLOGIES_DATA;
    const { Technologies } = data;

    const techData: Technology[] = Technologies;

    const technologies = techData.map<Technology>( tech => ({
        id: tech.id,
        name: tech.name,
        description: tech.description,
        images: {
            portrait: tech.images.portrait,
            landscape: tech.images.landscape,
        }
    })); 

    return technologies;
};

export {getTechnologiesData};