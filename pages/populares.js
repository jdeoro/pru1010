import React from "react";
import Layer from "../components/Layer";
import { useAuth } from "../context/authContext";

const Populares = () => {
  const { usuario } = useAuth();

  return (
    <Layer>
      {usuario === null ? (
        <div>
          <p>Debe iniciar sesion</p>
        </div>
      ) : (
        <div className=" bg-slate-400 h-max">
          <p>Populares</p>
        </div>
      )}
    </Layer>
  );
};

export default Populares;
