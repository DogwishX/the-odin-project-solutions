import React from 'react'
import './Project.css'

class Project extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div className='project'>
            <h2 className='project__title' data-testid='project__title'>{this.props.name}</h2>
            <div className='project__todoList'>
                {this.props.todos.map((todo, index) =>
                    <Todo key={index} todoInfo={todo} />
                )}

            </div>
        </div>
    }
}

class Todo extends Project {
    constructor() {
        super();
        this.state = { displayNameInput: false, displayDateInput: false }
        this.displayInput = this.displayInput.bind(this);
    }

    displayInput({ currentTarget }) {
        const tempState = this.state;
        if (currentTarget.className.includes('name')) {
            tempState.displayNameInput = true;
            this.setState(tempState);
        } else {
            tempState.displayDateInput = true;
            this.setState(tempState);
        }
    }

    render() {
        return <div className='todo' data-testid='todo'>
            {this.state.displayNameInput ?
                <input type='text' className='todo__input' data-testid='todo__input' /> :
                <p className='todo__name' data-testid='todo__name' onClick={this.displayInput}>
                    {this.props.todoInfo.todoName}
                </p>
            }

            {this.state.displayDateInput ? <input type='date'>{this.props.todoInfo.due}</input> : <p className='todo__date'>{this.props.todoInfo.due}</p>}
        </div>
    }
}

export default Project;