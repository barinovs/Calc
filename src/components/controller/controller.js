import React from 'react'

import RadioTypeOfControl from '../radioTypeOfControl/radioTypeOfControl'

export default function ControllerComponent({typesOfControllers}) {
    return(
        <div>
            <label>Контроллер</label>
            <RadioTypeOfControl typesOfControl={typesOfControllers}/>
        </div>
    )
}
