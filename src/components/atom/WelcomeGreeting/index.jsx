export const WelcomeGreeting = () => {
  return (
    <div className="pt-28 pr-16">
      <p className="font-nunito text-primary-light text-xl mb-[9px]">
        Seguro integral en el que puedes confiar
      </p>
      <h1 className="font-nunito text-primary text-5xl font-black mb-6">
        Confía en Hammer <br />
        Insurance ¡somos vecinos!
      </h1>
      <p className="font-nunito text-primary text-lg mb-11">
        Calidad en el rato al cliente y los mejores precios del mercado,
        <br /> amplias coberturas y facilidad en los pagos.
      </p>
      <div>
        <button className="font-nunito bg-primary-light text-white font-semibold rounded-lg py-[15.52px] px-[10px] w-[195px] mr-6  hover:bg-primary transition-colors">
          Servicios
        </button>
        <button className="font-noto border-2 border-primary rounded-lg text-primary font-semibold py-[15.52px] px-[10px] w-[210px]  hover:bg-primary hover:text-white transition-colors">
          Solicitar Presupuesto
        </button>
      </div>
    </div>
  );
};
