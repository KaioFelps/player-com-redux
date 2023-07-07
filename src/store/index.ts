import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux"



export const store = configureStore({
    reducer: {},
})

// tipo do estado
export type RootState = ReturnType<typeof store.getState>

// adicionar tipagem para o app selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
