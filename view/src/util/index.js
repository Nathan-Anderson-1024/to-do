/* eslint-disable prettier/prettier */
export const createTodo = async (todo) => {
    try {
        const data = await fetch('/api/todo/create', {
            method: 'POST',
            body: todo,
    
        });
        return data.json()
    } catch (error) {
        return {error}
    }
};

export const getTodos = async () => {
    try {
        const response = await fetch('/api/todos', {
            method: 'GET'
        })
        const json = await response.json();
        return json
    } catch (error) {
        return {error}
    }
    
};

export const removeTodo = async (id) => {
    try {
         await fetch(`/api/todo/${id}`, {
            method: 'DELETE'
        });
        return 'deleted';
    } catch (error) {
        return {error}
    }
};