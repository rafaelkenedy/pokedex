import React, { useState } from 'react';
import LupaIcon from '../../../assets/icons/lupa.svg'
import HeartIcon from '../../../assets/icons/heart.svg'
import { Text } from 'react-native'
import { StyWrapper, StyContainer, StyTextInput, StyButton, StyFavoriteButton } from './styles';


export function SearchBar({
    pkQuery
}) {
    const [query, setQuery] = useState('');

    return (

        <StyWrapper>
            <StyContainer>
                <StyTextInput
                    value={query}
                    onChangeText={text => setQuery(text)}
                />
                {/* <Text>{query}</Text> */}

                <StyButton onPress={() => {
                    pkQuery = query
                    console.log(pkQuery)
                }}>


                    <LupaIcon />
                </StyButton>
            </StyContainer>
            <StyFavoriteButton>
                <HeartIcon />
            </StyFavoriteButton>
        </StyWrapper>
    );
}