import * as Collapsible from "@radix-ui/react-collapsible"
import { ChevronDown } from "lucide-react";
import { Class } from "./Class";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { play } from "../store/slices/player";

interface ModuleProps {
    title: string;
    amountOfClasses: number;
    moduleIndex: number
}

export function Module({amountOfClasses, moduleIndex, title}: ModuleProps) {
    const dispatch = useDispatch()
    
    const { currentClassIndex, currentModuleIndex } = useAppSelector((state) => {
        const { currentModuleIndex, currentClassIndex } = state.player
        return {
            currentClassIndex,
            currentModuleIndex
        }
    })

    const classes = useAppSelector((state) => {
        return state.player.course?.modules[moduleIndex].classes
    })
    
    return (
        <Collapsible.Root className="group" defaultOpen={currentModuleIndex === moduleIndex}>
            <Collapsible.Trigger className="
            flex w-full items-center gap-3 bg-zinc-800 p-4
            ">
                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
                    {moduleIndex + 1}
                </div>

                <div className="flex flex-col gap-1 text-left">
                    <strong className="text-sm">{title}</strong>
                    <span className="text-xs text-zinc-400">{amountOfClasses} aulas</span>
                </div>

                <ChevronDown className="w-4 h-4 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-all duration-200" />
            </Collapsible.Trigger>

            <Collapsible.Content>
                <nav className="relative flex flex-col gap-4 p-6">
                    {classes && classes.map((currentClass, classIndex) => {
                        const isCurrentClass = currentModuleIndex === moduleIndex && currentClassIndex === classIndex

                        return (
                            <Class
                                key={currentClass.id}
                                title={currentClass.title}
                                duration={currentClass.duration}
                                onPlay={() => dispatch(play([moduleIndex, classIndex]))}
                                isCurrentClass={isCurrentClass}
                            />
                        )
                    })}
                </nav>
            </Collapsible.Content>
        </Collapsible.Root>
    )
}