import './App.css'
import { Button } from "./components/Button.tsx"; //elemento exportado de manera normal, se importa con llaves
import BotonBooleano from './components/ButtonBool.tsx'; //elemento exportado como default, se importa sin llaves y se puede renombrar al importarlo, como se hace en este caso, renombrando el componente a ButtonBool para evitar conflictos con el componente Button que ya existe.
import Counter from './components/Contador.tsx';
import PasswordField from './components/PasswordField.tsx';
import Starships from './components/Starwars.tsx';

function App() {
  return (
    <div>
      <div>
        <Button/>
        <Button variant="outline" />
        <Button variant="destructive" />
      </div>
      
      <div>
        <BotonBooleano />
      </div>

      <div>
        <Counter/>
      </div>

      <div>
        <PasswordField />
        <PasswordField />
      </div>

      <div>
        <Starships />
      </div>

    </div>
  );
}

export default App;