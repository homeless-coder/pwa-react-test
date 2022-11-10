import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://reqres.in/api/users').then((res) => res.json()).then((res) => setData(res.data))
  }, [])

  const getFirstPage = () => {
    fetch('https://reqres.in/api/users').then((res) => res.json()).then((res) => setData(res.data))
  }

  const getSecondPage = () => {
    fetch('https://reqres.in/api/users?page=2').then((res) => res.json()).then((res) => setData(res.data))
  }

  const getThirdPage = () => {
    fetch('https://reqres.in/api/users?page=3').then((res) => res.json()).then((res) => setData(res.data))
  }

  return (
    <div className="App">
    <button onClick={getFirstPage}>Página 1</button>
    <button onClick={getSecondPage}>Página 2</button>
    <button onClick={getThirdPage}>Página 3</button>
      {
        data.map((user) => (
          <div key={user.id}>
            <p>{`${user.first_name} ${user.last_name}`}</p>
            <p>{user.email}</p>
            <img src={user.avatar} />
            <br />
          </div>
        ))
      }
    </div>
  )
}

export default App
