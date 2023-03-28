

import { useEffect } from "react";
import Paciente from "./Paciente"



function Pacientes({pacientes, setPaciente, eliminarPaciente}) {

  console.log(pacientes)

 


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
        <h2 className="font-black text-center text-3xl">
            Listado de pacientes
        </h2>
        <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
        </p>

        {pacientes.map((paciente) => {
        return <Paciente
         key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}
         />;
      })}
        </>
      ) : (

        <>
        <h2 className="font-black text-center text-3xl">
            No hay pacientes
        </h2>
        <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">y apareceran resultados</span>
        </p>
        </>

      )}
        

       
    </div>
  )
}

export default Pacientes