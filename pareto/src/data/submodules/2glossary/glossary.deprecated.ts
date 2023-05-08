import * as pd from 'pareto-core-data'

import { boolean, data, dictionary, externalTypeReference, glossaryParameter, group, imp, member, null_, number, optional, procedure, ref, sExternalInterfaceReference, sfunction, string, taggedUnion, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "out": imp(),
    }),

    'glossary parameters': d({
    }),

    'root': {
        'namespaces': d({}),
        'types': d({
            "MapParameters": type(group({
                "library": member(ref(externalTypeReference("in", "Type Library", {}))),
                "mapping settings": member(ref(typeReference("Mapping Settings"))),
            })),
            "Atom Mappings": type(dictionary(taggedUnion({
                "boolean": null_(),
                "number": null_(),
                "string": null_(),
            }))),
            "Mapping Settings": type(group({
                "create annotations": member(boolean()),
                "atom mappings": member(ref(typeReference("Atom Mappings"))),
                "constraints mapping": member(group({
                    "terminal values": member(boolean()),
                    "constraints": member(optional(taggedUnion({
                        "optional": group({}),
                        "required": group({}),
                    }))),
                })),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "Map": sfunction(externalTypeReference("out", "Glossary", { "Annotation": externalTypeReference("common", "Null") }), data(typeReference("MapParameters", {}))),
        }),
    },
}