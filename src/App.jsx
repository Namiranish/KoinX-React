
import RightContainer from "./components/RightContainer";
import React from 'react'; 
import Tax from "./components/Tax";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar/>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
       
        <div className="flex flex-col sm:flex-row gap-6 max-w-5xl w-full">
          <Tax className="w-full sm:w-1/2" />
          <RightContainer className="w-full sm:w-1/2" />
        </div>


      </div>


    </div>
  );
}

export default App;
