import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
const AllPokemons = () => {
     const [pokemons,setPokemons] = useState([]);
     const [data,setData] = useState(null);
     const [page,setPage] = useState(0);
     const [url,setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
     useEffect(() => {
          fetch(url).then((response) => response.json()).then((data) => {
               setPokemons(data.results);
               setData(data);
          });
     },[url]);
     const handlePreviousClick = () => {
          if(data.previous) setUrl(data.previous);
          setPage((previous) => previous - 1);
     };
     const handleNextClick = () => {
          setPage((previous) => previous + 1);
          setUrl(data.next);
     };
     return (
          <>
               <div className="flex justify-center">
                    {data?.previous && (
                         <button className="previous">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   className="h-8 w-8 text-slate-400 hover:text-white"
                                   fill="none"
                                   viewBox="0 0 24 24"
                                   stroke="currentColor"
                                   onClick={handlePreviousClick}
                              >
                                   <path d="M15 19l-7-7 7-7"/>
                              </svg>
                         </button>
                    )}
                    <button className="next">
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-slate-400 hover:text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              onClick={handleNextClick}
                         >
                              <path d="M9 5l7 7-7 7"/>
                         </svg>
                    </button>
               </div>
               <div className="grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {pokemons.map((pokemon,index) => (
                         <Link
                              to={`/pokemon/${pokemon.name}&${index + 1 + 20 * page}`}
                              className="w-full text-align-center"
                         >
                              <div
                                   key={pokemon.name}
                                   className="bg-center max-w-[20rem] background-size min-h-[20rem] sm:h-[18rem]  w-[100%] rounded-md shadow-md text-white font-bold text-center"
                                   style={{backgroundImage: "url('https://sg.portal-pokemon.com/play/resources/pokedex/img/list_pokemon_bg.png')"}}
                              >
                                   <div className="ml-20">
                                        <img
                                             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1 + 20 * page}.png`}
                                             alt=""
                                             className="w-[7rem] h-[7rem] sm:w-[9rem] sm:h-[9rem]"
                                        />
                                   </div>
                                   <div className="p-15 text-xl capitalize">{pokemon.name}</div>
                              </div>
                         </Link>
                    ))}
               </div>
          </>
     );
}
export default AllPokemons;