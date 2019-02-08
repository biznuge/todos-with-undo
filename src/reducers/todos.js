import undoable, { includeAction } from 'redux-undo'

const todo = (state, action) => {

  //console.log("IN REDUCER: ", state, action);

  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        file: 'data:image/jpeg;base64,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',
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    case 'UPDATE_TODO_TEXT':

      console.log('1. UPDATE_TODO_TEXT', state.id, action.id);
      console.log('2. UPDATE_TODO_TEXT state:', state);
      console.log('3. UPDATE_TODO_TEXT action:', action);
      console.log('');
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        text: action.text
      }
    case 'UPDATE_TODO_IMG':
      //console.log('UPDATE_TODO_IMG', state, action);

      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        file: action.file
      }


    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      //console.log('TOGGLE_TODO', state);
      return state.map(t =>
        todo(t, action)
      )
    case 'UPDATE_TODO_TEXT':
      return state.map(t =>
        todo(t, action)
      )
    case 'UPDATE_TODO_IMG':
      //console.log('UPDATE_TODO_IMG', state);
      return state.map(t =>
        todo(t, action)
      )

    default:
      return state
  }
}

const undoableTodos = undoable(todos, { filter: includeAction(['ADD_TODO', 'UPDATE_TODO_TEXT', 'UPDATE_TODO_IMG']) })

export default undoableTodos
