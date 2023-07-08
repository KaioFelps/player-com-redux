import ReactPlayer from "react-player";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { next } from "../store/slices/player";

export function Video() {
    const dispatch = useDispatch()

    const currentClass = useAppSelector(state => {
        const { currentClassIndex, currentModuleIndex } = state.player

        const currentClass = state.player.course.modules[currentModuleIndex].classes[currentClassIndex]

        return currentClass
    })

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