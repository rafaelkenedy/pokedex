import React from 'react';
import theme from '../../global/styles/theme';


import {
  StyContainer,
  StyId,
  StyName,
  StyPkImage,
  StyBot
} from './styles';



export function PkCard({
  id,
  typeColor,
  name,
}) {
  return (


    <StyContainer style={{ borderColor: typeColor }}>
      <StyId style={{ color: typeColor }}>{'#'}{id}</StyId>
      <StyPkImage source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png` }} />
      <StyBot style={{backgroundColor: typeColor}}>
        <StyName>{name}</StyName>
      </StyBot>
    </StyContainer>
  );
}