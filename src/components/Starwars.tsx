import { useEffect, useState } from "react";

export default function Starships() {
    const [loading,setLoading] = useState(true);
    const [starships, setStarships] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        
        async function fetchData() {
            try{
                const response = await fetch("https://swapi.dev/api/starships/");
            const responsedata = await response.json();
            console.log(responsedata);
            setLoading(false);
            setStarships(responsedata.results); //.results es un array de objetos que contiene la información de las naves espaciales
            }catch (error) {
                // Imprimir error en la consola para depuración
                console.error("Error al cargar las naves espaciales:", error);
                setLoading(false); // hacemos que setLoading sea false para que el spinner desaparezca y se muestre el mensaje de error
                setError("Ocurrió un error al cargar las naves espaciales."); // Establecer un mensaje de error para mostrar al usuario
            }
            
        }
        
        
        fetchData();
    
    },[]);
    // Si loading es true, se muestra un spinner
    if (loading) {
        return (
        <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
            <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
            </div>
        </div>
        );
    }

    if(error) {
        return (
            <div className="min-h-screen bg-gray-900 p-8 flex justify-center items-center">
                <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-2">¡Algo salió mal!</h2>
                <p>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-4">Naves Espaciales</h1>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 min-w-90">
                {/* Abrimos llaves para poder escribir JavaScript dentro de nuestro HTML */}
                {starships.map((starship: any) => ( //any significa
                
                // Por cada 'starship', devolvemos una etiqueta de lista <li>
                // React siempre pide una propiedad 'key' única cuando creas listas
                <li key={starship.name} className="grid grid-cols-[1fr_30%] bg-white border border-gray-300 py-3 px-5 rounded-2xl relative w-full h-32 shadow-sm hover:shadow-md transition-shadow cursor-pointer"> 
                    {/*imprimimos propiedades de la nave espacial*/}
                    <div className="flex flex-col gap-1 w-2/3">
                        <span><span className="font-bold">Name: </span>{starship.name}</span>
                        <span><span className="font-bold">Model: </span>{starship.model}</span>
                    </div>
                    {/* min-w-0 ayuda a que el truncate funcione correctamente dentro de flex */}
                    <div className="min-w-0 flex flex-col gap-1 justify-center items-end ">
                        <div className="text-lg font-bold py-2 px-4 truncate border border-gray-300 rounded-2xl max-w-[140px]">
                            ${starship.cost_in_credits}
                        </div>
                    </div>
                    
                </li>
                    
                ))}
            </ul>
        </div>
    );

}