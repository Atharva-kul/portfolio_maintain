
import './App.css' // Ensure App.css contains @import "tailwindcss";
import { TechStack } from './components/TechCard';

function App() {
  

  return (
    <>
      <main className='min-h-screen bg-black'>
        <h1 className="text-8xl font-bold text-blue-300 text-center">Orewa Atharva Kulkarni</h1>
        <TechStack/>
      </main>
      
    </>
  )
}

export default App
