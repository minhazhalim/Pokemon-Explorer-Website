import AllPokemons from './allPokemons.jsx';
function Home(){
     return (
          <div className='py-4 bg-slate-800'>
               <div className='relative'>
                    <img src='https://sg.portal-pokemon.com/play/resources/pokedex/img/pokedex_bg.png' alt='PokeDex Background' className='w-full min-h-[4rem]'/>
                    <h1 className='absolute md:text-3xl md:spacing top-0 left-0 right-0 bottom-0 flex items-center justify-center text-slate-700 capitalize'>pokedex</h1>
               </div>
               <AllPokemons/>
          </div>
     );
}
export default Home;