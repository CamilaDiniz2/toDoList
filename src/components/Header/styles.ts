import styled from 'styled-components/native'
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(173)}px;
  background-color: ${({theme}) => theme.colors.headerBackground};
  justify-content: center;
  align-items: center;
`
