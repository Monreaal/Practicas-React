import { useEffect, useState } from "react";

export default function Counter() {
  //     get    set
  const [count, setCount] = useState(0);
  
  useEffect(() => { //useEffect se ejecuta cada vez que el componente se renderiza, y en este caso, cada vez que el estado count cambia, se ejecuta la función que actualiza el título del documento con el valor actual del contador.
    document.title = `Contador: ${count}`; //Modifica el título del documento (lo que aparece en la pestaña del navegador) para reflejar el valor actual del contador. Cada vez que el estado count cambia, este efecto se ejecuta y actualiza el título.
  }, [count]); // count es la dependencia del efecto, lo que significa que el efecto se ejecutará cada vez que count cambie. Si no se proporcionara esta dependencia, el efecto se ejecutaría en cada renderizado del componente, lo cual no es necesario en este caso.

  function increment() {
    setCount((prev) => prev + 1); //se utiliza setCount con una función que recibe el valor anterior (prev) y le suma 1, para asegurarse de que se actualice correctamente incluso si hay múltiples actualizaciones en cola.
  }

  function decrement() {
    setCount((prev) => prev - 1); //prev representa el valor anterior del estado count (lo que ves en el contador)("(prev) => prev - 1" es como si fuera "x = x - 1").
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="max-w-md mx-auto p-8 my-10 bg-white rounded-lg shadow-sm">
      <div className="mb-8">
        <h1 className="text-2xl font-normal text-gray-800">Contador</h1>
      </div>

      <div className="flex items-center justify-center py-10">
        <span className="text-6xl font-light text-gray-800">{count}</span>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-6">
        <button onClick={decrement} className="flex items-center justify-center py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
          <span className="text-gray-700">Restar</span>
        </button>

        <button onClick={reset} className="flex items-center justify-center py-3 px-4 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors cursor-pointer">
          <span className="text-white">Reiniciar</span>
        </button>

        <button onClick={increment} className="flex items-center justify-center py-3 px-4 bg-orange-500 hover:bg-orange-600 rounded-md transition-colors cursor-pointer">
          <span className="text-white">Sumar</span>
        </button>
      </div>
    </div>
  );
}