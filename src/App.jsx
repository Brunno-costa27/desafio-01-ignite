import style from './App.module.css'
import './global.css'
import ReactLogo  from './assets/rocket.svg'
import todo from './assets/todo.svg'
import tarefa from './assets/Clipboard.png'
import {TodoList} from './components/TodoList'
import { useState } from 'react';
import uuid from 'react-uuid';


export function App() {



  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');


  function addTodo(){
    // Verifica se o newTodo não está vazio
    if(newTodo.trim() === '') return;
    
    const listTodo = {
      id: uuid(),
      title: newTodo,
      isComplete: false
    }
    setTodos([...todos, listTodo]);
    setNewTodo('');
  }


  function removeTodo(index) {
    const updatedTodos = [...todos];
    const listAtualizada = updatedTodos.filter(todo => todo.id !== index)
    setTodos(listAtualizada)
  }

  function handleNewCommentInvalid(){

    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function isCompleteTrue(index){
    
     // Use o método map para criar um novo array com as alterações
    const newListTodo = todos.map(objeto => {
    // Verifique se o objeto tem o mesmo id que o id especificado
    if (objeto.id === index) {
      // Alterne o valor de inCompleto de true para false ou vice-versa
      return { ...objeto, isComplete: !objeto.isComplete };
    }
    // Caso contrário, retorne o objeto sem fazer alterações
    return objeto;
  });

  setTodos(newListTodo)
  return newListTodo;

  }

  console.log(todos);

  const finishedTodo = todos.filter((todo) => todo.isComplete === true)
  const contTodoTrue = finishedTodo.length

  return (

    <>
    <div>
      <header className={style.header}>

        <div className={style.title}>
            <img src={ReactLogo} alt="" />
            <svg width="91" height="31" viewBox="0 0 91 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 8.18182V13.8636H0.625V8.18182H15ZM3.40909 2.95455H11.25V22.983C11.25 23.286 11.3021 23.5417 11.4062 23.75C11.5104 23.9489 11.6714 24.1004 11.8892 24.2045C12.107 24.2992 12.3864 24.3466 12.7273 24.3466C12.964 24.3466 13.2386 24.3182 13.5511 24.2614C13.8731 24.2045 14.1098 24.1572 14.2614 24.1193L15.3977 29.6307C15.0473 29.7348 14.5455 29.8627 13.892 30.0142C13.2481 30.1657 12.4811 30.2652 11.5909 30.3125C9.79167 30.4072 8.28125 30.2225 7.05966 29.7585C5.83807 29.285 4.91951 28.5417 4.30398 27.5284C3.68845 26.5152 3.39015 25.2462 3.40909 23.7216V2.95455ZM28.4766 30.3977C26.1091 30.3977 24.0826 29.929 22.397 28.9915C20.7114 28.0445 19.4188 26.7282 18.5192 25.0426C17.6196 23.3475 17.1697 21.3826 17.1697 19.1477C17.1697 16.9129 17.6196 14.9527 18.5192 13.267C19.4188 11.572 20.7114 10.2557 22.397 9.31818C24.0826 8.37121 26.1091 7.89773 28.4766 7.89773C30.844 7.89773 32.8705 8.37121 34.5561 9.31818C36.2417 10.2557 37.5343 11.572 38.4339 13.267C39.3336 14.9527 39.7834 16.9129 39.7834 19.1477C39.7834 21.3826 39.3336 23.3475 38.4339 25.0426C37.5343 26.7282 36.2417 28.0445 34.5561 28.9915C32.8705 29.929 30.844 30.3977 28.4766 30.3977ZM28.5334 24.6023C29.1963 24.6023 29.7692 24.3797 30.2521 23.9347C30.7351 23.4896 31.1091 22.8551 31.3743 22.0312C31.6394 21.2074 31.772 20.2273 31.772 19.0909C31.772 17.9451 31.6394 16.965 31.3743 16.1506C31.1091 15.3267 30.7351 14.6922 30.2521 14.2472C29.7692 13.8021 29.1963 13.5795 28.5334 13.5795C27.8326 13.5795 27.2313 13.8021 26.7294 14.2472C26.2275 14.6922 25.844 15.3267 25.5788 16.1506C25.3137 16.965 25.1811 17.9451 25.1811 19.0909C25.1811 20.2273 25.3137 21.2074 25.5788 22.0312C25.844 22.8551 26.2275 23.4896 26.7294 23.9347C27.2313 24.3797 27.8326 24.6023 28.5334 24.6023Z" fill="#4EA8DE"/>
              <path d="M50.8629 30.2841C49.3099 30.2841 47.88 29.8769 46.5732 29.0625C45.2758 28.2481 44.2341 27.0123 43.4482 25.3551C42.6716 23.6979 42.2834 21.6098 42.2834 19.0909C42.2834 16.4583 42.6906 14.3182 43.505 12.6705C44.3288 11.0227 45.3894 9.81534 46.6868 9.0483C47.9936 8.28125 49.3667 7.89773 50.8061 7.89773C51.8857 7.89773 52.8326 8.08712 53.647 8.46591C54.4614 8.83523 55.1432 9.33239 55.6925 9.95739C56.2417 10.5729 56.6584 11.25 56.9425 11.9886H57.0561V0.90909H64.897V30H57.1129V26.4205H56.9425C56.6394 27.1591 56.2038 27.822 55.6357 28.4091C55.0769 28.9867 54.3951 29.446 53.5902 29.7869C52.7947 30.1184 51.8857 30.2841 50.8629 30.2841ZM53.7607 24.2614C54.4804 24.2614 55.0959 24.053 55.6072 23.6364C56.1281 23.2102 56.5258 22.6136 56.8004 21.8466C57.0845 21.0701 57.2266 20.1515 57.2266 19.0909C57.2266 18.0114 57.0845 17.0881 56.8004 16.321C56.5258 15.5445 56.1281 14.9527 55.6072 14.5455C55.0959 14.1288 54.4804 13.9205 53.7607 13.9205C53.041 13.9205 52.4254 14.1288 51.9141 14.5455C51.4122 14.9527 51.0239 15.5445 50.7493 16.321C50.4841 17.0881 50.3516 18.0114 50.3516 19.0909C50.3516 20.1705 50.4841 21.0985 50.7493 21.875C51.0239 22.642 51.4122 23.2339 51.9141 23.6506C52.4254 24.0578 53.041 24.2614 53.7607 24.2614ZM79.2578 30.3977C76.8904 30.3977 74.8639 29.929 73.1783 28.9915C71.4927 28.0445 70.2 26.7282 69.3004 25.0426C68.4008 23.3475 67.951 21.3826 67.951 19.1477C67.951 16.9129 68.4008 14.9527 69.3004 13.267C70.2 11.572 71.4927 10.2557 73.1783 9.31818C74.8639 8.37121 76.8904 7.89773 79.2578 7.89773C81.6252 7.89773 83.6518 8.37121 85.3374 9.31818C87.023 10.2557 88.3156 11.572 89.2152 13.267C90.1148 14.9527 90.5646 16.9129 90.5646 19.1477C90.5646 21.3826 90.1148 23.3475 89.2152 25.0426C88.3156 26.7282 87.023 28.0445 85.3374 28.9915C83.6518 29.929 81.6252 30.3977 79.2578 30.3977ZM79.3146 24.6023C79.9775 24.6023 80.5504 24.3797 81.0334 23.9347C81.5163 23.4896 81.8904 22.8551 82.1555 22.0312C82.4207 21.2074 82.5533 20.2273 82.5533 19.0909C82.5533 17.9451 82.4207 16.965 82.1555 16.1506C81.8904 15.3267 81.5163 14.6922 81.0334 14.2472C80.5504 13.8021 79.9775 13.5795 79.3146 13.5795C78.6139 13.5795 78.0125 13.8021 77.5107 14.2472C77.0088 14.6922 76.6252 15.3267 76.3601 16.1506C76.0949 16.965 75.9624 17.9451 75.9624 19.0909C75.9624 20.2273 76.0949 21.2074 76.3601 22.0312C76.6252 22.8551 77.0088 23.4896 77.5107 23.9347C78.0125 24.3797 78.6139 24.6023 79.3146 24.6023Z" fill="#5E60CE"/>
            </svg>

        </div>

      </header>
        <div className={style.container}>
          <input 
            className={style.input}
            type="text"
            name="tarefa"
            placeholder='Adicione uma nova tarefa'
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onInvalid={handleNewCommentInvalid}
            required
          />
          <button type='submit' className={style.buttom} onClick={addTodo}>
            <span>Criar</span> 
            <img src={todo} alt="" />
          </button>

        </div>

          <div className={style.tasks}>

            <div className={style.tasksStatus}>
              <div>
                <span className={style.taskCreated}>Tarefas criadas</span>
                <span className={style.taskQtd}>{todos.length}</span>
              </div>
              <div>
                <span className={style.taskFinished}>Concluídas</span>
                <span className={style.taskQtd}>{contTodoTrue} de {todos.length}</span>
              </div>
            </div>

            <div>
              {todos.length > 0 ? (
                // Se o array tiver elementos (tamanho maior que 0), exiba esta div
                <div className={style.tasksContainer}>
                  
                  {todos.map(list => (

                    <TodoList
                    key={list.id}
                    customKey={list.id}
                    title={list.title}
                    isComplete={isCompleteTrue}
                    onRemoveTodo={removeTodo}
                    />
                    
                    ))}

                </div>
              ) : (
                // Se o array estiver vazio (tamanho igual a 0), exiba esta div
                <div>

                  <div className={style.containerList}>
                    <img src={tarefa} alt="" />
                    <div className={style.textContainer}>
                      <h3>Você ainda não tem tarefas cadastradas</h3>
                      <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                  </div>

                </div>
              )}
            </div>
            

           

          </div>


    </div>
    </>
  )
}
