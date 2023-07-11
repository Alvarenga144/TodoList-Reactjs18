import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const {
        newTodoValue,
        setNewTodoValue,
        addTodo,
        setOpenModal,
        validatting,
        validSatus,
    } = React.useContext(TodoContext);

    const isDescriptionValid = (newTodoValue.length > 1) ? true : false;

    const onSubmit = (event) => {
        event.preventDefault();
        if (!isDescriptionValid) return;
        addTodo(newTodoValue.trim());
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        validatting(newTodoValue);
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit} >
            <label>Escribe tu nueva Tarea</label>
            <textarea
                placeholder="Ej. Estudiar Inglés"
                value={newTodoValue}
                onFocus={validatting(newTodoValue)}
                onChange={onChange}
                required
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel} >
                    Cancelar
                </button>
                <button
                    className={`TodoForm-button TodoForm-button--add ${isDescriptionValid ? '' : 'disabled'}`}
                    type="submit"
                    disabled={!isDescriptionValid || validSatus}
                >
                    Agregar
                </button>
            </div>
        </form>
    );
}

export { TodoForm };