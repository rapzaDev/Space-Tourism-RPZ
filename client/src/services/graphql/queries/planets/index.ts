import { gql } from '@apollo/client';

import {client} from '../../../apollo/client';

import { Destination } from '../../types';

async function getPlanetsData() {
    const GET_PLANETS_DATA = await client.query({
        query: gql`
            query {
                Destinations {
                    id
                    name
                    description
                    distance
                    travel
                    images {
                        png
                        webp
                    }
                }
            }
        `
    });

    const { data } = GET_PLANETS_DATA;
    const { Destinations } = data;

    const destinationsData: Destination[] = Destinations;

    const planets = destinationsData.map<Destination>( planet => ({
        id: planet.id,
        name: planet.name,
        description: planet.description,
        distance: planet.distance,
        travel: planet.travel,
        images: {
            png: planet.images.png,
            webp: planet.images.webp
        }
    })); 

    return planets;
};

export {getPlanetsData};