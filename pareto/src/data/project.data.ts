import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

import { $ as d_main } from "./main/module.data"

import { $ as d_bindings } from "./bindings/moduledefintion.data"
import { $ as d_resolved } from "./submodules/resolved/module.data"
import { $ as d_unresolved } from "./submodules/unresolved/module.data"
import { $ as d_possiblyresolved } from "./submodules/possiblyresolved/module.data"
import { $ as d_resolve } from "./submodules/resolve/module.data"
import { $ as d_serialize } from "./submodules/serialize/module.data"
import { $ as d_2prototypesystem } from "./submodules/2prototypesystem/module.data"
import { $ as d_2glossary } from "./submodules/2glossary/module.data"

import { external, submodule, tempSubmodule, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


export const $: g_project.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "the typesystem for the imperative Pareto language",
    'license': "TBD",

    'dependencies': d({
        "res-pareto-resolve": null,
        "res-pareto-array": null,
        "res-pareto-dictionary": null,
        "lib-proto-typesystem": null,
        "lib-pareto-typescript-project": null,
    }),
    'type': ['library', {
        'main': d_main,
        'submodules': d({
            "unresolved": d_unresolved,
            "resolved": d_resolved,
            "resolve": d_resolve,
            "serialize": d_serialize,
            "2prototypesystem": d_2prototypesystem,
            "2glossary": d_2glossary,
            "possiblyresolved": d_possiblyresolved,
        }),
        'bindings': [true, {
            'definition': d_bindings,
            'implementation': ['typescript', null],
        }],
        'executables': d({}),
        'test': {
            'dependencies': d({
                "res-pareto-resolve": null,
            }),
            'definition': {
                'glossary': {
                    'root': {
                        'glossary parameters': d({}),
                        'imports': d({}),
                        'root': {
                            'namespaces': d({}),
                            'types': d({}),
                        },
                        'asynchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),

                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),

                        },

                    },
                    'imports': d({}),
                },
                'api': {
                    'imports': d({}),
                    'root': {
                        'algorithms': d({}),
                    },
                }

            },
            'imports': d({}),
        }
    }],
}