import Image from "next/image";

type Props = { name: string, progress: string, bgColor: string}
const ProjectCard = (props: Props) => {
    console.log(props);
    return (<div className={`relative w-[267.10px] h-[133.64px] cursor-pointer hover:scale-105
       rounded-lg shadow-md`} style={{ backgroundImage: props.bgColor }}
    >
        <div className="w-full absolute bottom-0 px-8 py-4 text-white">
            <Image className="absolute bottom-0 right-0 opacity-20" src="/images/kalo.png" width={110} height={150} alt="kalo" />
            <p className="font-semibold text-lg">{props.name}</p>
            <div className="w-full border rounded-md mt-2 h-[8px]">
                <div className={`bg-white h-full`} style={{ width: props.progress }}></div>
            </div>
        </div>
    </div>
)
}

export default ProjectCard;
