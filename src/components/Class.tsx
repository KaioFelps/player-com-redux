import { PlayCircle, Video } from "lucide-react";

interface ClassProps {
    title: string;
    duration: string;
    isCurrentClass?: boolean;
    onPlay:() => void;
}

export function Class({duration, title, onPlay, isCurrentClass = false}: ClassProps) {
    return (
        <button
            data-active={isCurrentClass}
            className="
            flex items-center gap-3 text-sm text-zinc-400 group
            data-[active=true]:text-emerald-600 data-[active=true]:font-bold
            enabled:hover:text-zinc-300
            "
            disabled={isCurrentClass}
            onClick={onPlay}
        >
            {isCurrentClass ?
            <PlayCircle className="w-4 h-4 text-emerald-700"  />
            :
            <Video className="w-4 h-4 text-zinc-500" />
            }
            <span>{title}</span>
            <span className="ml-auto font-mono text-xs text-zinc-500 group-data-[active=true]:text-zinc-400">{duration}</span>
        </button>
    )
}