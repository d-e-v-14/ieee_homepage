import ReactLogo from './assets/react.svg'

function App() {
  return (
    <div className="flex justify-center items-center min-w-full min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-xl text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to IEEE-CS</h1>
        <img src={ReactLogo} alt="React Logo" className="h-24 mx-auto pb-4" />
        <p className="text-lg opacity-90">
          This is a basic Vite + Tailwind Project
        </p>
      </div>
    </div>
  );
}

export default App;