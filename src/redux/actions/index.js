export const CH_MODULE_TYPE = 'CH_MODULE_TYPE'
export const CH_SCREEN_H = 'CH_SCREEN_H'
export const CH_SCREEN_W = 'CH_SCREEN_W'
export const CH_TYPE_OF_CONTROL_1 = 'CH_TYPE_OF_CONTROL_1'
export const CH_TYPE_OF_CONTROL_2 = 'CH_TYPE_OF_CONTROL_2'
export const CH_CONTROLLER = 'CH_CONTROLLER'
export const CH_DT = 'CH_DT'
export const CH_DV = 'CH_DV'
export const CH_DL = 'CH_DL'

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

export function chTypeOfControl1(typeOfControl) {
    return {
        type: CH_TYPE_OF_CONTROL_1,
        typeOfControl: typeOfControl
    }
}

export function chTypeOfControl2(typeOfControl) {
    return {
        type: CH_TYPE_OF_CONTROL_2,
        typeOfControl: typeOfControl
    }
}

export function chController(controller) {
    return {
        type: CH_CONTROLLER,
        controller: controller
    }
}

export function chDT(dt) {
    return {
        type: CH_DT,
        dt: dt
    }
}

export function chDV(dv) {
    return {
        type: CH_DV,
        dv: dv
    }
}

export function chDL(dl) {
    return {
        type: CH_DL,
        dl: dl
    }
}
