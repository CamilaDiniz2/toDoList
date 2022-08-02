import styled from 'styled-components/native'
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';


export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
`

export const  InputContainer = styled.View`
  width: 100%;
  height: ${RFValue(54)}px;
  position: absolute;
  margin-top: ${RFPercentage(22)}px;
  padding: 0 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
` 


export const  TextInputBox = styled.TextInput`
  background-color: ${({theme}) => theme.colors['gray-500']};
  flex: 1;
  padding: 20px;
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.textColor};
  border-radius: 6px;
` 

export const  AddNewTaskButton = styled.TouchableOpacity`
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;
  background-color: ${({theme}) => theme.colors.buttonAdd};
  margin-left: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(16)};
  color: ${({theme}) => theme.colors.textColor};
`

export const TodoList = styled.View`
  margin-top: ${RFPercentage(8)}px;
  padding: 0 24px;
`

export const TodoInfo  = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${RFValue(20)}px;
`
export const TodoCreatedInfo = styled.View`
  flex-direction: row;
  align-items: center;
`
export const TodoCreatedText = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.colors.blue};
  font-size: ${RFValue(14)}px;
  
`
export const TodoCreatedNumber = styled.View`
  color: ${({theme}) => theme.colors.infoColor};
  font-weight: bold;
  font-size: ${RFValue(12)}px;
  margin-left: 16px;
  padding: 2px 8px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors['gray-300']};
`

export const  TodoCompletedInfo = styled.View`
  flex-direction: row;
  align-items: center;
` 
export const  TodoCompletedText = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.colors.purple};
  font-size: ${RFValue(14)}px;
  
`
export const  TodoCompletedNumber = styled.View`
  margin-left: 16px;
  padding: 2px 8px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors['gray-300']};
`

export const TodoCompletedNumberText = styled.Text`
  color: ${({theme}) => theme.colors.infoColor};
  font-weight: bold;
  font-size: ${RFValue(12)}px;
`

export const TasksEmptyBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 48px 20px;
  border-top: 4px solid yellow;
`
export const IconTask = styled(FontAwesome5)`
  font-size: ${RFValue(56)}px;
  color: ${({theme}) => theme.colors['gray-300']};

`
export const TasksEmptyTextSecondary = styled.Text`
  color: ${({theme}) => theme.colors['gray-300']};
  font-size:${RFValue(14)}px;
  text-align: center;
`

export const TasksEmptyTextPrimary = styled(TasksEmptyTextSecondary)`
  margin-top: 16px;
  color: ${({theme}) => theme.colors['gray-300']};
  font-size:${RFValue(14)}px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 4px;
`
