function Abilities({abilities,pokemon}){
     return (
          <div>
               {pokemon && (
                    <div className="flex flex-col items-center justify-center">
                         <div className="text-2xl mt-8 uppercase">abilities</div>
                         <div className="flex flex-wrap justify-center">
                              {abilities.map((ability) => (
                                   <div key={Math.random()} className="p-8 m-2 bg-white rounded-xl shadow-md capitalize">
                                        ability: {ability.ability.name}
                                        <div className="text-sm">
                                             type: {ability.is_hidden ? "Hidden" : "Not Hidden"}
                                             <div className="text-sm">
                                                  slot: {ability.slot === 1 ? " Primary" : ability.slot === 2 ? " Secondary" : " Tertiary"}
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               )}
          </div>
     );
}   
export default Abilities;