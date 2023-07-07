import { MessageCircle } from "lucide-react";
import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Module } from "../components/Module";
import { useAppSelector } from "../store";

export function Player() {
    const modules = useAppSelector(state => state.player.course.modules)

    return (
        <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
            <div className="flex mx-auto w-[calc(100%_-_48px)] max-w-[1100px] flex-col gap-6">
                <div className="flex items-center justify-between">
                    <Header />

                    <button className="
                    flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white
                    hover:bg-violet-600
                    "><MessageCircle className="w-4 h-4" /> Deixar feedback</button>
                </div>

                <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
                    <section className="flex-1">
                        <Video />
                    </section>

                    <aside className="
                    w-80 absolute top-0 bottom-0 right-0 border-l border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 divide-y divide-zinc-900
                    ">
                        {modules.map((module, index) => {
                            return (
                                <Module
                                    key={module.id}
                                    moduleIndex={index}
                                    title={module.title}
                                    amountOfClasses={module.classes.length}
                                />
                            )
                        })}
                    </aside>
                </main>
            </div>
        </div>
    )
}