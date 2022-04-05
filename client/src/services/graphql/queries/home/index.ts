import { gql } from '@apollo/client';

import {client} from '../../../apollo/client';

import { Home } from '../../types';

async function getHomeData() {
    const GET_HOME_DATA = await client.query({
        query: gql`
            query {
                Home {
                    h5
                    h1
                    description
                }
            }
        `
    });

    const {data} = GET_HOME_DATA;
    const {Home} = data;

    let homeData = {} as Home;
    Object.assign<Home, Home>(homeData, {
        h5: Home.h5,
        h1: Home.h1,
        description: Home.description,
    });

    return homeData;
};

export {getHomeData};