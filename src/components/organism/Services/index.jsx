import { ServicesList } from "../../molecule/ServicesList";

export const Services = () => {
  return (
    <section>
      <p className="text-center font-nunito text-primary-light text-xl font-normal ">
        Servicios
      </p>
      <p className="text-center font-nunito text-primary text-[32px] font-black ">
        Tu agente cercano: en Hammer insurance nadie se queda atrás
      </p>
      <p className=" text-center font-nunito text-primary text-xl font-normal">
        En Hammer Insurance hablamos tu idioma, conocenos tu comunidad, somos
        vecinos.
      </p>
      <ServicesList />
      <div className="text-center">
        <button className="text-nunito text-primary-light py-3 px-6 border border-primary-light rounded-lg mt-20 mb-24 hover:bg-primary-light hover:text-white transition-colors">
          Ver todos los servicios {" >"}
        </button>
      </div>
    </section>
  );
};
