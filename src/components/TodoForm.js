import style from './TodoForm.css';

const TodoForm = props => {

    return (
        <form className={style.addTodoForm}>
            <input type={'text'} placeholder={'napisz zadanie'} className={'addTodoForm-input'} />
            <button type={'button'} onClick={() => props.add(document.querySelector('.addTodoForm-input').value)}>Dodaj zadanie</button>
        </form>
    );
}

export default TodoForm;
