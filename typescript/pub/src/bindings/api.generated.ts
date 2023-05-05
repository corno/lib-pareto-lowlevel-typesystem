import * as pt from 'pareto-core-types'

import * as g_main from "../main"

export namespace D {
    
}

export namespace A {
    
    export type generateTypescript = () => g_main.SYNC.A.P.GenerateTypescript
}

export type API = {
    readonly 'generateTypescript': A.generateTypescript
}