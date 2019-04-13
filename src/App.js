import React from 'react';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import AddForm from './components/AddForm';

class App extends React.Component {
    state = {
        todoData: [
            { id: 1, label: 'Learn React', done: true },
            { id: 2, label: 'Create React App', done: true },
            { id: 3, label: 'Learn Redux', important: true },
            { id: 4, label: 'Create React App with Redux', important: true }
        ],
        searchString: '',
        filterType: null
    }

    deleteItem = id => {
        this.setState(({ todoData }) => ({ todoData: todoData.filter(item => item.id !== id) }))
    }

    addItem = label => {
        this.setState(({ todoData }) => ({ todoData: [...todoData, { id: Math.random(), label }] }))
    }

    updateFilters = (searchString, filterBy) => {
        this.setState({ searchString, filterBy })
    }

    getDisplayedTodos = () => {
        const { todoData, searchString, filterBy } = this.state;

        return todoData.filter(item => {
            const allowedBySearchString = !searchString || (searchString && item.label.toLowerCase().includes(searchString.toLowerCase()));
            const allowedByFilterType = !filterBy || (filterBy && item[filterBy]);

            return allowedBySearchString && allowedByFilterType;
        })
    }

    toggleDone = id => this.toggleProperty(id, 'done');

    toggleImportant = id => this.toggleProperty(id, 'important');

    toggleProperty = (id, propertyName) => {
        this.setState(({ todoData }) => {
            const index = todoData.findIndex(item => item.id === id);
            const item = todoData[index];
            item[propertyName] = !item[propertyName];

            return {
                todoData: [
                    ...todoData.slice(0, index),
                    item,
                    ...todoData.slice(index + 1)
                ]
            }
        })
    }

    getTotalNeedToDone = () => this.state.todoData.length - this.getTotalDone();

    getTotalDone = () => this.state.todoData.filter(item => item.done).length;

    render() {
        return (
            <div className="container py-3">
                <AppHeader
                    totalNeedToDone={this.getTotalNeedToDone()}
                    totalDone={this.getTotalDone()}
                />
                <SearchPanel onFilter={this.updateFilters} />
                <TodoList
                    todos={this.getDisplayedTodos()}
                    onDelete={this.deleteItem}
                    onToggleDone={this.toggleDone}
                    onToggleImportant={this.toggleImportant}
                />
                <AddForm onCreate={this.addItem} />
            </div>
        )
    }
};

export default App;
