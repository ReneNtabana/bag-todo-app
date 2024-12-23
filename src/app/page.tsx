"use client";

import AddTask from "../components/Tasks/AddTask";
import TodoList from "../components/Tasks/TodoList";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-4 flex flex-col justify-center items-center ">
      <div className="text-center mb-5 flex flex-col gap-2">
        <h1 className="text-4xl mb-10 mt-5 font-bold cursor-pointer">
          Welcome to my Todo App
        </h1>
        <AddTask />
      </div>
      <TodoList />
    </main>
  );
}
