import { player as reducer, play, next, PlayerState } from "./player"
import { describe, test, expect } from "vitest"

const exampleInitialState: PlayerState = {
    course: {
        id: 1,
        modules: [
          {
            id: 1,
            title: 'Iniciando com React',
            classes: [
              { id: 'MNR0egvK_oQ', title: 'CSS Modules', duration: '13:45' },
              { id: 'w-DW4DhDfcw', title: 'Estilização do Post', duration: '10:05' },
            ],
          },
          {
            id: 2,
            title: 'Estrutura da aplicação',
            classes: [
              { id: 'gE48FQXRZ_o', title: 'Componente: Comment', duration: '13:45' },
              { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' },
            ],
          },
        ],
    },
    currentModuleIndex: 0,
    currentClassIndex: 0,
    isLoading: false
}

describe("player slice", () => {
    test("if it can play", () => {
        const state = reducer(exampleInitialState, play([1, 1]))
        
        expect(state).toEqual(expect.objectContaining({
            currentModuleIndex: 1,
            currentClassIndex: 1,
        }))
    })

    test("if it will play next video automatically", () => {
        const state = reducer(exampleInitialState, next())

        expect(state).toEqual(expect.objectContaining({
            currentModuleIndex: 0,
            currentClassIndex: 1,
        }))
    })

    test("if it will jump to next module when the current module classes are over", () => {
        const state = reducer({
            ...exampleInitialState,
            currentClassIndex: 1,
        }, next())

        expect(state).toEqual(expect.objectContaining({
            currentModuleIndex: 1,
            currentClassIndex: 0,
        }))
    })

    test("if it won't change the current module nor current class if there is no next class/module", () => {
        const state = reducer({
            ...exampleInitialState,
            currentClassIndex: 1,
            currentModuleIndex: 1,
        }, next())

        expect(state).toEqual(expect.objectContaining({
            currentModuleIndex: 1,
            currentClassIndex: 1,
        }))
    })
})
