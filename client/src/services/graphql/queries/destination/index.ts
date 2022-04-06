import { gql } from '@apollo/client';

import {client} from '../../../apollo/client';

import { Destination } from '../../types';

async function getDestinationData(ID: number) {
    const GET_DESTINATION_DATA = await client.query({
        query: gql`
            query {
                Destination(id:${ID}) {
                    id
                    name
                    images {
                        png
                        webp
                    }
                    description
                    distance
                    travel
                }
            }
        `
    });

    const { data } = GET_DESTINATION_DATA;
    const { Destination } = data;

    let destinationData = {} as Destination;
    Object.assign<Destination, Destination>(destinationData, {
        id: Destination.id,
        name: Destination.name,
        images: {
            png: Destination.images.png,
            webp: Destination.images.webp,
        },
        description: Destination.description,
        distance: Destination.distance,
        travel: Destination.travel,
    });

    return destinationData;
};

export {getDestinationData};