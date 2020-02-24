export const CH_MODULE_TYPE = 'CH_MODULE_TYPE'

export function chModuleType(moduleType) {
    console.log("==chModuleType== ", moduleType );
    return {
        type: CH_MODULE_TYPE,
        moduleType: moduleType
    }
}
