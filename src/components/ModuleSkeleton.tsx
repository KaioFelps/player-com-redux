import { ChevronDown, Loader, Video } from "lucide-react"

interface ModuleSkeletonProps {
    amountOfModules?: number
}

export function ModuleSkeleton({ amountOfModules = 0 }: ModuleSkeletonProps) {
    const iteratebleArray = Array.apply(null, Array(amountOfModules))

    return (
        <div>
            <div className="flex w-full items-center gap-3 bg-zinc-800 p-4 animate-pulse">
                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
                    <Loader className="animate-spin w-[2ex] h-[ex] text-zinc-400" />
                </div>

                <div className="flex flex-col gap-1 text-left">
                    <div className="text-sm h-[2ex] w-[14ex] bg-zinc-600 rounded-full animate-pulse" />
                    <span className="text-xs bg-zinc-800 h-[2ex] w-[5ex] rounded-full animate-pulse"></span>
                </div>

                <ChevronDown data-state={amountOfModules > 0 ? "open" : "close"}  className="w-4 h-4 ml-auto text-zinc-400 data-[state=open]:rotate-180 transition-all duration-200" />
            </div>

                {amountOfModules > 0 &&
                    <nav className="relative flex flex-col gap-4 p-6">
                        {iteratebleArray.map((_) => {
                            return (
                                <div className="flex items-center gap-3 text-sm text-zinc-400">
                                    <Video className="w-4 h-4 text-zinc-500" />
                                    <div className="text-md h-[2ex] w-[12ex] bg-zinc-700 rounded-full animate-pulse"></div>
                                    <div className="ml-auto font-mono text-xs text-zinc-800 h-[2ex] w-[6ex] rounded-full animate-pulse" />
                                </div>
                            )
                        })}
                    </nav>
                }
        </div>
    )
}

