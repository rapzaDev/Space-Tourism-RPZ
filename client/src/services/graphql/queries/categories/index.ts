import { gql } from '@apollo/client';

import {client} from '../../../apollo/client';

import { Categories } from '../../types';

async function getCategoriesData() {
    const GET_CATEGORIES_DATA = await client.query({
        query: gql`
            query {
                Categories {
                    home
                    destination
                    crew
                    technology
                }
            }
        `
    });

    const { data } = GET_CATEGORIES_DATA;
    const { Categories } = data;

    let categoriesData = {} as Categories;
    Object.assign<Categories, Categories>(categoriesData, {
        home: Categories.home,
        destination: Categories.destination,
        crew: Categories.crew,
        technology: Categories.technology,
    });

    return categoriesData;
};

export {getCategoriesData};