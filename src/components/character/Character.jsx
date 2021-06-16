import React from 'react'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import SpanItem from '../commons/SpanItem'
import { CHARACTER_BY_ID } from '../query/Query'
const Container = styled.div`
  display: grid;
  place-items: center;
  height: 80vh;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
`
const Image = styled.img`
  border-radius: 15px;
  width: 300px;
`
const Button = styled.button`
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.1em 0.1em 0;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
  &:hover {
    border-color: #030303;
  }
`

const HeaderButton = styled.div`
  width: 90%;
  height: 30px;
`
const Title = styled.h1`
  margin: 5px;
`

const Character = ({ match }) => {
  let history = useHistory()
  const back = () => {
    history.push(`/`)
  }

  const { loading, error, data } = useQuery(CHARACTER_BY_ID, {
    variables: { characterId: match.params.id },
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>error</p>
  return (
    <Container>
      <HeaderButton>
        <Button onClick={back}> &#60; Back</Button>
      </HeaderButton>
      <Title>{data.character.name}</Title>
      <Card key={data.character.id}>
        <Image src={data.character.image} alt={data.character.name} />
        <div>
          <SpanItem name='State:' value={data.character.status} />
          <SpanItem name='Gender:' value={data.character.gender} />
          <SpanItem name='Specie:' value={data.character.species} />
          <SpanItem name='Location:' value={data.character.location.name} />
          <SpanItem name='Dimention:' value={data.character.origin.dimension} />
        </div>
      </Card>
    </Container>
  )
}

export default Character
