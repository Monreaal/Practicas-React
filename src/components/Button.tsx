interface ButtonProps {
  variant?: "primary" | "outline" | "destructive"; // El signo de interrogación indica que la propiedad es opcional
}

export const Button = ({ variant = "primary" }: ButtonProps) => { // Se establece un valor por defecto para la propiedad variant (primary) 
  let className = // Estilo primario (por defecto)
    "m-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";

  // Estilo outline
  if (variant === "outline") {
    className =
      "m-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-700 ring-inset hover:bg-gray-50";
  } else if (variant === "destructive") {
    className =
      "m-2 rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  }

  // Estilo primario (por defecto) //Todo obeto debe tener un estilo por defecto y un return para que no se rompa la app
  return (
    <button type="button" className={className}>
      Este es un botón
    </button>
  );
};