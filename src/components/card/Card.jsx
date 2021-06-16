import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const CardItem = styled.div`
  display: grid;
  place-items: center;
  background-color: #eeeeee;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding-top: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #e0dede;
  }
`

const Image = styled.img`
  border-radius: 15px 15px 0px 0px;
`

const Card = ({ character }) => {
  let history = useHistory()

  const getDetail = () => {
    history.push(`/character/${character.id}`)
  }

  return (
    <CardItem onClick={getDetail}>
      <Image src={character.image} alt={character.name} />
      <div>
        <p>
          {character.id} - {character.name}
        </p>
      </div>
    </CardItem>
  )
}

export default Card
