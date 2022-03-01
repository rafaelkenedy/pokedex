import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
export const StyTop = styled.View`
    background-color: ${({theme}) => theme.colors.primary};
    height: 17px;

`;
export const StyContainer = styled.View`
    width: 104px;
    height: 112px;
    border-radius: 8px;
    border-width: 2px; 
    align-items: center;   
   
`;

export const StyId = styled.Text`
    align-self: flex-end;
    margin-right: 8px;

`;

export const StyPkImage = styled.Image`
    width: 72px;
    height: 72px;
`;

export const StyName = styled.Text`
    color: ${({theme}) => theme.colors.background};
    font-family: 'Poppins-Regular';
    font-size: ${RFValue(10)}px;
`;

export const StyBot = styled.View`
    
    width: 100%;
    height: 24px;
    background-color: red;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    
`;

