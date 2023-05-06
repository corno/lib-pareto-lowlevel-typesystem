import * as pd from 'pareto-core-data'

import { algorithm, constructor, dependent, procedure, sSideEffect, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "resolve": algorithm(sfunction("resolve", {}, "Resolve"), { "Annotation": "GAnnotation" }, dependent(null, {}, {
            "onError": sSideEffect("resolve", { "Annotation": "Annotation" }, "OnError")
        })),
    })
}