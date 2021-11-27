import React from 'react';
import homeIcon from '../icons/icons8-rick-sanchez.svg'

export default function Header(){
  return (
    <section>
      <header>
        <div>
          <img src={ homeIcon } alt="icons8-rick-sanchez.svg" />
        </div>
        <div>
          <h1>Barra de  Navegação</h1>
        </div>
      </header>
    </section>
  );
}
