import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { player } from "./slices/player"

export const store = configureStore({
    reducer: {
        player,
    },
})

// tipo do estado
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// adicionar tipagem para o app selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch