import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { GraphQLClient, ClientContext, useQuery } from 'graphql-hooks'

const client = new GraphQLClient({
  url: 'https://beta.pokeapi.co/graphql/v1beta'
})

const POKE_QUERY = `
  query ExampleQuery($pokemonV2AbilityByPkId: Int!) {
    pokemon_v2_ability_by_pk(id: $pokemonV2AbilityByPkId) {
      generation_id
    }
  }
`

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const { loading, error, data: pokeData } = useQuery(POKE_QUERY, {
    variables: {
      pokemonV2AbilityByPkId: 2
    }
  })
  console.log({pokeData})
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
            <>
              <div key={user.id}>
                <p>{`${user.first_name} ${user.last_name}`}</p>
                <p>{user.email}</p>
                <img src={user.avatar} />
                <br />
              </div>
              <p>PKM: {pokeData?.pokemon_v2_ability_by_pk?.generation_id}</p>
            </>
          ))
        }
      </div>
  )
}

export default App
