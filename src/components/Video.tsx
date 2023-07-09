import ReactPlayer from "react-player";
import { next, useCurrentClassAndModule } from "../store/slices/player";
import { useAppDispatch, useAppSelector } from "../store";
import { Loader } from "lucide-react";

export function Video() {
    const dispatch = useAppDispatch()

    const { currentClass } = useCurrentClassAndModule()
    const isCourseLoading = useAppSelector(state => state.player.isLoading)

    function handlePlayNextClass() {
        dispatch(next())
    }

    return (
        <div className="w-full bg-zinc-950 aspect-video pr-80">
            {isCourseLoading ?
            <div className="flex h-full items-center justify-center">
                <Loader className="w-6 h-6 text-zinc-400 animate-spin"/>
            </div>

            :

            <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://www.youtube.com/watch?v=${currentClass?.id}`}
            onEnded={handlePlayNextClass}
            playing
            />
            }
        </div>
    )
}