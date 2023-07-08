import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "..";

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

export const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
      start: (state, action: PayloadAction<Course>) => {
        state.course = action.payload
      },

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
    }
})

export const player = playerSlice.reducer
export const { play, next, start } = playerSlice.actions

export const useCurrentClassAndModule = () => {
  return useAppSelector((state) => {
    const { currentClassIndex, currentModuleIndex } = state.player

    const currentModule = state.player.course?.modules[currentModuleIndex]
    const currentClass = state.player.course?.modules[currentModuleIndex].classes[currentClassIndex]

    return { currentModule, currentClass }
  })
}