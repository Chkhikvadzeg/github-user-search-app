import React from 'react'
import styled from 'styled-components'
import sun from '../assets/icon-sun.svg'
import moon from '../assets/icon-moon.svg'

export default function Header({ isBlack, setIsBlack }) {
  return (
    <Container>
      <Heading isBlack={isBlack}>devfinder</Heading>
      <Toggle onClick={() => setIsBlack(prev => !prev)}>
        <ToggleLabel isBlack={isBlack}>{isBlack ? 'Light' : 'Dark'}</ToggleLabel>
        <img src={isBlack ? sun : moon} alt={isBlack ? 'Sun' : 'Moon'} />
      </Toggle>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  color: ${props => props.isBlack ? '#FFFFFF' : '#222731'};
`;

const Toggle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  user-select: none;

  img {
    width: 20px;
    height: 20px;
  }
`;

const ToggleLabel = styled.span`
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 2.5px;
  text-transform: uppercase;

  color: ${props => props.isBlack ? '#FFFFFF' : '#4B6A9B'};
`;