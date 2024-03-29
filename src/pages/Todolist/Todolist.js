import React, { Component } from 'react';
import { Container } from './Containers/Container.js';
import { ThemeProvider } from 'styled-components';
import { Dropdown } from './Components/Dropdown.js';
import { Heading3 } from './Components/Heading.js';
import { TextField } from './Components/TextField.js';
import { Button } from './Components/Button.js';
import { Table, Thead, Th, Tr } from './Components/Table.js';
import { connect } from 'react-redux';
import {
    changeTheme,
    addTask,
    removeTask,
    checkTask,
    editTask,
    updateTask,
} from '../../redux/reducers/toDoListSlice.js';
import { arrTheme } from './Themes/ThemesManager.js';

export class Todolist extends Component {
    state = {
        taskName: '',
        taskId: -1,
    };

    // static getDerivedStateFromProps(newProps, currentState) {
    //     console.log('newProps', newProps);
    //     console.log('currentState', currentState);
    //     if (newProps.taskEdit !== null && newProps.taskEdit.id !== currentState.taskId) {
    //         console.log('run');
    //         return { taskId: newProps.taskEdit.id, taskName: newProps.taskEdit.name };
    //     }

    //     return null;
    // }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('newProps', newProps);
        console.log('currentState', currentState);
        return null;
    }

    renderTasksToDo = () => {
        return this.props.tasks
            .filter(task => task.isCompleted === false)
            .map(task => {
                return (
                    <Tr key={task.id}>
                        <Th
                            style={{
                                verticalAlign: 'middle',
                            }}>
                            {task.name}
                        </Th>
                        <Th className='text-end'>
                            <Button
                                className='ms-1'
                                onClick={() => {
                                    this.props.editTask(task);

                                    if (this.state.taskId === task.id) {
                                        this.setState({ taskName: task.name });
                                    }
                                }}>
                                <i className='fa fa-edit'></i>
                            </Button>
                            <Button
                                className='ms-1'
                                onClick={() => {
                                    this.props.checkTask(task.id);
                                }}>
                                <i className='fa fa-check'></i>
                            </Button>
                            <Button
                                className='ms-1'
                                onClick={() => {
                                    this.props.removeTask(task.id);
                                }}>
                                <i className='fa fa-trash'></i>
                            </Button>
                        </Th>
                    </Tr>
                );
            });
    };

    renderTasksCompleted = () => {
        return this.props.tasks
            .filter(task => task.isCompleted === true)
            .map(task => {
                return (
                    <Tr key={task.id}>
                        <Th
                            style={{
                                verticalAlign: 'middle',
                            }}>
                            {task.name}
                        </Th>
                        <Th className='text-end'>
                            <Button
                                className='ms-1'
                                onClick={() => {
                                    this.props.removeTask(task.id);
                                }}>
                                <i className='fa fa-trash'></i>
                            </Button>
                        </Th>
                    </Tr>
                );
            });
    };

    renderTheme = () => {
        return arrTheme.map((theme, index) => {
            return (
                <option key={index} value={theme.id}>
                    {theme.name}
                </option>
            );
        });
    };
    render() {
        return (
            <ThemeProvider theme={this.props.themeToDoList}>
                <Container className='w-50 mt-4 pt-2'>
                    <Dropdown
                        onChange={e => {
                            this.props.changeTheme(e.target.value);
                        }}>
                        {this.renderTheme()}
                    </Dropdown>
                    <Heading3 className='mt-2'>Todo List</Heading3>
                    <TextField
                        label='Task name'
                        className='w-50'
                        name='taskName'
                        value={this.state.taskName}
                        onChange={e => {
                            this.setState({ taskName: e.target.value }, () => {
                                console.log(this.state.taskName);
                            });
                        }}
                    />

                    <Button
                        className={'ms-2' + (this.state.taskId !== -1 ? ' d-none' : '')}
                        onClick={() => {
                            this.props.addTask({
                                id: Date.now(),
                                isCompleted: false,
                                name: this.state.taskName === '' ? 'New task' : this.state.taskName,
                            });

                            this.setState({ taskName: '', taskId: -1 });
                        }}>
                        <i className='fa fa-plus'></i>Add task
                    </Button>
                    <Button
                        className={'ms-2' + (this.state.taskId === -1 ? ' d-none' : '')}
                        onClick={() => {
                            this.props.updateTask({
                                id: this.state.taskId,
                                name: this.state.taskName,
                                isCompleted: false,
                            });
                            this.setState({ taskName: '', taskId: -1 });
                        }}>
                        <i className='fa fa-upload'></i>
                        Update
                    </Button>
                    <hr />
                    <Heading3>Task to do</Heading3>
                    <Table>
                        <Thead>{this.renderTasksToDo()}</Thead>
                    </Table>

                    <Heading3>Task completed</Heading3>
                    <Table>
                        <Thead>{this.renderTasksCompleted()}</Thead>
                    </Table>
                </Container>
            </ThemeProvider>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.taskEdit !== this.props.taskEdit) {
            this.setState({
                taskId: this.props.taskEdit.id,
                taskName: this.props.taskEdit.name,
            });
        }
        console.log(prevState, this.state);
    }
}

const mapStateToProps = state => {
    return {
        themeToDoList: state.toDoList.themeToDoList,
        tasks: state.toDoList.tasks,
        taskEdit: state.toDoList.taskEdit,
    };
};

const mapDispatchToProps = {
    changeTheme,
    addTask,
    removeTask,
    editTask,
    checkTask,
    updateTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
