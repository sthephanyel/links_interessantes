export default function Loading(){
    return(
        // <h1 className="text-3xl text-red-500">Carregando...</h1>
        <div className="flex flex-col w-full h-[85vh] justify-start items-center">
            <div className="flex flex-row gap-2">
                <div className="w-8 h-8 rounded-full bg-foreground animate-bounce [animation-delay:.7s]"></div>
                <div className="w-8 h-8 rounded-full bg-foreground animate-bounce [animation-delay:.3s]"></div>
                <div className="w-8 h-8 rounded-full bg-foreground animate-bounce [animation-delay:.7s]"></div>
            </div>
        </div>
    )
}