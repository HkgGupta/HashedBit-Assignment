import { useEffect, useState } from 'react';
import './App.css';

import { MdEdit, MdDelete } from "react-icons/md";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    const [newTask, setNewTask] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const addTask = () => {
        if (newTask.trim()) {
            if (isEditing) {
                const updateTask = tasks.map((task, index) =>
                    index === currentTaskIndex ? { ...task, text: newTask } : task
                );
                setNewTask('');
                setTasks(updateTask);
                setIsEditing(false);
                setCurrentTaskIndex(null);
                toast.success("Task Updated!", { autoClose: 1000 });
            }
            else {
                setNewTask('');
                setTasks([...tasks, { text: newTask, completed: false }]);
                toast.success("Task Added!", { autoClose: 1000 });
            }
        }
        else {
            toast.error("Please Enter Task", { autoClose: 1000 });
        }
    };

    const deleteTask = (index) => {
        const deleteTask = tasks.filter((task, i) => i !== index);
        setTasks(deleteTask);
        toast.warning("Task Deleted!", { autoClose: 1000 });
    };

    const editTask = (index) => {
        setNewTask(tasks[index].text);
        setIsEditing(true);
        setCurrentTaskIndex(index);
    };

    const markAsCompleted = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        const task = updatedTasks[index];
        task.completed ? toast.success("Task Completed!", { autoClose: 1000 }) : toast.warning("Task Incompleted!", { autoClose: 1000 });
    };

    return (
        <div className="App">
            <ToastContainer />
            <h2>
                <img src="image.png" alt="ToDo" />To-Do List
            </h2>

            <div className="form-container">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text"
                        value={newTask}
                        onChange={(e) => {
                            setNewTask(e.target.value);
                        }}
                        placeholder="Enter New Task" />
                    <button onClick={addTask}>{isEditing ? "Update" : "Add"}</button>
                </form>
            </div>

            {tasks.length === 0 && <p className='no-tasks'>No tasks available!</p>}

            <div className="list-container">
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index} className={task.completed ? "completed" : ""}>
                            <div className="task-text" onClick={() => markAsCompleted(index)}>
                                {task.text}
                            </div>
                            <div>
                                <span onClick={() => editTask(index)}><MdEdit /></span>
                                <span onClick={() => deleteTask(index)}><MdDelete /></span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
