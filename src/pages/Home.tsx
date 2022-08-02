import React, { useState } from 'react';
import {Text, FlatList, Alert} from 'react-native'
import {
  Container,  
  InputContainer, 
  TextInputBox, 
  AddNewTaskButton,
  Icon,
  TodoList,
  TodoInfo,
  TodoCreatedInfo,
  TodoCreatedText,
  TodoCreatedNumber,
  TodoCompletedInfo,
  TodoCompletedText,
  TodoCompletedNumber,
  TodoCompletedNumberText,
  TasksEmptyBox,
  IconTask,
  TasksEmptyTextPrimary,
  TasksEmptyTextSecondary
} from './styles'
import { Header} from '../components/Header';
import { ToDoTask } from '../components/ToDoTask';

interface ToDoProps{
  id: string;
  task: string;
  isTaskCompleted: boolean;
}

export function Home(){
  const [toDoList, setToDoList] = useState<ToDoProps[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const numberOfTasksCompleted = toDoList.filter(task => task.isTaskCompleted === true).length;
  const numberOfTasks = toDoList.length

  // Adicionar uma nova tarefa
  function handleAddNewTask(){
    const isAEqualTask = 
      toDoList.find(task => task.task.toLowerCase() === newTask.toLowerCase());

    if (newTask === ''){
      Alert.alert(
        'Nenhuma tarefa foi digitada', 
        'Por favor digite uma tarefa válida'
      )
    }

    if (isAEqualTask) {
      Alert.alert(
        "Tarefa já cadastrada", 
        'Já existe uma mesma tarefa cadastrada com este nome')
    } else if (newTask !== ''){
      const newTaskAdd: ToDoProps = {
        id: String(new Date().getMilliseconds()),
        task: newTask,
        isTaskCompleted: false,
      }
      setToDoList(oldstate => [...oldstate, newTaskAdd]);
      setNewTask('');
    }
  }

  // deletar uma tarefa cadastrada
  function handleDeleteTask(id: string){
    const isAIdFind =  toDoList.find(task => task.id === id);
    if (isAIdFind) {
      Alert.alert(
        'Remover tarefa', 
        `Você deseja realmende remover a tarefa ${isAIdFind.task}?`, [
          {
            text: 'Sim',
            onPress: () => setToDoList(oldList => oldList.filter(task => task.id !== id))
          },
          {
            text: 'Não',
            style: 'cancel'
          },
        ])
    }
  }

  function handleChangeCompleted(id : string){
    const newTaskList = toDoList.map(task => {
      if (task.id === id){
        return {...task, isTaskCompleted: !task.isTaskCompleted}
      } else{
        return task
      }
    })
    setToDoList(newTaskList)
  }
  return (
    <Container>
      <Header />
      <InputContainer>
        <TextInputBox
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setNewTask}
          value={newTask}
        />
        <AddNewTaskButton onPress={handleAddNewTask}>
          <Icon name="add-circle-outline"/>
        </AddNewTaskButton>
      </InputContainer>

      <TodoList>
        <TodoInfo>
          <TodoCreatedInfo>
            <TodoCreatedText>Criadas</TodoCreatedText>
            <TodoCreatedNumber>
            <TodoCompletedNumberText>
              {numberOfTasks}
            </TodoCompletedNumberText>
            </TodoCreatedNumber>
          </TodoCreatedInfo>

          <TodoCompletedInfo>
            <TodoCompletedText>Concluídas</TodoCompletedText>
            <TodoCompletedNumber>
              <TodoCompletedNumberText>
                {numberOfTasksCompleted}
              </TodoCompletedNumberText>
            </TodoCompletedNumber>
          </TodoCompletedInfo>
        </TodoInfo>

        <FlatList 
          data={toDoList}  
          keyExtractor={item => item.id}
          renderItem = {({ item}) => (
            <ToDoTask 
              data={item}
              deleteTask={handleDeleteTask}
              taskCompletedChange={handleChangeCompleted}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent = {() => (
            <TasksEmptyBox>
              <IconTask name="tasks" />
              <TasksEmptyTextPrimary>
                Ainda não há nenhum participante cadastrado no evento.
              </TasksEmptyTextPrimary> 
              <TasksEmptyTextSecondary>
              Crie tarefas e organize seus itens a fazer
              </TasksEmptyTextSecondary>
            </TasksEmptyBox>
          )} 
        />
      </TodoList>
    </Container>
  )
}