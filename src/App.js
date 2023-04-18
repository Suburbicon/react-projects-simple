import { useState } from 'react'

function App() {
  const [ count, setCount ] = useState(0)

  const onPlus = () => {
    setCount(count + 1)
  }

  const onMinus = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик</h2>
        <h1>{ count }</h1>
        <button onClick={onMinus} className="minus">- минус</button>
        <button onClick={onPlus} className="plus">+ плюс</button>
      </div>
    </div>
  );
}

export default App;
