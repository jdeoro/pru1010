import React from "react";
import Link from "next/link";
import { useAuth } from "../context/authContext";

const Header = () => {
  const { user , usuario, logout } = useAuth();

  //console.log("usuario", user.login);
  return (
    <div>
      <nav className=" md:mt-5 ml-2">
        <Link href="/">
          <a className="mr-8 text-[1.2rem] text-gray-400">Inicio</a>
        </Link>
        <Link href="/populares">
          <a className="mr-8 text-[1.2rem] text-gray-400">Populares</a>
        </Link>

        <Link href="nuevoproducto">
          <a className="mr-8 text-[1.2rem] text-gray-400">Nuevo Producto</a>
        </Link>

        <Link href="nuevousuario">
          <a className="mr-8 text-[1.2rem] text-gray-400">Nuevo usuario</a>
        </Link>

        {!usuario ? (
          <Link href="/login">
            <a className="mr-8 text-[1.2rem] text-gray-400">Login</a>
          </Link>
        ) : (
          <Link href="">
            <a onClick={logout} className="mr-8 text-[1.2rem] text-gray-400">
              Logout
            </a>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
