import React from "react";
import { ServiceCard } from "../../atom/ServiceCard";

export const ServicesList = () => {
  const services = [
    {
      name: "Auto",
      description:
        "Multiples opciones y descuentos, SR-22. Te ofrecemos la cobertura perfecta. ¡siempre a tu lado cuando nos necesites!",
      urlImage: "/assets/static/images/car.png",
    },
    {
      name: "Hogar",
      description:
        "Protege tu casa, propiedad en alquiler, casa móvil o seguro de inquilino. Elige entre múltiples opciones.",
      urlImage: "/assets/static/images/house.png",
    },
    {
      name: "Negocio",
      description:
        "Asegura tu negocio, tus trabajadores, y cualquier vehículoculo commercial. General Liability, Workers Comp, Bonds etc.",
      urlImage: "/assets/static/images/ice-cream-shop.png",
    },
    {
      name: "Placas",
      description:
        "Hammer renueva las placas y calcomanías de su auto, además de gestionar el cambio de propietario y demás tramitaciones.",
      urlImage: "/assets/static/images/enmascarar.png",
    },
  ];
  return (
    <div className="flex justify-center w-full gap-24 mt-10 ">
      {services.map((service) => (
        <ServiceCard key={service.name} {...service} />
      ))}
    </div>
  );
};
