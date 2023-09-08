import { CheckboxSVG } from './CheckboxSVG'
import style from './TodoList.module.css'


export function TodoList({ customKey, title, isComplete, onRemoveTodo }) {

    function handleDeleteTodo(){
        onRemoveTodo(customKey)
    }

  return (
    
        <div className={style.containerTask}>
            <div className={style.content}>

                <CheckboxSVG
                    key={customKey}
                    customKeyIsComplete={customKey}
                    onChangeTrue={isComplete}
                />
                <p>{title}</p>
            </div>
            <button  className={style.btnExcluir} onClick={handleDeleteTodo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="216" y1="56" x2="40" y2="56" fill="#fff" stroke="currentColor"></line><line x1="104" y1="104" x2="104" y2="168" fill="none" stroke="currentColor"></line><line x1="152" y1="104" x2="152" y2="168" fill="#fff" stroke="currentColor" ></line><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" fill="none" stroke="currentColor"></path><path d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56" fill="none" stroke="currentColor"></path></svg>
            </button>
        </div>
  )
}

