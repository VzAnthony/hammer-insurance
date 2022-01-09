import { Logo } from "../../atom/Logo";

export const Navbar = () => {
  return (
    <nav className="flex space-x-36 items-center justify-between p-8 ">
      <div>
        <Logo />
      </div>
      <div className="w-full ">
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
          <li className="font-nunito text-primary text-base font-bold cursor-pointer hover:text-primary-light transition-colors">
            Contacto
          </li>
          <li className="font-nunito text-primary text-base font-bold cursor-pointer hover:text-primary-light border border-white rounded-lg py-[14px] px-[22px] transition-colors">
            Pedir Presupuesto
          </li>
          <li className="font-nunito text-primary text-base font-bold cursor-pointer hover:text-primary-light transition-colors">
            SPA
          </li>
        </ol>
      </div>
    </nav>
  );
};
