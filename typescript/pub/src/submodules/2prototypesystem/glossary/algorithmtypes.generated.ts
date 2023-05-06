import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_in from "../../resolved"
import * as g_out from "lib-proto-typesystem/dist/submodules/resolved"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type Map = ($: g_in.T.Root) => g_out.T.Root
        }
    }
}