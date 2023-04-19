import React from 'react'
import './index.scss'
import { Success } from './components/Success';
import { Users } from './components/Users';

function App() {
  const [users, setUsers] = React.useState([])
  const [invites, setInvites] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)
  const [searchValue, setSearchValue] = React.useState('')

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        setUsers(json)
      })
      .catch(err => {
        console.warn(err)
      })
      .finally(() => setLoading(false))
  }, [])

  const onChangeSearchValue = (event) => {
    console.log(event)
    setSearchValue(event.target.value)
  }

  return (
    <div className="App">
      <Users 
        onChangeSearchValue={onChangeSearchValue} 
        items={users} 
        searchValue={searchValue} 
        isLoading={isLoading}
        />
    </div>
  );
}

export default App;
