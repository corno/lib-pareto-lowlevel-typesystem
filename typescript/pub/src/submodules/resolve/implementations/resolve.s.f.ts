import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pt from 'pareto-core-types'

import * as g_this from "../glossary"
import * as g_in from "../../unresolved"
import * as g_out from "../../resolved"

import { A, D } from "../api.generated"


function mapOptional<T, RT>(
    $: pt.OptionalValue<T>,
    a: ($: T) => RT,
): pt.OptionalValue<RT> {
    return pl.optional($, ($): pt.OptionalValue<RT> => [true, a($)], () => [false])
}

function set<T>($: T): pt.OptionalValue<T> {
    return [true, $]
}

function mapResultOptional<T, RT, Result>(
    $: pt.OptionalValue<T>,
    res: Result,
    a: ($: ReturningType<T, Result>) => ReturningType<RT, Result>,
): ReturningType<pt.OptionalValue<RT>, Result> {
    return pl.optional(
        $,
        ($): ReturningType<pt.OptionalValue<RT>, Result> => {
            const out = a({
                'content': $,
                'result': res,
            })
            return {
                'content': [true, out.content],
                'result': out.result
            }
        },
        () => ({
            'result': res,
            'content': [false]
        })
    )
}

type Reference<T> = {
    'constraint': T,
    'key': string
}

type ReturningType<T, RT> = {
    'content': T,
    'result': RT,
}


export const $$: A.resolve = <Annotation>($d: D.resolve<Annotation>, $se: {
    readonly 'onError': g_this.SYNC.I.OnError<Annotation>
}) => {
    function getEntry<T>($: pt.Lookup<T>, key: string, annotation: Annotation): T {
        return $.__getEntry(
            key,
            ($) => $,
            () => {
                // let keys = ""
                // $.__forEach(() => false, ($, key) => {
                //     keys += `${key}, `
                // })
                //pl.panic(`No Such Entry: ${key} (${keys})`)
                $se.onError({
                    'annotation': annotation,
                    'message': ['no such entry', {
                        'key': key
                    }]
                })
                return pl.panic(`No Such Entry: ${key}`)
            }
        )
    }


    function getAnnotatedEntry<T>($: pt.Lookup<T>, key: {
        'annotation': Annotation,
        'key': string
    }): Reference<T> {
        return $.__getEntry(
            key.key,
            ($) => {
                return {
                    'key': key.key,
                    'constraint': $
                }
            },
            () => {
                // let keys = ""
                // $.__forEach(() => false, ($, key) => {
                //     keys += `${key}, `
                // })
                //pl.panic(`No Such Entry: ${key} (${keys})`)
                $se.onError({
                    'annotation': key.annotation,
                    'message': ['no such entry', {
                        'key': key.key
                    }]
                })
                return pl.panic(`No Such Entry: ${key.key}`)
            }
        )
    }
    type Map_Atom = (
        $: g_in.T.Atom<Annotation>,
        $p: {
            'labels': g_out.T.Labels,
        }
    ) => g_out.T.Atom

    type Map_Collection__Reference = (
        $: g_in.T.Collection__Reference<Annotation>,
        $p: {
            'imports': g_out.T.Imports,
            'sibling global types': pt.Lookup<g_out.T.Global__Types.D>
            'cyclic sibling global types': pt.Lookup<() => g_out.T.Global__Types.D>,
        },
    ) => g_out.T.Collection__Reference

    type Map_Global__Type__Selection = (
        $: g_in.T.Global__Type__Selection<Annotation>,
        $p: {
            'imports': g_out.T.Imports,
            'sibling global types': pt.Lookup<g_out.T.Global__Types.D>
            'cyclic sibling global types': pt.Lookup<() => g_out.T.Global__Types.D>,
        },
    ) => g_out.T.Global__Type__Selection

    type Map_Model = (
        $: g_in.T.Model<Annotation>,
        $p: {
            'imports': pt.Lookup<g_out.T.Type__Library>,
        }
    ) => g_out.T.Model


    type Map_Option__Constraints = (
        $: g_in.T.Option__Constraints<Annotation>,
        $p: {
            'imports': g_out.T.Imports,
            'sibling global types': pt.Lookup<g_out.T.Global__Types.D>
        },
    ) => g_out.T.Option__Constraints

    type Map_Root = (
        $: g_in.T.Root<Annotation>,
        $p: {
            'imports': pt.Lookup<g_out.T.Type__Library>,
        }
    ) => g_out.T.Root

    type Map_Type = (
        $: g_in.T.Type<Annotation>,
        $p: {
            'labels': g_out.T.Labels,
            'imports': g_out.T.Imports,
            'sibling global types': pt.Lookup<g_out.T.Global__Types.D>,
            'cyclic sibling global types': pt.Lookup<() => g_out.T.Global__Types.D>,
        }
    ) => g_out.T.Type

    type Map_Type__Selection = (
        $: g_in.T.Type__Selection<Annotation>,
        $p: {
            'imports': g_out.T.Imports,
            'sibling global types': pt.Lookup<g_out.T.Global__Types.D>
        },
    ) => ReturningType<g_out.T.Type__Selection, g_out.T.Type>

    type Map_Type__Selection__Tail = (
        $: g_in.T.Type__Selection__Tail<Annotation>,
        $p: {
            'context': g_out.T.Type,
            // 'imports': g_out.T.Imports,
            // 'sibling global types': pt.Lookup<g_out.T.Global__Types.D>
        },
    ) => ReturningType<g_out.T.Type__Selection__Tail, g_out.T.Type>

    type Map_Type__Library = (
        $: g_in.T.Type__Library<Annotation>,
        $p: {
            'imports': pt.Lookup<g_out.T.Type__Library>,
        }
    ) => g_out.T.Type__Library

    const map_Atom: Map_Atom = ($, $p) => ({
        'type': getAnnotatedEntry($p.labels['atom types'], $.type)
    })

    const map_Collection__Reference: Map_Collection__Reference = ($, $p) => {
        return pl.cc($, ($) => {
            switch ($[0]) {
                case 'lookup': return pl.ss($, ($): g_out.T.Type._ltype.terminal.constrained.yes._ltype => {
                    const v_gts = map_Global__Type__Selection($, $p)
                    return ['lookup', v_gts]
                })
                case 'dictionary': return pl.ss($, ($) => {

                    const x = $.cast

                    const v_type = map_Type__Selection($.type, $p)
                    return ['dictionary', {
                        'type': v_type.content,
                        'cast': ['dictionary', {
                            'constraints': {
                                'dictionary': pl.cc(v_type.result, ($) => {
                                    if ($.type[0] !== 'dictionary') {

                                        $se.onError({
                                            'annotation': x[1].annotation,
                                            'message': ['not the right state', {
                                                'found': $.type[0],
                                                'expected': `dictionary`
                                            }]
                                        })
                                        pl.panic(`not a dictionary`)
                                    }
                                    return $.type[1]
                                })
                            },
                            'content': null
                        }],

                    }]
                })
                default: return pl.au($[0])
            }
        })
    }

    const map_Global__Type__Selection: Map_Global__Type__Selection = ($, $p)=> {
        const x = pl.cc($, ($): g_out.T.Type._ltype.component._ltype => {
            switch ($[0]) {
                case 'cyclic sibling': return pl.ss($, ($) => {
                    const v_type = getAnnotatedEntry($p['cyclic sibling global types'], $.type)
                    return ['cyclic sibling', {
                        'type': v_type,//FIX ME; don't call
                    }]
                })
                case 'import': return pl.ss($, ($) => {
                    const v_library = getAnnotatedEntry($p.imports, $.library)
                    const v_type = getAnnotatedEntry(v_library.constraint.constraints.library['global types'], $.type)
                    return ['import', {
                        'library': v_library,
                        'type': v_type,
                    }]
                })
                case 'resolved sibling': return pl.ss($, ($) => {
                    const v_type = getAnnotatedEntry($p['sibling global types'], $.type)
                    return ['resolved sibling', {
                        'type': v_type,
                    }]
                })
                default: return pl.au($[0])
            }
        })
        return x
    }

    const map_Model: Map_Model = ($, $p) => {
        const tl = map_Type__Library($['type library'], $p)
        return {
            'type library': tl,
            'root': getAnnotatedEntry(tl['global types'], $.root)
        }
    }

    const map_Option__Constraints: Map_Option__Constraints = ($, $p) => {
        return $.map(($) => {
            const v_type = map_Type__Selection($.type, $p)
            return {
                'type': v_type.content,
                'cast': ['tagged union', pl.cc($.cast, ($) => {
                    switch ($[0]) {
                        case 'tagged union': return pl.ss($, ($) => {
                            const x = $
                            const c_tagged_union: g_out.T.Type._ltype.tagged__union = pl.cc(v_type.result, ($) => {
                                if ($.type[0] !== 'tagged union') {
                                    $se.onError({
                                        'annotation': x.annotation,
                                        'message': ['not the right state', {
                                            'found': $.type[0],
                                            'expected': `tagged union`
                                        }]
                                    })
                                    return pl.panic(`not a dictionary`)
                                }
                                return $.type[1]
                            })
                            const v_option = getAnnotatedEntry(c_tagged_union.options, $.content.option)
                            return {
                                'constraints': {
                                    'tagged union': c_tagged_union
                                },
                                'content': {
                                    'option': v_option,
                                }
                            }
                        })
                        default: return pl.au($[0])
                    }
                })],
            }
        })
    }

    const map_Root: Map_Root = ($, $p) => {
        return map_Model($, $p)
    }
    const map_Type: Map_Type = ($, $p) => {
        return {
            'type': pl.cc($.type, ($): g_out.T.Type._ltype => {
                switch ($[0]) {
                    case 'array': return pl.ss($, ($): g_out.T.Type._ltype => ['array', {
                        'type': map_Type($.type, $p)
                    }])
                    case 'component': return pl.ss($, ($): g_out.T.Type._ltype => {
                        return ['component', {
                            'type': map_Global__Type__Selection($.type, $p)
                        }]
                    })
                    case 'dictionary': return pl.ss($, ($): g_out.T.Type._ltype => ['dictionary', {
                        'constraints': $.constraints.map(($) => map_Collection__Reference($, $p)),
                        'key': map_Atom($.key, { 'labels': $p.labels }),
                        'type': map_Type($.type, $p)
                    }])
                    case 'group': return pl.ss($, ($) => {
                        return ['group', {
                            'properties': $.properties.map(($) => {
                                return {
                                    'type': map_Type($.type, $p)
                                }
                            })
                        }]
                    })
                    case 'nothing': return pl.ss($, ($) => ['nothing', null])
                    case 'optional': return pl.ss($, ($): g_out.T.Type._ltype => ['optional', {
                        'type': map_Type($.type, $p),
                    }])
                    case 'tagged union': return pl.ss($, ($): g_out.T.Type._ltype => {
                        return ['tagged union', {
                            'options': $d.resolveDictionary($.options, {
                                'map': ($, $l) => {
                                    return {
                                        'constraints': map_Option__Constraints($.value.constraints, $p),
                                        'type': map_Type($.value.type, $p),
                                    }
                                }
                            }),
                        }]
                    })
                    case 'terminal': return pl.ss($, ($): g_out.T.Type._ltype => {
                        return ['terminal', {
                            'constrained': pl.cc($.constrained, ($) => {
                                switch ($[0]) {
                                    case 'no': return pl.ss($, ($) => ['no', $])
                                    case 'yes': return pl.ss($, ($) => {
                                        return ['yes', {
                                            'type': map_Collection__Reference($.type, $p)
                                        }]
                                    })
                                    default: return pl.au($[0])
                                }
                            }),
                            'terminal': map_Atom($.terminal, { 'labels': $p.labels }),
                        }]
                    })
                    default: return pl.au($[0])
                }
            })
        }
    }
    const map_Type__Selection: Map_Type__Selection = ($, $p) => {
        const v_import = mapResultOptional(
            $.import,
            $p['sibling global types'],
            ($) => {
                const content = getAnnotatedEntry($p.imports, $.content)

                return {
                    'content': content,
                    'result': $.result,
                }
            }
        )
        const v_global_type = getAnnotatedEntry(
            v_import.result,
            $['global type'],
        )
        const v_tail = mapResultOptional(
            $.tail,
            v_global_type.constraint.type,
            ($) => {
                const content = map_Type__Selection__Tail($.content, {
                    'context': $.result,
                })
                return {
                    'content': content.content,
                    'result': content.result,
                }
            },
        )
        return {
            'content': {
                'import': v_import.content,
                'global type': v_global_type,
                'tail': v_tail.content,
            },
            'result': v_tail.result,
        }
    }
    const map_Type__Selection__Tail: Map_Type__Selection__Tail = ($, $p) => {
        const v_step_type = pl.cc($['step type'], ($): ReturningType<g_out.T.Type__Selection__Tail.step__type, g_out.T.Type> => {
            switch ($[0]) {
                case 'array': return pl.ss($, ($): ReturningType<g_out.T.Type__Selection__Tail.step__type, g_out.T.Type> => {
                    const x = $
                    const v_array = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'array') {
                            $se.onError({
                                'annotation': x.annotation,
                                'message': ['not the right state', {
                                    'found': $[0],
                                    'expected': `array`
                                }]
                            })
                            pl.panic(`not an array`)
                        }
                        return $[1]
                    })
                    return {
                        'content': ['array', {
                            'constraints': {
                                'array': v_array,
                            },
                            'content': null,
                        }],
                        'result': v_array.type,
                    }
                })
                case 'dictionary': return pl.ss($, ($): ReturningType<g_out.T.Type__Selection__Tail.step__type, g_out.T.Type> => {
                    const x = $

                    const v_dictionary = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'dictionary') {
                            $se.onError({
                                'annotation': x.annotation,
                                'message': ['not the right state', {
                                    'found': $[0],
                                    'expected': `dictionary`
                                }]
                            })
                            pl.panic(`not a dictionary`)
                        }
                        return $[1]
                    })
                    return {
                        'content': ['dictionary', {
                            'constraints': {
                                'dictionary': v_dictionary,
                            },
                            'content': null,
                        }],
                        'result': v_dictionary.type,
                    }
                })
                case 'group': return pl.ss($, ($): ReturningType<g_out.T.Type__Selection__Tail.step__type, g_out.T.Type> => {
                    const x = $

                    const v_group = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'group') {
                            $se.onError({
                                'annotation': x.annotation,
                                'message': ['not the right state', {
                                    'found': $[0],
                                    'expected': `group`
                                }]
                            })
                            pl.panic(`not a group`)
                        }
                        return $[1]
                    })
                    const v_property = getAnnotatedEntry(v_group.properties, $.content.property)
                    return {
                        'content': ['group', {
                            'constraints': {
                                'group': v_group,
                            },
                            'content': {
                                'property': v_property
                            },
                        }],
                        'result': v_property.constraint.type,
                    }
                })
                case 'optional': return pl.ss($, ($): ReturningType<g_out.T.Type__Selection__Tail.step__type, g_out.T.Type> => {
                    const x = $

                    const v_optional = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'array') {
                            $se.onError({
                                'annotation': x.annotation,
                                'message': ['not the right state', {
                                    'found': $[0],
                                    'expected': `optional`
                                }]
                            })
                            pl.panic(`not an optional`)
                        }
                        return $[1]
                    })
                    return {
                        'content': ['optional', {
                            'constraints': {
                                'optional': v_optional,
                            },
                            'content': null,
                        }],
                        'result': v_optional.type,
                    }
                })
                case 'tagged union': return pl.ss($, ($): ReturningType<g_out.T.Type__Selection__Tail.step__type, g_out.T.Type> => {
                    const x = $

                    const v_tagged_union = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'tagged union') {
                            $se.onError({
                                'annotation': x.annotation,
                                'message': ['not the right state', {
                                    'found': $[0],
                                    'expected': `tagged union`
                                }]
                            })
                            pl.panic(`not a tagged union`)
                        }
                        return $[1]
                    })
                    const v_option = getAnnotatedEntry(v_tagged_union.options, $.content.option)

                    return {
                        'content': ['tagged union', {
                            'constraints': {
                                'tagged union': v_tagged_union,
                            },
                            'content': {
                                'option': v_option
                            },
                        }],
                        'result': v_option.constraint.type,
                    }
                })
                default: return pl.au($[0])
            }
        })
        const v_tail = mapResultOptional(
            $.tail,
            v_step_type.result,
            ($) => {
                const content = map_Type__Selection__Tail($.content, {
                    'context': $.result
                })
                return {
                    'content': content.content,
                    'result': content.result,
                }
            },
        )
        return {
            'content': {
                'step type': v_step_type.content,
                'tail': v_tail.content
            },
            'result': v_tail.result,
        }
    }
    const map_Type__Library: Map_Type__Library = ($, $p) => {
        const imports: g_out.T.Imports = $.imports.__mapWithKey(($, key) => {
            return {
                'constraints': {
                    'library': getEntry($p.imports, key, $.annotation)
                },
                'content': null
            }
        })
        const labels = {
            'atom types': $.labels['atom types'].map(($) => null)
        }
        return {
            'imports': imports,
            'labels': labels,
            'global types': $d.resolveDictionary($['global types'], {
                'map': (($, $l) => {
                    return {
                        'type': map_Type($.value.type, {
                            'labels': labels,
                            'imports': imports,
                            'sibling global types': $l['non circular siblings'],
                            'cyclic sibling global types': $l['all siblings'],
                        }),
                        // 'result': mapOptional(
                        //     $.value.result,
                        //     ($) => ({
                        //         'type': map_Global__Type__Selection(
                        //             $.type,
                        //             {
                        //                 'imports': imports,
                        //                 'sibling global types': $l['non circular siblings']
                        //             })
                        //     })
                        // ),
                    }
                })
            })
        }
    }
    return ($: g_this.T.Resolve__Parameters<Annotation>) => {
        return map_Root($.root, {
            'imports': $.imports,
        })
    }
}