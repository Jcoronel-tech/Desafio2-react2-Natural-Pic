import React, {useContext, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import CardDetalles from '../components/CardDetalles';
import Context from '../Context';

const InfoPoke = () => {
  const { id } = useParams();
  const { filterPoke, setFilterPoke} = useContext(Context);


  const getInfo = async(id) => {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const res = await fetch(`${url}/${id}`);
    const data = await res.json();
    const dataFiltrada = {
      name: data.species.name,
      src: data.sprites.other.dream_world.front_default,
      type: data.types[0].type.name,
      id: data.id,
      stats: data.stats.map((st)=>({
        name: st.stat.name,
        base: st.base_stat
      }))
    }
    setFilterPoke(dataFiltrada)
    console.log(filterPoke)
  }
  useEffect(()=>{
    getInfo(id);
  }, [id]);

  return (
    <div className='m-5'>
      <h1>Tu Pokemon seleccionado es</h1>
      <CardDetalles filterPoke={filterPoke} />
    </div>
  )
}

export default InfoPoke