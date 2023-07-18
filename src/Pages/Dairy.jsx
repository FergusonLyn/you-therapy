import React from 'react'
import { useState } from "react";
import AddTask from '../components/AddTask';
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import Nav from '../components/Nav';


const Dairy = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "My first anxiety",
      day: "This happened on 7th June , 2023 as i was in class. I think its from the stressed compiling up as the semester comes to an end...",
      reminder: true,
    },
    {
      id: 2,
      text: "A therapy session",
      day: "Met a new therapist today on 8th June , 2023. She was quite interesting and easy to talk to. I am understanding why mental health is such a big issue",
      reminder: true,
    },
    {
      id: 3,
      text: "Visited a relative",
      day: "We did some pretty interesting thing as a form of relaxation. I love the cool breeze at the sea side. Gosh, such a calming atmosphere",
      reminder: false,
    },
  ]);

  // adding task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <>
    <Nav />
    <div className="container-d">
      <Header showAddTask={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show"
      )}
    </div>
    </>
  );
}

export default Dairy
