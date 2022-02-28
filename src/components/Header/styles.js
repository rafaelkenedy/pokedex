import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
export const StyTop = styled.View`
    background-color: ${({theme}) => theme.colors.primary};
    height: 17px;

`;
export const StyContainer = styled.View`
    margin-left: 48px;
    margin-top: 50px;
    justify-content: space-between;
    align-items: center;
    width: 249px;
    height: 32px;
    background-color: yellow;
    flex-direction: row;
`;
export const StyTitle = styled.Text`
    font-size: ${RFValue(24)}px;
    margin-left: 16px;
    color: ${({theme}) => theme.colors.primary};
    font-family: 'Poppins-Bold';
`;



