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
        "Atom": globalType(
            group({
                "type": prop(dictionaryReference(tempTypeSelection("Labels", t_grp("atom types")))),
            })
        ),
        "Type": globalType(
            group({
                "type": prop(taggedUnion({
                    "nothing": option(group({
                    })),
                    "terminal": option(group({
                        "terminal": prop(resolvedSiblingComponent("Atom")),
                        "constrained": prop(taggedUnion({
                            "no": option(group({
                            })),
                            "yes": option(taggedUnion({
                                "resolved": option(taggedUnion({
                                    "dictionary": option(cyclicSiblingComponent("Dictionary Selection")),
                                    "lookup": option(cyclicSiblingComponent("Global Type Selection")),
                                })),
                                "cyclic": option(cyclicSiblingComponent("Global Type Selection")),
                            })),
                        })),
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
                    "array": option(group({
                        "type": prop(cyclicSiblingComponent("Type")),
                    })),
                    "optional": option(group({
                        "type": prop(cyclicSiblingComponent("Type")),
                    })),
                    "tagged union": option(group({
                        "options": prop(dictionary(group({
                            "constraints": prop(cyclicSiblingComponent("Option Constraints")),
                            "type": prop(cyclicSiblingComponent("Type")),
                        }))),
                    })),
                    "group": option(group({
                        "properties": prop(dictionary(group({
                            "type": prop(cyclicSiblingComponent("Type")),
                        }))),
                    })),
                    "component": option(group({
                        "type": prop(cyclicSiblingComponent("Global Type Selection")),
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
        "Option Constraints": globalType(
            dictionary(group({
                "type": prop(resolvedSiblingComponent("Type Selection")),
                "cast": prop(taggedUnion({
                    "tagged union": constrainedOption(
                        {
                            "tagged union": optionConstraint(tempTypeSelection("Type", t_grp("type")), "tagged union")
                        },
                        group({
                            "option": prop(dictionaryReference(tempTypeSelection("Type", t_grp("type", t_tu("tagged union", t_grp("options")))))),
                        }),
                    )
                }))
            }))
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
        "Labels": globalType(
            group({
                "atom types": prop(dictionary(group({}))),
            })
        ),
        "Imports": globalType(
            constrainedDictionary(
                {
                    "library": dictConstraint(tempTypeSelection("Dummy Type Library Lookup"))
                },
                group({})
                )
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
                    "tagged union": constrainedOption({
                        "tagged union": optionConstraint(tempTypeSelection("Type", t_grp("type")), "tagged union")
                    }, group({
                        "option": prop(dictionaryReference(tempTypeSelection("Type", t_grp("type", t_tu("tagged union", t_grp("options")))))),
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
        "Global Types": globalType(
            dictionary(group({
                "type": prop(resolvedSiblingComponent("Type")),
            }))
        ),
        "Type Library": globalType(
            group({
                "imports": prop(resolvedSiblingComponent("Imports")),
                "labels": prop(resolvedSiblingComponent("Labels")),
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