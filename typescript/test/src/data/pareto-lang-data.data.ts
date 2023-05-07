import * as pd from 'pareto-core-data'

import * as g_pareto_lang_data from "../../../pub/dist/submodules/unresolved"

import {
    array, constrainedDictionary,
    constrainedOption,
    dictionary,
    globalType,
    group,
    option,
    optionConstraint,
    optional,
    prop,
    t_grp,
    t_tu,
    taggedUnion,
    typeSelection,
    component,
    cyclicSibling,
    resolvedSibling,
    resolvedReference,
    dict,
    dictSel,
    lookup,
    lookupConstraint,
} from "../../../pub/dist/submodules/unresolved/shorthands"

export const $: g_pareto_lang_data.T.Type__Library<pd.SourceLocation> = {
    'imports': pd.d({}),
    'labels': {
        'atom types': pd.d({
            "identifier": null,
            "text": null,
        }),
    },
    'global types': pd.d({
        "Atom": globalType(
            group({
                "type": prop(resolvedReference(dict(dictSel(typeSelection("Labels", t_grp("atom types")))))),
            })
        ),
        "Type": globalType(
            group({
                "type": prop(taggedUnion({
                    "nothing": option(group({
                    })),
                    "terminal": option(group({
                        "terminal": prop(component(resolvedSibling("Atom"))),
                        "constrained": prop(taggedUnion({
                            "no": option(group({
                            })),
                            "yes": option(group({
                                "type": prop(taggedUnion({
                                    "dictionary": option(component(cyclicSibling("Dictionary Reference"))),
                                    "cyclic lookup": option(resolvedReference(lookup(cyclicSibling("Global Types")))),
                                    "non cyclic lookup": option(resolvedReference(lookup(cyclicSibling("Global Types")))),
                                })),
                            })),
                        })),
                    })),
                    "dictionary": option(group({
                        "key": prop(component(resolvedSibling("Atom"))),
                        "constraints": prop(component(cyclicSibling("Dictionary Constraints"))),
                        "type": prop(component(cyclicSibling("Type"))),
                    })),
                    "array": option(group({
                        "type": prop(component(cyclicSibling("Type"))),
                    })),
                    "optional": option(group({
                        "type": prop(component(cyclicSibling("Type"))),
                    })),
                    "tagged union": option(group({
                        "options": prop(dictionary(group({
                            "constraints": prop(component(cyclicSibling("Option Constraints"))),
                            "type": prop(component(cyclicSibling("Type"))),
                        }))),
                    })),
                    "group": option(group({
                        "properties": prop(dictionary(group({
                            "type": prop(component(cyclicSibling("Type"))),
                        }))),
                    })),
                    "component": option(group({
                        "context": prop(taggedUnion({
                            "resolved sibling": option(group({
                                "type": prop(resolvedReference(lookup(cyclicSibling("Global Types")))),
                            })),
                            "import": option(group({
                                "library": prop(resolvedReference(dict(dictSel(typeSelection("Imports"))))),
                                "type": prop(resolvedReference(lookup(cyclicSibling("Global Types")))),
                            })),
                            "cyclic sibling": option(group({
                                "type": prop(resolvedReference(lookup(cyclicSibling("Global Types")))),
                            })),
                        })),
                    })),
                    "foo": option(group({
                    })),
                })),
            })
        ),
        "Dictionary Constraints": globalType(
            dictionary(group({
                "type": prop(component(cyclicSibling("Type Selection"))),
                "cast": prop(taggedUnion({
                    "dictionary": constrainedOption(
                        {
                            "dictionary": optionConstraint(typeSelection("Type", t_grp("type")), "dictionary")
                        },
                        group({}),
                    )
                }))
            }))
        ),
        "Option Constraints": globalType(
            dictionary(group({
                "type": prop(component(cyclicSibling("Type Selection"))),
                "cast": prop(taggedUnion({
                    "tagged union": constrainedOption(
                        {
                            "tagged union": optionConstraint(typeSelection("Type", t_grp("type")), "tagged union")
                        },
                        group({
                            "option": prop(resolvedReference(dict(dictSel(typeSelection("Type", t_grp("type", t_tu("tagged union", t_grp("options")))))))),
                        }),
                    )
                }))
            }))
        ),
        "Dictionary Reference": globalType(
            group({
                "type": prop(component(cyclicSibling("Type Selection"))),
                "cast": prop(taggedUnion({
                    "dictionary": constrainedOption(
                        {
                            "dictionary": optionConstraint(typeSelection("Type", t_grp("type")), "dictionary")
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
                    "library": lookupConstraint(cyclicSibling("Dummy Type Library Lookup"))
                },
                group({})
            )
        ),
        "Type Selection Tail": globalType(
            group({
                "step type": prop(taggedUnion({
                    "dictionary": constrainedOption({
                        "dictionary": optionConstraint(typeSelection("Type", t_grp("type")), "dictionary")
                    }, group({})),
                    "optional": constrainedOption({
                        "optional": optionConstraint(typeSelection("Type", t_grp("type")), "optional")
                    }, group({})),
                    "array": constrainedOption({
                        "array": optionConstraint(typeSelection("Type", t_grp("type")), "array")
                    }, group({})),
                    "group": constrainedOption({
                        "group": optionConstraint(typeSelection("Type", t_grp("type")), "group")
                    }, group({
                        "property": prop(resolvedReference(dict(dictSel(typeSelection("Type", t_grp("type", t_tu("group", t_grp("properties"))))))))
                    })),
                    "tagged union": constrainedOption({
                        "tagged union": optionConstraint(typeSelection("Type", t_grp("type")), "tagged union")
                    }, group({
                        "option": prop(resolvedReference(dict(dictSel(typeSelection("Type", t_grp("type", t_tu("tagged union", t_grp("options")))))))),
                    })),
                })),
                "tail": prop(optional(component(cyclicSibling("Type Selection Tail"))))
            }),
        ),
        "Global Types": globalType(
            dictionary(group({
                "type": prop(component(resolvedSibling("Type"))),
            }))
        ),
        "Type Selection": globalType(
            group({
                "import": prop(optional(resolvedReference(dict(dictSel(typeSelection("Imports")))))),
                "global type": prop(resolvedReference(lookup(resolvedSibling("Global Types")))),
                "tail": prop(optional(component(resolvedSibling("Type Selection Tail"))))
            }),
        ),
        "Type Library": globalType(
            group({
                "imports": prop(component(resolvedSibling("Imports"))),
                "labels": prop(component(resolvedSibling("Labels"))),
                "global types": prop(component(resolvedSibling("Global Types"))),
            })
        ),
        "Dummy Type Library Lookup": globalType(
            dictionary(resolvedReference(lookup(resolvedSibling("Type Library"))))
        ),
        "Model": globalType(
            group({
                "type library": prop(component(resolvedSibling("Type Library"))),
                "root": prop(resolvedReference(dict(dictSel(typeSelection("Global Types"))))),
            })
        ),
        "Root": globalType(
            component(resolvedSibling("Model"))
        )
    }),
}