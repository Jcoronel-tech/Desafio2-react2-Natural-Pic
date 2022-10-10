import { React, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';

const Pokemones = () => {
  const {info, setInfo, id, setId} = useContext(Context);
  const navigate = useNavigate();

  useEffect(()=>{
    getInfo(id);
  }, []);

  
  const getInfo = async() => {
      const url = 'https://pokeapi.co/api/v2/pokemon';
      const res = await fetch(`${url}/${id}`);
      const data = await res.json();
      setInfo(data.results);
  }
  /*Función irAPokemon para ver detalles del pokemon seleccionado */
  const irAPokemon = () => {
    if(id){
      navigate(`/pokemones/${id}`);
      setId('');
    }
    else alert ("Selecciona un pokemon")
  }

return (
  <div className='m-5'>
    <select 
      className='form-select'
      value={id}
      onChange={({target}) => setId(target.value)}
      size='lg'>
        <option value="">Selecciona un Pokemon</option>
        {info.map((e, i) => (
          <option key={i} value={e.name}>{e.name}</option>
        ))}        
    </select>
    <button className='btn btn-dark m-5' onClick={ irAPokemon }>Ver Detalle</button>
  </div>
)
}

export default Pokemones