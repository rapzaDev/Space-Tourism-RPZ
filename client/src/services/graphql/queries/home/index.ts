import { gql } from '@apollo/client';

import {client} from '../../../apollo/client';

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

    return data;
};

export {getHomeData};