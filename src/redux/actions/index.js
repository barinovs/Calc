export const CH_MODULE_TYPE = 'CH_MODULE_TYPE'
export const CH_SCREEN_H = 'CH_SCREEN_H'
export const CH_SCREEN_W = 'CH_SCREEN_W'
export const CH_TYPE_OF_CONTROL = 'CH_SCREEN_W'

export function chModuleType(moduleType) {
    return {
        type: CH_MODULE_TYPE,
        moduleType: moduleType
    }
}

export function chScreenH(height) {
    return {
        type: CH_SCREEN_H,
        height: height
    }
}

export function chScreenW(width) {
    return {
        type: CH_SCREEN_W,
        width: width
    }
}

export function chTypeOfControl(typeOfControl) {
    return {
        type: CH_TYPE_OF_CONTROL,
        typeOfControl: typeOfControl
    }
}
