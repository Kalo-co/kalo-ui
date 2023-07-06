export default function Navbar() {

    return (
        <div className="w-full bg-white flex justify-between items-center px-24 h-[62px] shadow">
            <div className="w-[72px] h-[19.31px] left-[171px] top-[21.85px]">
                <img className="w-[72px] h-[19.31px]" src="/images/logo.png" />
            </div>
            <ul className="flex justify-between gap-12 items-center">
                <li>
                    <img className="cursor-pointer" src="/icons/mail.svg"/>
                </li>
                <li>
                    <img className="cursor-pointer" src="/icons/bell.svg"/>
                </li>
                <li>
                    <img className="cursor-pointer" src="/icons/user.svg"/>
                </li>
            </ul>
        </div>
    )
}