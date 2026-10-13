import { useState } from 'react';

function ButtonBool() {
  // 'encendido' es nuestra variable booleana (empieza en false).
  // 'setEncendido' es la función que usaremos para cambiar su valor.
  const [encendido, setEncendido] = useState(false);

  const manejarClic = () => {
    setEncendido(!encendido); 
  };

  return (
    <div>
      <button onClick={manejarClic}
      className=
      {`m-2 px-4 py-2 font-semibold  ${encendido ? 'rounded-full bg-blue-500 text-white' : ' ring-1 ring-black text-black'}`
      }>
        {/* Aquí la magia: evaluamos el booleano para cambiar el texto */}
        {encendido ? 'Apagar' : 'Encender'}
      </button>

      {/* Un truco extra: usar && para mostrar algo SOLO si es true */}
      {encendido && <p>¡El sistema está activado!</p>}
    </div>
  );
}

export default ButtonBool; //exportamos el componente, cuando se exporta como default no es necesario usar llaves al importarlo, y se puede renombrar al importarlo.