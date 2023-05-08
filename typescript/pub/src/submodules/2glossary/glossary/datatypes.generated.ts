import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_in from "../../resolved"
import * as g_out from "lib-pareto-typescript-project/dist/submodules/glossary"

export namespace N {}

export namespace T {
    
    export namespace Atom__Mappings {
        
        export namespace D {
            
            export type _lboolean = null
            
            export type _lnumber = null
            
            export type _lstring = null
        }
        
        export type D = 
            | ['boolean', null]
            | ['number', null]
            | ['string', null]
    }
    
    export type Atom__Mappings = pt.Dictionary<
        | ['boolean', null]
        | ['number', null]
        | ['string', null]
    >
    
    export namespace MapParameters {
        
        export type library = g_in.T.Type__Library
        
        export type mapping__settings = T.Mapping__Settings
    }
    
    export type MapParameters = {
        readonly 'library': g_in.T.Type__Library
        readonly 'mapping settings': T.Mapping__Settings
    }
    
    export namespace Mapping__Settings {
        
        export type atom__mappings = T.Atom__Mappings
        
        export namespace constraints__mapping {
            
            export namespace constraints {
                
                export namespace O {
                    
                    export namespace optional {}
                    
                    export type optional = null
                    
                    export namespace required {}
                    
                    export type required = null
                }
                
                export type O = 
                    | ['optional', null]
                    | ['required', null]
            }
            
            export type constraints = [ false ] | [ true, 
                | ['optional', null]
                | ['required', null]
            ]
            
            export type terminal__values = boolean
        }
        
        export type constraints__mapping = {
            readonly 'constraints': [ false ] | [ true, 
                | ['optional', null]
                | ['required', null]
            ]
            readonly 'terminal values': boolean
        }
        
        export type create__annotations = boolean
    }
    
    export type Mapping__Settings = {
        readonly 'atom mappings': T.Atom__Mappings
        readonly 'constraints mapping': {
            readonly 'constraints': [ false ] | [ true, 
                | ['optional', null]
                | ['required', null]
            ]
            readonly 'terminal values': boolean
        }
        readonly 'create annotations': boolean
    }
}