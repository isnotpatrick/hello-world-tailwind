import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-500 md:text-5xl lg:text-6xl">
          Hello, World!
        </h1>
        <p className="text-base text-gray-700 mt-2 md:text-lg">
          Welcome to your first Tailwind CSS project.
        </p>
      </header>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        Click me!
      </button>
    </div>
  );
}

export default App;
