import React from 'react';

class TodoItem extends React.Component {

    render() {
        const { important, done, label, onDelete, onToggleImportant, onToggleDone } = this.props;
        const style = {
            fontWeight: important ? 'bold' : 'normal',
            textDecoration: done ? 'line-through' : 'none',
            cursor: 'pointer',
            width: '100%'
        };

        return (
            <div className="d-flex align-items-center justify-content-between ">
                <span style={style} onClick={onToggleDone}>{label}</span>
                <aside className="d-flex">
                    <button
                        className={`btn btn-outline-success btn-sm mr-2 ${important && 'active'}`}
                        onClick={onToggleImportant}
                    >
                        <i className="far fa-star" />
                    </button>
                    <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={onDelete}
                    >
                        <i className="far fa-trash-alt" />
                    </button>
                </aside>
            </div>
        )
    }
}

export default TodoItem;
