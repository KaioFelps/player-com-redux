import { useCurrentClassAndModule } from "../store/slices/player"

export function Header() {
    const { currentClass, currentModule } = useCurrentClassAndModule()

    if(!currentClass || !currentModule) return null

    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">{currentClass.title}</h1>
            <span className="text-sm text-zinc-400">Módulo "{currentModule.title}"</span>
        </div>
    )
}