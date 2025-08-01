import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Abilities from './abilities.jsx';
import Stats from './stats.jsx';
function Pokemon(){
     const [url,setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
     const [pokemon,setPokemon] = useState(null);
     const [abilities,setAbilities] = useState(null);
     const [stats,setStats] = useState(null);
     const {id} = useParams();
     let Id = id.split('&')[1];
     let name = id.split('&')[0];
     useEffect(() => {
          fetch(`${url}${name}`).then((response) => response.json()).then((data) => {
               setPokemon((previous) => data);
               setAbilities((previous) => data.abilities);
               setStats((previous) => data.stats);
          });
     },[url,name]);
     return (
          <div>
               {pokemon && (
                    <div>
                         <div className="backicon">
                              <button onClick={() => {
                                   window.history.back();
                              }}
                              >
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-slate-600 hover:text-slate-800"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                   >
                                        <path d="M15 19l-7-7 7-7" />
                                   </svg>
                              </button>
                         </div>
                         <div className="bg-center pt-8 pb-8 w-[100%] rounded-b-3xl h-[100%] shadow-md text-slate-600 text-3xl bg-orange-400 font-bold text-center">
                              <div className="p-8 capitalize underline">{name}</div>
                              <div>
                                   <img
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Id}.png`}
                                        alt=""
                                        className="w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] m-auto"
                                   />
                              </div>
                         </div>
                         <div className="flex justify-evenly">
                              <Abilities pokemon={pokemon} abilities={abilities}/>
                              <Stats stats={stats}/>
                         </div>
                    </div>
               )}
          </div>
     );
};
export default Pokemon;