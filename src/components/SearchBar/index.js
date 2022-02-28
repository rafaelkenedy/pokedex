import React from 'react';
import LupaIcon from '../../../assets/icons/lupa.svg'
import HeartIcon from '../../../assets/icons/heart.svg'
import { StyWrapper, StyContainer, StyTextInput, StyButton, StyFavoriteButton } from './styles';


export function SearchBar() {
    return (
        <StyWrapper>
            <StyContainer>
                <StyTextInput />
                <StyButton>
                    <LupaIcon />
                </StyButton>
            </StyContainer>
            <StyFavoriteButton>
                    <HeartIcon />
                </StyFavoriteButton>
        </StyWrapper>
    );
}