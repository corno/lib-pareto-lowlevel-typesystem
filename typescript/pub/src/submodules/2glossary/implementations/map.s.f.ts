import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'
//import * as pd from 'pareto-core-dev'

import * as g_this from "../glossary"
import * as g_out from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as g_in from "../../resolved"


import { A } from "../api.generated"

export const $$: A.map = ($d) => {
    type Map_Type__Library_2_Glossary = (
        $: g_in.T.Type__Library,
        $p: {
            'mapping settings': g_this.T.Mapping__Settings
        },
    ) => g_out.T.Glossary<null>

    type Map_Global__Type__Selection = (
        $: g_in.T.Global__Type__Selection,
    ) => g_out.T.DataSpecifier._ltype<null>
    type Map_Type_2_Type = (
        $: g_in.T.Type,
        $p: {
            'mapping settings': g_this.T.Mapping__Settings
        }
    ) => g_out.T.Type<null>

    type Create_Optional_Annotations = (
        $: null,
        $p: {
            'mapping settings': g_this.T.Mapping__Settings
        }
    ) => pt.OptionalValue<g_out.T.Type.group.D<null>>


    type Map_Type__Selection = (
        $: g_in.T.Type__Selection,
        $p: {
            'getLastSteps': () => pt.Array<string>
        },
    ) => g_out.T.DataSpecifier._ltype<null>


    type CreateConstraintType = (
        $: g_this.T.Mapping__Settings.constraints__mapping.constraints.O,
        $cb: () => g_out.T.DataSpecifier._ltype<null>
    ) => g_out.T.Type<null>

    type MapTypeToNamespace = ($: g_in.T.Type) => g_out.T.Namespace<null>


    type CreateMappedAtom = (term: g_in.T.Atom, $p: {
        'atom mappings': g_this.T.Atom__Mappings
    }) => g_out.T.Type<null>


    type Tail2tail = ($: g_in.T.Type__Selection__Tail) => pt.Array<string>



    const createOptionalAnnotation: Create_Optional_Annotations = ($, $p) => {
        return $p['mapping settings']['create annotations']
            ? [true, {
                'type': ['reference', ['glossary parameterXX', "Annotation"]],
            }]
            : [false]
    }


    function createPossiblyOptionalType2(
        $: g_this.T.Mapping__Settings.constraints__mapping.constraints.O,
        $p: {
            cb: () => g_out.T.Type<null>,
        }
    ): g_out.T.Type<null> {
        switch ($[0]) {
            case 'optional': return pl.ss($, ($) => ['optional', $p.cb()])
            case 'required': return pl.ss($, ($) => $p.cb())
            default: return pl.au($[0])
        }
    }
    function createPossiblyOptionalType(
        $: null,
        $p: {
            'mapping settings': g_this.T.Mapping__Settings,
            cb: () => g_out.T.Type<null>,
        }
    ): pt.OptionalValue<g_out.T.Type.group.D<null>> {
        return pl.optional(
            $p['mapping settings']['constraints mapping'].constraints,
            ($): pt.OptionalValue<g_out.T.Type.group.D<null>> => [true, {
                'type': createPossiblyOptionalType2($, {
                    'cb': $p.cb,
                })
            }],
            () => [false],
        )
    }

    const map_Global__Type__Selection: Map_Global__Type__Selection = ($,) => {
        switch ($[0]) {
            case 'cyclic sibling': return pl.ss($, ($) => {
                return {
                    'context': ['local', null],
                    'type arguments': pm.wrapRawDictionary({}),
                    'typeXX': $.type.key,
                    'tailXX': pm.wrapRawArray([]),
                }
            })
            case 'import': return pl.ss($, ($): g_out.T.DataSpecifier._ltype<null> => {
                return {
                    'context': ['import', {
                        'glossary': {
                            'glossary': {
                                'annotation': null,
                                'key': $.library.key
                            },
                            'glossary arguments': pm.wrapRawDictionary({
                                "Annotation": ['glossary parameterXX', "Annotation"]
                            }),
                        }
                    }],
                    'type arguments': pm.wrapRawDictionary({}),
                    'typeXX': $.type.key,
                    'tailXX': pm.wrapRawArray([]),
                }
            })
            case 'resolved sibling': return pl.ss($, ($) => {

                return {
                    'context': ['local', null],
                    'type arguments': pm.wrapRawDictionary({}),
                    'typeXX': $.type.key,
                    'tailXX': pm.wrapRawArray([]),
                }
            })
            default: return pl.au($[0])
        }
    }

    const tail2tail: Tail2tail = ($) => {
        return $d.merge(pm.wrapRawArray([
            pl.cc($['step type'], ($) => {
                switch ($[0]) {
                    case 'array': return pl.ss($, ($) => pm.wrapRawArray(["A"]))
                    case 'dictionary': return pl.ss($, ($) => pm.wrapRawArray(["D"]))
                    case 'group': return pl.ss($, ($) => pm.wrapRawArray([$.content.property.key]))
                    case 'optional': return pl.ss($, ($) => pm.wrapRawArray(["O"]))
                    case 'state group': return pl.ss($, ($) => pm.wrapRawArray([$.content.state.key]))
                    default: return pl.au($[0])
                }
            }),
            pl.optional(
                $.tail,
                ($) => tail2tail($),
                () => pm.wrapRawArray([]),
            )
        ]))
    }

    const map_Type__Selection: Map_Type__Selection = (
        $,
        $p,
    ) => {
        return {
            'context': pl.optional(
                $.import,
                ($): g_out.T.DataSpecifier._ltype.context<null> => ['import', {
                    'glossary': {
                        'glossary arguments': pm.wrapRawDictionary({
                            "Annotation": ['glossary parameterXX', "Annotation"]
                        }),
                        'glossary': {
                            'annotation': null,
                            'key': $.key
                        }
                    }
                }],
                () => ['local', null],
            ),
            'type arguments': pm.wrapRawDictionary({}),
            'typeXX': $['global type'].key,
            'tailXX': $d.merge(pm.wrapRawArray([
                pl.optional(
                    $.tail,
                    ($) => tail2tail($),
                    () => pm.wrapRawArray([]),
                ),
                $p.getLastSteps()
            ])),
        }
    }

    const mapTypeToNamespace: MapTypeToNamespace = ($) => {
        return {
            'namespaces': pl.cc($, ($) => {
                return pl.cc($.type, ($) => {
                    switch ($[0]) {
                        case 'array': return pl.ss($, ($) => pm.wrapRawDictionary({
                            "A": mapTypeToNamespace($.type)
                        }))
                        case 'nothing': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                        case 'optional': return pl.ss($, ($) => pm.wrapRawDictionary({
                            "O": mapTypeToNamespace($.type)
                        }))
                        case 'component': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                        case 'dictionary': return pl.ss($, ($) => pm.wrapRawDictionary({
                            "D": mapTypeToNamespace($.type)
                        }))
                        case 'group': return pl.ss($, ($) => pm.wrapRawDictionary({
                            "G": {
                                'namespaces': $.properties.map(($) => mapTypeToNamespace($.type)),
                                'types': pm.wrapRawDictionary({}),
                            }
                        }))
                        case 'atom': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                        case 'cyclic reference': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                        case 'resolved reference': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                        case 'state group': return pl.ss($, ($) => pm.wrapRawDictionary({
                            "TU": {
                                'namespaces': $.states.map(($) => mapTypeToNamespace($.type)),
                                'types': pm.wrapRawDictionary({}),
                            }
                        }))
                        default: return pl.au($[0])
                    }

                })
            }),
            'types': pl.cc($, ($) => pm.wrapRawDictionary({})),
        }
    }


    const createMappedAtom: CreateMappedAtom = (term, $p) => {
        return $p['atom mappings'].__getEntry(
            term.type.key,
            ($) => {
                switch ($[0]) {
                    case 'boolean': return pl.ss($, ($) => ['boolean', null])
                    case 'number': return pl.ss($, ($) => ['number', null])
                    case 'string': return pl.ss($, ($) => ['string', null])
                    default: return pl.au($[0])
                }
            },
            () => pl.panic(`MISSING TERMINAL MAPPING: ${term.type.key}`)
        )
    }
    const mapTypeToType: Map_Type_2_Type = ($, $p) => {
        return pl.cc($.type, ($) => {
            switch ($[0]) {
                case 'nothing': return pl.ss($, ($) => {
                    return ['null', null]
                })
                case 'array': return pl.ss($, ($) => ['array', mapTypeToType($.type, $p)])
                case 'optional': return pl.ss($, ($) => {
                    return ['optional', mapTypeToType($.type, $p)]
                })
                case 'component': return pl.ss($, ($): g_out.T.Type<null> => ['reference', ['type', pl.cc($.type, ($): g_out.T.DataSpecifier._ltype<null> => {
                    switch ($[0]) {
                        case 'cyclic sibling': return pl.ss($, ($) => ({
                            'context': ['local', null], //FIXME!!!
                            'tailXX': pm.wrapRawArray([]),
                            'typeXX': $.type.key,
                            'type arguments': pm.wrapRawDictionary({}),
                        }))
                        case 'import': return pl.ss($, ($) => ({
                            'context': ['import', {
                                'glossary': {
                                    'glossary': {
                                        'annotation': null,
                                        'key': $.library.key
                                    },
                                    'glossary arguments': pm.wrapRawDictionary({
                                        "Annotation": ['glossary parameterXX', "Annotation"]
                                    }),
                                }
                            }],
                            'tailXX': pm.wrapRawArray([]),
                            'typeXX': $.type.key,
                            'type arguments': pm.wrapRawDictionary({}),
                        }))
                        case 'resolved sibling': return pl.ss($, ($) => ({
                            'context': ['local', null],
                            'tailXX': pm.wrapRawArray([]),
                            'typeXX': $.type.key,
                            'type arguments': pm.wrapRawDictionary({}),
                        }))
                        default: return pl.au($[0])

                        /*
                        {
                    'context': pl.cc($, ($) => {
                        switch ($.context[0]) {
                            case 'import': return pl.ss($.context, ($) => ['import', {
                                'glossary': {
                                    'glossary': {
                                        'annotation': null,
                                        'key': $.library.key
                                    },
                                    'glossary arguments': pm.wrapRawDictionary({
                                        "Annotation": ['glossary parameterXX', "Annotation"]
                                    }),
                                }
                            }])
                            case 'local': return pl.ss($.context, ($) => ['local', null])
                            default: return pl.au($.context[0])
                        }
                    }),
                    'typeXX': $.type.key,
                    'tailXX': pm.wrapRawArray([]),
                    'type arguments': pm.wrapRawDictionary<g_glossary.T.DataSpecifier<null>>({}),
                }
                */
                    }
                })]])
                case 'dictionary': return pl.ss($, ($) => pl.cc($, ($) => {
                    const type = $.type
                    const constraints = $.constraints

                    return ['dictionary', ($d.isEmpty(constraints))
                        ? mapTypeToType(type, $p)
                        : ['group', $d.filter(pm.wrapRawDictionary<pt.OptionalValue<g_out.T.Type.group.D<null>>>({
                            "annotation": createOptionalAnnotation(null, $p),
                            "constraints": createPossiblyOptionalType(null, {
                                'mapping settings': $p['mapping settings'],
                                'cb': () => {
                                    return ['group', constraints.map(($) => {
                                        return pl.cc($, ($): g_out.T.Type.group.D<null> => {
                                            switch ($[0]) {
                                                case 'dictionary': return pl.ss($, ($) => {
                                                    const $a = $

                                                    return {
                                                        'type': pl.cc($, ($): g_out.T.Type<null> => {
                                                            return ['reference', ['type', map_Type__Selection($a.dictionary.type, { 'getLastSteps': () => pm.wrapRawArray(["D"]) })]]
                                                        })
                                                    }
                                                })
                                                case 'lookup': return pl.ss($, ($) => {
                                                    const $a = $

                                                    return {
                                                        'type': ['reference', ['type', map_Global__Type__Selection($a)]]
                                                    }
                                                })
                                                default: return pl.au($[0])
                                            }
                                        })
                                    })]
                                }
                            }),
                            "content": [true, {
                                'type': mapTypeToType(type, $p)
                            }]
                        }))]
                    ]
                }))
                case 'group': return pl.ss($, ($) => ['group', $.properties.map(($) => ({
                    'type': mapTypeToType($.type, $p),
                }))])
                case 'atom': return pl.ss($, ($) => {
                    const term = $.atom
                    return createMappedAtom(term, {
                        'atom mappings': $p['mapping settings']['atom mappings']
                    })
                })
                case 'resolved reference': return pl.ss($, ($) => {
                    const atom = $.atom
                    return ['group', $d.filter(pm.wrapRawDictionary({
                        "key": $p['mapping settings']['constraints mapping']['terminal values']
                            ? [true, {
                                'type': createMappedAtom($.atom, {
                                    'atom mappings': $p['mapping settings']['atom mappings']
                                }),
                            }]
                            : [false],
                        "referent": pl.cc($, ($) => {
                            function createOptionalConstraintProperty(
                                $cb: () => g_out.T.Type<null>
                            ): pt.OptionalValue<g_out.T.Type.group.D<null>> {
                                return pl.optional(
                                    $p['mapping settings']['constraints mapping'].constraints,
                                    ($) => pl.cc($, ($) => {
                                        switch ($[0]) {
                                            case 'optional': return pl.ss($, ($) => [true, {
                                                'type': ['optional', $cb()]
                                            }])
                                            case 'required': return pl.ss($, ($) => [true, {
                                                'type': $cb()
                                            }])
                                            default: return pl.au($[0])
                                        }
                                    }),
                                    () => [false],
                                )
                            }
                            return createOptionalConstraintProperty(() => {
                                return pl.cc($.value, ($) => {
                                    switch ($[0]) {
                                        case 'dictionary': return pl.ss($, ($) => ['reference', ['type', map_Type__Selection($['type'], { 'getLastSteps': () => pm.wrapRawArray(["D"]) })]])
                                        case 'lookup': return pl.ss($, ($) => ['computed', ['reference', ['type', map_Global__Type__Selection($)]]])
                                        default: return pl.au($[0])
                                    }
                                })
                            })
                        }),//FIXME computed
                        "annotation": createOptionalAnnotation(null, $p),
                    }))]
                })
                case 'cyclic reference': return pl.ss($, ($) => {
                    const atom = $.atom
                    return ['group', $d.filter(pm.wrapRawDictionary({
                        "key": $p['mapping settings']['constraints mapping']['terminal values']
                            ? [true, {
                                'type': createMappedAtom($.atom, {
                                    'atom mappings': $p['mapping settings']['atom mappings']
                                }),
                            }]
                            : [false],
                        "referent": pl.cc($, ($) => {
                            return createPossiblyOptionalType(null, {
                                'mapping settings': $p['mapping settings'],
                                'cb': () => {
                                    return ['computed', ['reference', ['type', map_Global__Type__Selection($.sibling)]]]
                                }
                            })
                        }),//FIXME computed
                        "annotation": createOptionalAnnotation(null, $p),
                    }))]
                })
                case 'state group': return pl.ss($, ($) => {
                    return ['taggedUnion', $.states.map(($): g_out.T.Type<null> => pl.cc($, ($) => {
                        const type = $.type
                        const constraints = $.constraints

                        //if there are no constraints -or- no constraints or annotations should be added, then don't create a meta data group
                        return $d.isEmpty($.constraints) || ($p['mapping settings']['constraints mapping'].constraints[0] === false && !$p['mapping settings']['create annotations'])
                            ? mapTypeToType(type, $p)
                            : ['group', $d.filter(pm.wrapRawDictionary({
                                "annotation": createOptionalAnnotation(null, {
                                    'mapping settings': $p['mapping settings']
                                }),
                                "constraints": pl.optional(
                                    $p['mapping settings']['constraints mapping'].constraints,
                                    ($): pt.OptionalValue<g_out.T.Type.group.D<null>> => {
                                        const constraintStrat = $
                                        return [true, {
                                            'type': ['group', constraints.map(($) => {
                                                const $a = $
                                                return {
                                                    'type': pl.cc($, ($): g_out.T.Type<null> => {
                                                        return createPossiblyOptionalType2(constraintStrat, {
                                                            'cb': () => {
                                                                return pl.cc($.cast, ($) => {
                                                                    switch ($[0]) {
                                                                        case 'state group': return pl.ss($, ($) => {
                                                                            return ['reference', ['type', map_Type__Selection($a['type'], { 'getLastSteps': () => pm.wrapRawArray([$.content.state.key]) })]]

                                                                        })
                                                                        default: return pl.au($[0])
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    })
                                                }
                                            })]
                                        }]
                                    },
                                    () => [false]
                                ),
                                "content": [true, {
                                    'type': mapTypeToType(type, $p)
                                }],
                            }))]
                    }))]
                })
                default: return pl.au($[0])
            }

        })
    }
    const map_Type__Library_2_Glossary: Map_Type__Library_2_Glossary = ($, $p) => {
        return {
            'imports': $.imports.map(($) => null),
            'glossary parameters': $p['mapping settings']['create annotations']
                ? pm.wrapRawDictionary({
                    "Annotation": null,
                })
                : pm.wrapRawDictionary({}),
            'root': {
                'namespaces': $['global types'].map(($) => mapTypeToNamespace($.type)),
                'types': $['global types'].__mapWithKey(($, key) => {

                    return {
                        'parameters': pm.wrapRawDictionary({}),
                        'type': mapTypeToType($.type, $p),
                    }
                })
            },
            'asynchronous': {
                'interfaces': pm.wrapRawDictionary({}),
                'algorithms': pm.wrapRawDictionary({}),
            },
            'synchronous': {
                'interfaces': pm.wrapRawDictionary({
                    // if ($.settings['visitor interface'][0] === true) {
                    //     // add({
                    //     //     'key': "Visitor",
                    //     //     'value': ['group', {
                    //     //         'members': $.mappedModel.model['type library']['global types'].map<g_glossary.T.Interface>(($) => {
                    //     //             return ['method', {
                    //     //                 'data': [false], //FIXME
                    //     //                 'interface': [false], //FIXME
                    //     //             }]
                    //     //         })
                    //     //     }],
                    //     // })
                    // }


                }),
                'algorithms': pm.wrapRawDictionary({}),
            },
        }
    }
    return ($) => {
        return map_Type__Library_2_Glossary($.library, {
            'mapping settings': $['mapping settings']
        })
    }
}