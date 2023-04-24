import React from 'react';
import './index.scss';
import { Collection } from './Collection';

const categories = [
  { "name": "Все" },
  { "name": "Море" },
  { "name": "Горы" },
  { "name": "Архитектура" },
  { "name": "Города"  }
]

function App() {
  const [collections, setCollections] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [categoryId, setCategoryId] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1)

  React.useEffect(() => {

    setIsLoading(true)

    const category = categoryId ? `category=${categoryId}` : ''

    fetch(`https://64454d46914c816083cb75d0.mockapi.io/photo_collections?page=${page}&limit=3&${category}`)
      .then(res => res.json())
      .then(json => {
        setCollections(json)
      })
      .catch(err => {
        console.warn(err)
        alert('Error during get data')
      })
      .finally(() => setIsLoading(false))
  }, [categoryId, page])

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {categories.map((obj, i) => 
            <li className={categoryId === i ? 'active' : ''} onClick={() => setCategoryId(i)} key={obj.name}>{obj.name}</li>
          )}
        </ul>
        <input value={searchValue} onChange={e => setSearchValue(e.target.value)} className="search-input" placeholder="Поиск по названию" />
      </div>
      <div className="content">
        {isLoading ? (
          <h2>Идет загрузка...</h2>
        ) : collections
          .filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
          .map((obj, index) => (
            <Collection
              key={index}
              name={obj.name}
              images={obj.photos}      
            />
        ))}
      </div>
      <ul className="pagination">
        {
          [...Array(4)].map((_, i) => (
            <li onClick={() => setPage(i + 1)} className={page === (i + 1) ? 'active' : ''}>{i + 1}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;