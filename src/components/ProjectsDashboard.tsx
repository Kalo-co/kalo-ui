import { projects } from "@/data/projects";
import DeliveryDetails from "./DeliveryDetails";
import ProjectCard from "./ProjectCard";

const ProjectsDashboard = () => {
    return (
        <div className='grid gap-6 px-14 py-8 bg-white rounded-md max-h shadow-2xl'>
            <Header />
            <ProjectsList />
        </div>
    )
};

function Header() {
    return (
        <div className="grid md:flex justify-between">
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
}

function ProjectsList() {
    return (
        <div className="grid md:flex justify-between gap-8">
            <div>
                <div className="grid lg:grid-cols-2 gap-8">
                    {
                        projects.map((project) => <ProjectCard name={project.name} bgColor={project.bgColor} progress={project.progress} />)
                    }
                </div>
            </div>

            <div className="grid gap-4 max-h-[400px] overflow-y-scroll">
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
}

export default ProjectsDashboard;