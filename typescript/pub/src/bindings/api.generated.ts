import * as pt from 'pareto-core-types'

import * as g_main from "../main"
import * as g_resolve from "../submodules/resolve"

export namespace D {
    
}

export namespace A {
    
    export type resolve = <GAnnotation>($se: {
        readonly 'onError': g_resolve.SYNC.I.OnError<GAnnotation>
    }) => g_resolve.SYNC.A.F.Resolve<GAnnotation>
}

export type API = {
    readonly 'resolve': A.resolve
}