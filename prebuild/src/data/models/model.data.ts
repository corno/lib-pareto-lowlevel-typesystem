import * as pd from 'pareto-core-data'

import * as g_tendril from "lib-liana/dist/submodules/tendril"

import {
    array,
    resolvedSiblingComponent, constrainedDictionary,
    constrainedOption,
    dictConstraint,
    dictionary,
    globalType,
    globalTypeSelection,
    group,
    option,
    optionConstraint,
    optional,
    prop,
    resolvedValueReference,
    lookupReference,
    t_grp,
    t_tu,
    taggedUnion,
    tempTypeSelection,
    cyclicSiblingComponent
} from "lib-liana/dist/submodules/tendril/shorthands"

const dictionaryReference = resolvedValueReference
const cyclicLookupReference = lookupReference

export const $: g_tendril.T.Type__Library<pd.SourceLocation> = {
    'imports': pd.d({}),
    'labels': {
        'atom types': pd.d({
            "text": null,
        }),
    },
    'global types': pd.d({
        "Dummy Type Library Lookup": globalType(
            dictionary(resolvedSiblingComponent("Type Library"))
        ),
        "Atom Types": globalType(
            dictionary(group({}))
        ),
        "Atom": globalType(
            group({
                "type": prop(dictionaryReference(tempTypeSelection("Atom Types"))),
            })
        ),
        "Type": globalType(
            group({
                "type": prop(taggedUnion({
                    "array": option(group({
                        "type": prop(cyclicSiblingComponent("Type")),
                    })),
                    "atom": option(group({
                        "atom": prop(resolvedSiblingComponent("Atom")),
                    })),
                    "component": option(group({
                        "type": prop(cyclicSiblingComponent("Global Type Selection")),
                    })),
                    "cyclic reference": option(group({
                        "atom": prop(resolvedSiblingComponent("Atom")),
                        "sibling": cyclicSiblingComponent("Global Type Selection"),
                    })),
                    "dictionary": option(group({
                        "key": prop(resolvedSiblingComponent("Atom")),
                        "constraints": prop(dictionary(taggedUnion({
                            "dictionary": option(group({
                                "dictionary": prop(cyclicSiblingComponent("Dictionary Selection")),
                                "dense": prop(taggedUnion({
                                    "no": option(group({})),
                                    "yes": option(group({})),
                                }))
                            })),
                            "lookup": option(cyclicSiblingComponent("Global Type Selection")),
                        }))),
                        "type": prop(cyclicSiblingComponent("Type")),
                    })),
                    "group": option(group({
                        "properties": prop(dictionary(group({
                            "type": prop(cyclicSiblingComponent("Type")),
                        }))),
                    })),
                    "nothing": option(group({
                    })),
                    "optional": option(group({
                        "type": prop(cyclicSiblingComponent("Type")),
                    })),
                    "resolved reference": option(group({
                        "atom": prop(resolvedSiblingComponent("Atom")),
                        "value": prop(taggedUnion({
                            "dictionary": option(cyclicSiblingComponent("Dictionary Selection")),
                            "lookup": option(cyclicSiblingComponent("Global Type Selection")),
                        }))
                    })),
                    "state group": option(group({
                        "states": prop(dictionary(group({
                            "constraints": prop(dictionary(cyclicSiblingComponent("State Group Selection"))),
                            "type": prop(cyclicSiblingComponent("Type")),
                        }))),
                    })),
                })),
            })
        ),
        "Global Type Selection": globalType(
            taggedUnion({
                "resolved sibling": option(group({
                    "type": prop(dictionaryReference(tempTypeSelection("Global Types"))),
                })),
                "import": option(group({
                    "library": prop(dictionaryReference(tempTypeSelection("Imports"))),
                    "type": prop(dictionaryReference(tempTypeSelection("Global Types"))),
                })),
                "cyclic sibling": option(group({
                    "type": prop(lookupReference(tempTypeSelection("Global Types"), true)),
                })),
            }),
        ),
        "State Group Selection": globalType(
            group({
                "type": prop(resolvedSiblingComponent("Type Selection")),
                "cast": prop(taggedUnion({
                    "state group": constrainedOption(
                        {
                            "state group": optionConstraint(tempTypeSelection("Type", t_grp("type")), "state group")
                        },
                        group({
                            "state": prop(dictionaryReference(tempTypeSelection("Type", t_grp("type", t_tu("state group", t_grp("states")))))),
                        }),
                    )
                }))
            })
        ),
        "Dictionary Selection": globalType(
            group({
                "type": prop(resolvedSiblingComponent("Type Selection")),
                "cast": prop(taggedUnion({
                    "dictionary": constrainedOption(
                        {
                            "dictionary": optionConstraint(tempTypeSelection("Type", t_grp("type")), "dictionary")
                        },
                        group({}),
                    )
                })),

            })
        ),
        "Type Selection Tail": globalType(
            group({
                "step type": prop(taggedUnion({
                    "dictionary": constrainedOption({
                        "dictionary": optionConstraint(tempTypeSelection("Type", t_grp("type")), "dictionary")
                    }, group({})),
                    "optional": constrainedOption({
                        "optional": optionConstraint(tempTypeSelection("Type", t_grp("type")), "optional")
                    }, group({})),
                    "array": constrainedOption({
                        "array": optionConstraint(tempTypeSelection("Type", t_grp("type")), "array")
                    }, group({})),
                    "group": constrainedOption({
                        "group": optionConstraint(tempTypeSelection("Type", t_grp("type")), "group")
                    }, group({
                        "property": prop(dictionaryReference(tempTypeSelection("Type", t_grp("type", t_tu("group", t_grp("properties"))))))
                    })),
                    "state group": constrainedOption({
                        "state group": optionConstraint(tempTypeSelection("Type", t_grp("type")), "state group")
                    }, group({
                        "state": prop(dictionaryReference(tempTypeSelection("Type", t_grp("type", t_tu("state group", t_grp("states")))))),
                    })),
                })),
                "tail": prop(optional(resolvedSiblingComponent("Type Selection Tail")))
            }),
        ),
        "Type Selection": globalType(
            group({
                "import": prop(optional(dictionaryReference(tempTypeSelection("Imports")))),
                "global type": prop(dictionaryReference(tempTypeSelection("Global Types"))),
                "tail": prop(optional(resolvedSiblingComponent("Type Selection Tail")))
            }),
        ),
        "Imports": globalType(
            constrainedDictionary(
                {
                    "library": dictConstraint(tempTypeSelection("Dummy Type Library Lookup"))
                },
                group({})
            )
        ),
        "Global Types": globalType(
            dictionary(group({
                "type": prop(resolvedSiblingComponent("Type")),
            }))
        ),
        "Type Library": globalType(
            group({
                "imports": prop(resolvedSiblingComponent("Imports")),
                "atom types": prop(resolvedSiblingComponent("Atom Types")),
                "global types": prop(resolvedSiblingComponent("Global Types")),
            })
        ),
        "Model": globalType(
            group({
                "type library": prop(resolvedSiblingComponent("Type Library")),
                "root": prop(dictionaryReference(tempTypeSelection("Global Types"))),
            })
        ),
        "Root": globalType(
            resolvedSiblingComponent("Model")
        )
    }),
}