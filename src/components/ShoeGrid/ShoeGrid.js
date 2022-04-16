import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCard key={shoe.slug} {...shoe} />
      ))}
      <PlaceHolder></PlaceHolder>
      <PlaceHolder></PlaceHolder>
      <PlaceHolder></PlaceHolder>
      <PlaceHolder></PlaceHolder>
      <PlaceHolder></PlaceHolder>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 36px;
`;

const PlaceHolder = styled.div`
  flex-shrink: 0;
  flex-grow: 1;
  flex-basis: 200px;
`

export default ShoeGrid;
