import { useState } from "react";
import { useRouter } from "next/router";
import Layer from "../components/Layer";

const NuevoUsuario = () => {
  const router = useRouter();

  const [valores, grabaValores] = useState({
    correo: "",
    password: "",
  });

  const { signup } = useAuth();

  const { correo, password } = valores;

  const cambiar = (e) => {
    grabaValores({ ...valores, [e.target.name]: e.target.value });
  };

  const grabarfinal = async (e) => {
    e.preventDefault();

    try {
      await signup(correo, password);
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }

    //
    //        console.log(user);
    // esto anda
    //const us = firebase.registrar(correo,password)
    //console.log(us)
    //setUsuario(us)
  };

  return (
    <Layer>
      <div className="w-full max-w-xs mx-auto">
        <p className=" text-center mt-3">Nuevousuario</p>
        <br />
        {/* {dioError && (
        <div>
          <br />

          <p className=" text-red-500">Error.{msgError.code}</p>

          <br />
        </div>
      )} */}

        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={grabarfinal}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              correo
            </label>
            <input
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="correo"
              value={correo}
              onChange={(e) => cambiar(e)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => cambiar(e)}
            />

            <div className="flex items-center justify-between">
              <input
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="grabar"
              />
            </div>
          </div>

          {/* <div>usuario:{usuario}</div> */}
        </form>
      </div>
    </Layer>
  );
};

export default NuevoUsuario;
