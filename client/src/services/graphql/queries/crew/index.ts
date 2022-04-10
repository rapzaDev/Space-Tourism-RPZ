import { gql } from '@apollo/client';

import {client} from '../../../apollo/client';

import { Crew } from '../../types';

async function getCrewData() {
    const GET_CREW_DATA = await client.query({
        query: gql`
            query {
                Crew {
                    id
                    name
                    role
                    bio
                    images {
                        png
                        webp
                    }
                }
            }
        `
    });

    const { data } = GET_CREW_DATA;
    const { Crew } = data;

    const crewData: Crew[] = Crew;

    const crew = crewData.map<Crew>( crewMember => ({
        id: crewMember.id,
        name: crewMember.name,
        role: crewMember.role,
        bio: crewMember.bio,
        images: {
            png: crewMember.images.png,
            webp: crewMember.images.webp,
        },
    })); 

    return crew;
};

export {getCrewData};