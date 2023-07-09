import { useAppSelector } from "../store"
import { useCurrentClassAndModule } from "../store/slices/player"

export function Header() {
    const { currentClass, currentModule } = useCurrentClassAndModule()

    const courseIsLoading = useAppSelector(state => state.player.isLoading)

    return (
        <div className="flex flex-col gap-1">
            { courseIsLoading ?

            <>
            <div className="text-2xl h-[2ex] w-[12ex] rounded-full bg-zinc-500 animate-pulse" />
            <div className="text-sm h-[2ex] w-[24ex] rounded-full bg-zinc-700 animate-pulse" />
            </>

            :
            
            <>
            <h1 className="text-2xl font-bold">{currentClass?.title}</h1>
            <span className="text-sm text-zinc-400">Módulo "{currentModule?.title}"</span>
            </>

            }
        </div>
    )
}