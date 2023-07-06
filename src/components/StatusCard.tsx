import Accordeon from "./Accordeon";

const StatusCard = () => (
    <div className="grid grid-cols-2 gap-8 px-14 py-8 bg-white rounded-md max-h shadow-2xl">
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

        <div className="grid justify-center border rounded-xl shadow-xl">
            <div className="flex items-center px-10 border-b-2  gap-4">
                <img className="rounded-full object-cover w-[63px] h-[63px]" src="/images/project-manager.png" />
                <div>
                    <p className="font-semibold text-sm">Aaron Díaz. Project Manager</p>
                    <p className="text-xs">Nuestro equipo se encuentra trabajando en la codificación de un prototipo hecho en Figma para UPSIDE. El prototipo da una guía a los programadores para hacer funcional un plugin que resuma de manera efectiva la información tomada</p>
                </div>
            </div>
            <div className="px-10 py-4 grid gap">
                <p className="font-semibold">Objetivos generales:</p>
                <ul className="list-disc px-8 text-sm">
                    <li>Hacer funcional el sistema de reconocimiento de voz</li>
                    <li>Apoyarse en figma de modo en que la construcción del software siga su linea gráfica</li>
                    <li>Entregar el código funcional para <b>Julio 8</b></li>
                </ul>
            </div>

            <div className="px-10 text-sm">
                <p>El 65% de este proyecto está listo</p>
                <div className="mt-1 w-full border h-[9px] rounded-lg overflow-hidden border-blue-600">
                    <div className="w-4/6 bg-blue-500 h-full"></div>
                </div>
            </div>
        </div>
    </div>
)

export default StatusCard;