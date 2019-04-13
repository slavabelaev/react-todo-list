import React from 'react';
import TodoItem from '../TodoItem';

class TodoList extends React.Component {
    render() {
        const { todos, onDelete, onToggleImportant, onToggleDone } = this.props;

        const itemElements = todos.map(item => {
            const { id, ...itemProps} = item;

            return (
                <li key={id} className="list-group-item">
                    <TodoItem
                        {...itemProps}
                        onDelete={() => onDelete(id)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleDone={() => onToggleDone(id)}
                    />
                </li>
            )
        });

        return (
            <ul className="list-group">
                {itemElements}
            </ul>
        )
    }
}

export default TodoList;
