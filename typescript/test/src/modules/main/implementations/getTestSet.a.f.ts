import * as pm from 'pareto-core-map'
import * as pa from 'pareto-core-async'
import * as pd from 'pareto-core-data'
import * as pv from 'pareto-core-dev'

import * as g_pub from "../../../../../pub"
import * as a_resolve from "res-pareto-resolve"

import { $ as d_pareto_lang_data } from "../../../data/paret-lang-data.data"

import * as g_pareto_lang_data_resolve from "../../../../../pub/dist/submodules/resolve"


import { A } from "../api.generated"

export const $$: A.getTestSet = ($) => {

    const resolve = g_pareto_lang_data_resolve.$a.resolve<pd.SourceLocation>(
        {
            'resolveDictionary': a_resolve.$r.safeResolveDictionary({
                'onError': ($) => {
                    pv.logDebugMessage(`ERROR: ${$}`)
                }
            })
        },
        {
            'onError': ($) => {
                pv.logDebugMessage(`${$.annotation.file}:${$.annotation.line}:${$.annotation.column}: ${$.message[0]}`)
                //$.annotation.
            }
        }
    )
    resolve({
        'imports': pd.d({}),
        'root': {
            'type library': d_pareto_lang_data,
            'root': {
                'annotation': pd.getLocationInfo(0),
                'key': "Root",
            }
        },
    })

    return pa.asyncValue({
        elements: pm.wrapRawDictionary({})
    })
}