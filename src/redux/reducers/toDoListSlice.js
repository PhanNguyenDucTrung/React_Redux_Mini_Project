import { ToDoListDarkTheme } from '../../pages/Todolist/Themes/ToDoListDarkTheme.js';
import { createSlice } from '@reduxjs/toolkit';
import { arrTheme } from '../../pages/Todolist/Themes/ThemesManager.js';
const toDoListSlice = createSlice({
    name: 'toDoList',
    initialState: {
        themeToDoList: ToDoListDarkTheme,
        tasks: [
            {
                id: 1,
                name: 'Do homework',
                isCompleted: false,
            },
            {
                id: 2,
                name: 'Read book',
                isCompleted: false,
            },
            {
                id: 3,
                name: 'Play football',
                isCompleted: true,
            },
            {
                id: 4,
                name: 'Play game',
                isCompleted: true,
            },
        ],
        taskEdit: null,
    },
    reducers: {
        changeTheme: (state, action) => {
            const currentTheme = arrTheme.find(theme => theme.id == action.payload);
            state.themeToDoList = currentTheme.theme;
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        updateTask: (state, action) => {
            state.tasks = state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    return action.payload;
                }
                return task;
            });
        },
        editTask: (state, action) => {
            state.taskEdit = action.payload;
        },

        checkTask: (state, action) => {
            state.tasks = state.tasks.map(task => {
                if (task.id === action.payload) {
                    return { ...task, isCompleted: true };
                }
                return task;
            });
        },
    },
});

export const { addTask, removeTask, editTask, updateTask, changeTheme, checkTask } = toDoListSlice.actions;
export default toDoListSlice.reducer;
