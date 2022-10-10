import React, {useContext} from 'react'
import Context from '../Context';

const CardDetalles = () => {
    const { filterPoke } = useContext(Context);

return (
    <div className="card m-5">
        <div className='row' key={filterPoke.id}>
            <div className="col-md-4">
                <img className="card-img-top w-50   " src={filterPoke.src} alt="img"/>
            </div>
            <div className="col-md-8">
                <div className='card-body'>
                    <h2 className="card-title">{filterPoke.name}</h2>
                    <h5 className="card-text">#{filterPoke.id}</h5>
                    <p className="card-text">
                    {filterPoke.stats?.map((s, i)=>(
                        <li key={i}>
                        {s.name}:{s.base}
                        </li>
                    ))}
                    </p>
                    <p className="card-text">
                        Type: {filterPoke.type}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardDetalles
