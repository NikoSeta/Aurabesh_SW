import './cards.css';
import data from '../../../DB/abc.json';

function Cards() {
  const letras = {data}
    return ( 
      <>
        <div className='contenedor'>
        {letras.data.map( e => {
            return (
              <div className="cards">
                <div className='main'>
                  <div key={e.id}>
                    
                    <p className='letra'>{e.letra}</p>
                  </div>
                </div>
              </div>
            );
        })}
        </div>
      </>
     );
}

export default Cards;