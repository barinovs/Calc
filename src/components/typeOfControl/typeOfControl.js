import React from 'react'

import RadioTypeOfControl from '../radioTypeOfControl/radioTypeOfControl'

export default function TypeOfControl({typesOfControl1, typesOfControl2}) {
    return(
        <div>
            <label>Тип управления</label>
            <RadioTypeOfControl typesOfControl={typesOfControl1}/>
            <RadioTypeOfControl typesOfControl={typesOfControl2}/>
        </div>
    )
}
