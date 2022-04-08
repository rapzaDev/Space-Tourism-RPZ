import { gql } from '@apollo/client';

import {client} from '../../../apollo/client';

import { Destination } from '../../types';

async function getPlanetsData() {
    const GET_PLANETS_DATA = await client.query({
        query: gql`
            query {
                Destinations {
                    name
                }
            }
        `
    });

    const { data } = GET_PLANETS_DATA;
    const { Destinations } = data;

    const destinationsData: Destination[] = Destinations;

    const planets = destinationsData.map( planet => ({
        title: planet.name
    })); 

    return planets;
};

export {getPlanetsData};