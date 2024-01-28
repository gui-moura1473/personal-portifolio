import PaginaInicial from "paginas/PaginaInicial";
import { useState } from "react";

function App() {

  const [temaDarkAtivo, setToggleTemaDark] = useState(false);

  return (
    <div className={temaDarkAtivo ? 'container dark-mode' : 'container'}>
      <PaginaInicial setToggleTemaDark={setToggleTemaDark} />
    </div>
  );
}

export default App;
