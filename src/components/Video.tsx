import ReactPlayer from "react-player";
import { next, useCurrentClassAndModule } from "../store/slices/player";
import { useAppDispatch } from "../store";

export function Video() {
    const dispatch = useAppDispatch()

    const { currentClass } = useCurrentClassAndModule()

    function handlePlayNextClass() {
        dispatch(next())
    }

    if(!currentClass) return null

    return (
        <div className="w-full bg-zinc-950 aspect-video pr-80">
            <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://www.youtube.com/watch?v=${currentClass?.id}`}
            onEnded={handlePlayNextClass}
            playing
            />
        </div>
    )
}