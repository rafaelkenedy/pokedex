import React from 'react';


import { 
  StyContainer,
  StyId,
  StyName,
  StyPkImage

} from './styles';

export function PkCard({
  id,
  type,
  name,

}){
  return (
    
    <StyContainer>

      <StyId>{id}</StyId>
      <StyPkImage source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}}/>
      <StyName>{name}</StyName>
    </StyContainer>
  );
}