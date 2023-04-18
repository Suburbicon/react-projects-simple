import React from 'react'
import './main.css'

function App() {
  const [open, setOpen] = React.useState(false)
  const [buttonText, setButtonText] = React.useState('Show me')
  
  const handleButton = () => {
    setOpen(!open)
  }

  const changeText = () => {
    setButtonText(open ? 'Hide me' : 'Show me')
  }

  React.useEffect(() => {
    changeText()
  })

  return (
    <div className="App">
      <button onClick={handleButton}>{buttonText}</button>
      {
        open && (
          <div className={`animated ${open && 'show'}`}>
            Hello world
          </div>
        )
      }
    </div>
  );
}

export default App;
