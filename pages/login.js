import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layer from "../components/Layer";
import { useAuth } from "../context/authContext";

import Alert from "../components/Alert";

const Login = () => {
  const router = useRouter();

  const [error, setError] = useState();

  const [valores, grabaValores] = useState({
    email: "",
    password: "",
  });

  const { signup, login, loginWithGoogle, resetPassword } = useAuth();

  const { email, password } = valores;

  const cambiar = (e) => {
    grabaValores({ ...valores, [e.target.name]: e.target.value });
  };

  const loguearse = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!email) return setError("Ingrese un correo");

    try {
      await resetPassword(email);
      setError("Se ha enviado un email ");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Layer>
      {error && <Alert message={error} />}
      {/* <p>{error}</p>} */}
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
          onSubmit={loguearse}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              correo
            </label>
            <input
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={email}
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

            <div className="items-center justify-between">
              <input
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Aceptar"
              />
              <Link href="">
                <a
                  className="mr-8 text-[1.2rem] text-gray-400 text-sm text-  inline-block align-baseline mt-3"
                  onClick={handleResetPassword}
                >
                  Olvidaste tu contraseña?
                </a>
              </Link>
            </div>
          </div>

          {/* <div>usuario:{usuario}</div> */}
        </form>
        <div>
          <button
            className=" bg-blue-500 rounded
           text-white mt-2 px-3 py-2 hover:bg-blue-700
           focus:outline-none focus:shadow-outline"
            onClick={handleGoogleSignin}
          >
            Login con Google
          </button>
        </div>
      </div>
    </Layer>
  );
};

export default Login;
