import { configureStore, createSlice } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

const todoSlice = createSlice({
    name: "todo",
    initialState: ["Fazer tereré", "Estudar Redux"],
    reducers: {
        add: (state, action) => {
            state.push(action.payload.newTodo)
        }
    }
})

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    },
})

export const {add} = todoSlice.actions

// tipo do estado
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// adicionar tipagem para o app selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch