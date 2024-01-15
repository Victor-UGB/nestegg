export default function Pill1({
    icon,
    title
} : {
    icon: React.ReactNode,
    title: string
}){
    return(
        <button className="text-xs items-center font-semibold bg-gradient-to-br flex py-1 rounded-3xl px-2 border-[#8e8e8e] from-[#9fe6ff] to-[#09BEF2] text-white">
            <div className="pr-2">{icon}</div>
            <div>{title}</div>
        </button>
    )
}