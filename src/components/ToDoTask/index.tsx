import React from 'react';
import { 
  Container, 
  CheckButton, 
  Icon, 
  TaskText, 
  DeleteTaskButton, 
  IconDelete,
  IconCheckTask,
  TaskTextCompleted
} from './styles'

export interface ToDoProps{
  id: string;
  task: string;
  isTaskCompleted: boolean;
}

type ToDoTaskProps = {
  data: ToDoProps;
  deleteTask: (id: string) => void
  taskCompletedChange: (id: string) => void
}

export function ToDoTask({
  data, 
  deleteTask, 
  taskCompletedChange
  } : ToDoTaskProps){
  return (
    <Container key={data.id}>
      <CheckButton onPress={() => taskCompletedChange(data.id)}>
        {
          data.isTaskCompleted && <IconCheckTask name="checkcircle" />
        }
        {
          !data.isTaskCompleted && <Icon name="circle" />
        }
      </CheckButton>
      
        {data.isTaskCompleted && 
          <TaskTextCompleted>
            {data.task}
          </TaskTextCompleted>
        }
        {!data.isTaskCompleted &&
          <TaskText>
            {data.task}
          </TaskText>
        }
      

      <DeleteTaskButton onPress={() => deleteTask(data.id)}>
        <IconDelete name="trash-can-outline" />
      </DeleteTaskButton>
    </Container>
  )
}