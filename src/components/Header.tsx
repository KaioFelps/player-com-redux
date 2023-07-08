import { useAppSelector } from "../store"

export function Header() {
    const { currentClass, currentModule } = useAppSelector(state => {
        const { currentClassIndex, currentModuleIndex } = state.player
        return {
            currentModule: state.player.course.modules[currentModuleIndex],
            currentClass: state.player.course.modules[currentModuleIndex].classes[currentClassIndex]
        }
    })

    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">{currentClass.title}</h1>
            <span className="text-sm text-zinc-400">Módulo "{currentModule.title}"</span>
        </div>
    )
}