const Accordeon = (props: { title: string }) => (
    <div className="border-2 rounded-md px-5 py-4 cursor-pointer">
        <div className="flex justify-between items-center">
            <p className="font-semibold">{props.title}</p>
            <img src="/icons/chevron.svg" />
        </div>
    </div>
)

export default Accordeon;