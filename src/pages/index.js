import Card from "./components/card"

export async function getStaticProps(){

  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  //add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return{
    props: {
      pokemons: data.results
    },
  }

}

export default function Home({pokemons}) {
  return (
    <main className="p-6">
      <div className="my-9 text-center">
      <h1 className="text-4xl font-semibold">Poke<span className="text-4xl font-semibold text-red-600">Next</span></h1>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
    </main>
  )
}
