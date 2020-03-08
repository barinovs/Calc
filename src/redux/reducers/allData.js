import { CH_MODULE_TYPE,
         CH_SCREEN_H,
         CH_SCREEN_W,
         CH_TYPE_OF_CONTROL_1,
         CH_TYPE_OF_CONTROL_2,
         CH_CONTROLLER,
         CH_DT,
         CH_DV,
         CH_DL,
         SET_DIS_DT,
         CH_VIDEO} from  '../actions'

const initialState = {
    moduleType: "1",
    screenW: 9,
    screenH: 3,
    typeOfControl1: 'USB',
    typeOfControl2: 'offline',
    controller: 'inside',
    maker: 'onbon',
    dt: {
        value: false,
        dis: false
    },
    dv: {
        value: false,
        dis: false
    },
    dl: {
        value: false,
        dis: false
    },
    video: false,
    executionType: 1
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CH_MODULE_TYPE:
            return {
                ...state, moduleType: action.moduleType
            }
        case CH_SCREEN_H:
            return {
                ...state, screenH: action.height
            }
        case CH_SCREEN_W:
            return {
                ...state, screenW: action.width
            }
        case CH_TYPE_OF_CONTROL_1:
            return {
                ...state, typeOfControl1: action.typeOfControl
            }
        case CH_TYPE_OF_CONTROL_2:
            return {
                ...state, typeOfControl2: action.typeOfControl
            }
        case CH_CONTROLLER:
            return {
                ...state, controller: action.controller
            }
        case CH_DT:
            return {
                ...state, dt: {...state.dt, value: action.dt}
            }
        case CH_DV:
            return {
                ...state, dv: {...state.dv, value: action.dv}
            }
        case CH_DL:
            return {
                ...state, dl: {...state.dl, value: action.dl}
            }
        case SET_DIS_DT:
            return {
                ...state, dt: {...state.dt, dis: action.dis}
            }
        case CH_VIDEO:
            return {
                ...state, video: action.video
            }
        default:
            return state;
    }

}
