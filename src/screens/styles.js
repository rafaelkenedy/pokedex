import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'


export const StyWrapper = styled.View`
    
    align-items: center;
    margin-top: 51px;
    justify-content: space-between;
    margin-left: 42px;
    margin-right: 42px;       
    height: 54px;
    //background-color: green;
    flex-direction: row;

`;
export const StyContainer = styled.View`
        
    justify-content: space-between;
    align-items: center;
    width: 85%;
    //height: 54px;    
    border-radius: 7px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.primary};    
    flex-direction: row;
`;

export const StyTextInput = styled.TextInput`
    
    margin-left: 40px;
    width: 60%;
    font-family: 'Poppins-Regular';
`;

export const StyButton = styled.TouchableOpacity`
    margin-right: 19px; 
`;

export const StyFavoriteButton = styled.TouchableOpacity`
    //width: 24px;
    //height: 24px;    
    //margin-left: 23px;   
`;

export const StyButtonCard = styled.TouchableOpacity`
`;


