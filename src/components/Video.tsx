import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { next, useCurrentClassAndModule } from "../store/slices/player";

export function Video() {
    const dispatch = useDispatch()

    const { currentClass } = useCurrentClassAndModule()

    function handlePlayNextClass() {
        dispatch(next())
    }

    return (
        <div className="w-full bg-zinc-950 aspect-video pr-80">
            <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://www.youtube.com/watch?v=${currentClass.id}`}
            onEnded={handlePlayNextClass}
            playing
            />
        </div>
    )
}