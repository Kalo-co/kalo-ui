import ProjectCard from "@/components/ProjectCard"
import DeliveryDetails from "@/components/DeliveryDetails";
import { projects } from "@/data/projects";

export default function Home() {

  const Header = () => (
    <div className="flex  justify-between">
      <div className="grid gap-2 lg:max-w-[412px]">
        <h1 className='text-2xl font-bold'>Dashboard de proyectos</h1>
        <p className='text-sm text-[#A4A4A4]'>Explora los proyectos en los que estás trabajando y revisa el estado en el que se encuentran</p>
      </div>

      <div>
        <button className="bg-[#F1F1F1] px-5 py-2 text-sm flex gap-4 items-center">
          Ordenar proyectos <img src="/icons/v.svg" />
        </button>
      </div>
    </div>
  )

  const ProjectsList = () => (
    <div className="flex gap-8">
      <div>
        <div className="grid lg:grid-cols-2 gap-8">
          {
            projects.map((project) => <ProjectCard name={project.name} progress={project.progress} />)
          }
        </div>
      </div>

      <div className="grid gap-4 max-h-[400px] overflow-y-auto">
        <div>
          <p className="text-lg font-bold">Entregas pendientes</p>
          <p className="text-[#A4A4A4] text-sm">Revisa las fechas cercanas para subir tus entregables</p>
        </div>

        <div className="grid gap-6">
          {
            projects.map((project) => <DeliveryDetails title={project.name} deliverys={project.deliverys[0].articles} />)
          }
        </div>
      </div>
    </div>
  )

  const Accordeon = (props: { title: string }) => (
    <div className="border-2 rounded-md px-5 py-4">
      <div className="flex justify-between items-center">
        <p className="font-semibold">{props.title}</p>
        <img src="/icons/chevron.svg"/>
      </div>
    </div>
  )

  return (
    <main className="grid gap-10 items-center justify-between p-16 min-h-screen">
      <div className='grid gap-4 px-14 py-8 bg-white rounded-md max-h shadow-2xl'>
        <Header />
        <ProjectsList />
      </div>

      <div className="grid grid-cols-2 gap-4 px-14 py-8 bg-white rounded-md max-h shadow-2xl">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <p className="text-xl font-bold">Status del proyecto</p>

            <div className="text-[#A4A4A4] text-sm">
              <p>Empresa: Upside</p>
              <p>Project Manager: Antonio Savedra</p>
            </div>
          </div>

          <div className="grid gap-4">
            <Accordeon title="Bitácora de avances" />
            <Accordeon title="Entregables" />
            <Accordeon title="Gestión de tiempo" />
          </div>
        </div>
      </div>
    </main>
  )
}
