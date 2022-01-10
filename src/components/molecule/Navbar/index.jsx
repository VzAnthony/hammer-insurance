import { useState } from "react";
import { Logo } from "../../atom/Logo";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" flex justify-center relative p-8 ">
      <div className="">
        <Logo />
      </div>
      <div
        className="fixed right-2 sm:right-12 lg:hidden"
        onClick={() => setToggle(true)}
      >
        <img src="/assets/static/icons/menu.png" alt="Menu" />
      </div>
      <div
        className={`bg-primary z-10 h-screen fixed transition-all lg:hidden  ${
          toggle ? "translate-x-0" : "translate-x-full"
        } top-0 right-0 w-full md:w-1/2`}
      >
        <p
          className="font-nunito font-black  w-10 h-10 text-center py-2 rounded-full top-3 right-3 bg-primary-light fixed"
          onClick={() => setToggle(false)}
        >
          {">"}
        </p>
        <ol className="flex flex-col justify-evenly text-center h-full text-white font-nunito">
          <li className="hover:underline cursor-pointer">Servicios</li>
          <li className="hover:underline cursor-pointer">Pagos</li>
          <li className="hover:underline cursor-pointer">Oficinas</li>
          <li className="hover:underline cursor-pointer">Blog</li>
          <li className="hover:underline cursor-pointer">Nosotros</li>
          <li className="hover:underline cursor-pointer">Contacto</li>
          <li className="hover:underline cursor-pointer">Pedir Presupuesto</li>
          <li className="hover:underline cursor-pointer">SPA</li>
        </ol>
      </div>
      <div className="hidden lg:block w-full ">
        <ol className="flex  justify-evenly items-center  ">
          <li className="font-nunito text-primary text-base font-bold cursor-pointer hover:text-primary-light transition-colors">
            Servicios
          </li>
          <li className="font-nunito text-primary text-base font-bold cursor-pointer hover:text-primary-light transition-colors">
            Pagos
          </li>
          <li className="font-nunito text-primary text-base font-bold cursor-pointer hover:text-primary-light transition-colors">
            Oficinas
          </li>
          <li className="font-nunito text-primary text-base font-bold cursor-pointer hover:text-primary-light transition-colors">
            Blog
          </li>
          <li className="font-nunito text-primary text-base font-bold cursor-pointer hover:text-primary-light transition-colors">
            Nosotros
          </li>
          <li className="font-nunito text-white text-base font-bold cursor-pointer hover:text-primary-light transition-colors">
            Contacto
          </li>
          <li className="font-nunito text-white text-base font-bold cursor-pointer hover:text-primary-light border border-white rounded-lg py-[14px] px-[22px] transition-colors">
            Pedir Presupuesto
          </li>
          <li className="font-nunito text-white text-base font-bold cursor-pointer hover:text-primary-light transition-colors">
            SPA
          </li>
        </ol>
      </div>
    </nav>
  );
};
