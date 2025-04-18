import './App.css'
function App() {
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <div className='home-screen'>
      <h1>Welcome, Hogwarts Class of {currentYear}!</h1>
      <h2>Here is where you can create your very own magical yearbook!</h2>
      <img src="src/assets/hogwartscrest.png"></img>
    </div>
  )
}

export default App
