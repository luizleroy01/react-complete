import React from "react";

function Container({ children }) {
  //componente com a propriedade children que abraça outros elementos
  return (
    <div>
      <h1>Este é o conteúdo children</h1>
      {children}
    </div>
  );
}

export default Container;
