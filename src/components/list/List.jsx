import React from 'react'
import { gql, useQuery } from '@apollo/client'
import Card from '../card/Card'
import styled from 'styled-components'
import { ALL_CHARACTERS } from '../query/Query'

const ListItems = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const List = () => {
  const { loading, error, data } = useQuery(ALL_CHARACTERS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>error</p>
  return (
    <ListItems>
      {data.characters.results.map((c) => {
        return <Card key={c.id} character={c} />
      })}
    </ListItems>
  )
}

export default List
