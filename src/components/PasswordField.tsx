import { useState } from "react";

export default function PasswordField() {
    const [showPassword, setShowPassword] = useState(false);
    
    const mostrarContraseña = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <div className="w-full max-w-md m-10">
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'} // si showPassword es true, el tipo de input será 'text', mostrando la contraseña; si es false, será 'password', ocultándola.
          //como es false de manera predeterminada, la contraseña estará oculta al inicio, recibe el estado de showPassword, que es false al inicio, y cambia a true cuando se hace clic en el botón "Mostrar contraseña", lo que hace que el input cambie a tipo 'text' y muestre la contraseña.
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-200"
          placeholder="Contraseña"
        />
        <button onClick={mostrarContraseña}
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors"
        >
          Mostrar contraseña
        </button>
      </div>
    </div>
  );
}