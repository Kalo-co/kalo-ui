type Props = { name: string, progress: string}
const ProjectCard = (props: Props) => (
    <div className={`relative w-[267.10px] h-[133.64px] cursor-pointer hover:scale-105
      bg-gradient-to-l from-indigo-400 to-sky-600 rounded-lg shadow-md`}
    >
        <div className="w-full absolute bottom-0 px-8 py-4 text-white">
            <p className="font-semibold text-lg">{props.name}</p>
            <div className="w-full border rounded-md mt-2 h-[8px]">
                <div className={`bg-white h-full`} style={{ width: props.progress }}></div>
            </div>
        </div>
    </div>
)

export default ProjectCard;
