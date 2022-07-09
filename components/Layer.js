import { useContext } from "react";
import Header from "./header";
import { useAuth } from "../context/authContext";

const Layer = ({ children }) => {
  //  const authContext = useAuth();
  const { user, usuario } = useAuth();

//  console.log(user);

  return (
    <>
      <div className="bg-slate-400">
        <div>
          {!usuario ? (
            <p>no esta logeado</p>
          ) : (
            <p>Está logueado {usuario.email}</p>
          )}
        </div>
      </div>

      <Header  />

      {children}
    </>
  );
};

export default Layer;
