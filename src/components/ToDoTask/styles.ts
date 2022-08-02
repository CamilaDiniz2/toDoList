import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors['gray-500']};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 12px;

  margin-bottom: 8px;
  border-radius: 8px;
`

export const CheckButton = styled.TouchableOpacity`

`

export const Icon = styled(Entypo)`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.blue};
`

export const TaskText = styled.Text`
  font-size: ${RFValue(14)}px;
  flex: 1;
  color: ${({theme}) => theme.colors.textColor};
  text-align: left;
  padding: 16px;
`

export const TaskTextCompleted = styled(TaskText)`
  color: ${({theme}) => theme.colors['gray-300']};
  text-decoration-line: line-through;
`

export const DeleteTaskButton = styled.TouchableOpacity`
  
`
export const IconDelete = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors['gray-300']};
`

export const IconCheckTask = styled(AntDesign)`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.purpleDark}
`