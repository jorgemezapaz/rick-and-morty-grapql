import { gql } from '@apollo/client'

export const ALL_CHARACTERS = gql`
  {
    characters {
      results {
        id
        name
        status
        image
        location {
          id
          name
        }
      }
    }
  }
`

export const CHARACTER_BY_ID = gql`
  query Character($characterId: ID!) {
    character(id: $characterId) {
      id
      name
      status
      location {
        name
      }
      image
      gender
      type
      origin {
        dimension
      }
      species
      location {
        name
      }
    }
  }
`
