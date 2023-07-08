import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "..";
import { api } from "../../lib/axios";

interface Course {
  id: number
  modules: Array<{
    id: number
    title: string
    classes: Array<{
      id: string
      title: string
      duration: string
    }>
  }>
}

export interface PlayerState {
  course: Course | null
  currentModuleIndex: number
  currentClassIndex: number
}

const initialState: PlayerState = {
  course: null,
  currentModuleIndex: 0,
  currentClassIndex: 0,
}

/*
* redux thunk
* é uma forma de ter uma action assíncrona, pois o redux não perimte colocarmos um async dentro de um simples action do redux
* então, thunk é apenas uma forma de termos uma action assíncrona
*
* para disparar um thunk, precisa usar o useAppDispatch (criado no index.ts que cria a store)
* isso acontece pois o thunk não é nativo do redux e usa uma biblioteca antiga do redux (redux thunk)
*/
export const loadCourse = createAsyncThunk(
  // nome da action. É exatamente assim que aparecerá no redux devtool, pois ele não herda o nome do slice automáticamente como as actions do reducer
  // ao invés de "prepor", ele "sufixa" com o estado da requisição (player/load/[pending, fulfilled, failure])
  "player/load",

  // o retorno dessa função é o que irá chegar para o fullfilled em seu payload
  async () => {
      const res = await api.get("/courses/1")
      return res.data
  }
)

export const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
      play: (state, action: PayloadAction<[number, number]>) => {
        state.currentModuleIndex = action.payload[0]
        state.currentClassIndex = action.payload[1]
      },

      next: (state) => {
        const nextClassIndex = state.currentClassIndex + 1
        const nextClass = state.course?.modules[state.currentModuleIndex].classes[nextClassIndex]

        if (nextClass) {
          state.currentClassIndex = nextClassIndex
          return;
        }

        const nextModuleIndex = state.currentModuleIndex + 1
        const nextModule = state.course?.modules[nextModuleIndex]

        if(nextModule) {
          state.currentModuleIndex = nextModuleIndex
          state.currentClassIndex = 0
        }
        
      }
    },
    /*
     * é uma forma de fazer com que um reducer do redux ouça disparos de ações de outros locais (outros slices ou os async thunks)
     */
    extraReducers(builder) {
      // addCase = adicionar caso (se)
      // se houver o loadCourse.fullfilled (indica sucesso), quando este acontecer, será disparado o reducer do lado
      builder.addCase(loadCourse.fulfilled, (state, action) => {
        state.course = action.payload
      })
    }
})

export const player = playerSlice.reducer
export const { play, next } = playerSlice.actions

export const useCurrentClassAndModule = () => {
  return useAppSelector((state) => {
    const { currentClassIndex, currentModuleIndex } = state.player

    const currentModule = state.player.course?.modules[currentModuleIndex]
    const currentClass = state.player.course?.modules[currentModuleIndex].classes[currentClassIndex]

    return { currentModule, currentClass }
  })
}