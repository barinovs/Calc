import React from 'react'

import RadioTypeOfControl from '../radioTypeOfControl/radioTypeOfControl'

export default function TypeOfControl({typesOfControl1, typesOfControl2, setValue}) {
    return(
        <div>
            <label>Тип управления</label>
            <RadioTypeOfControl setValue={setValue} typesOfControl={typesOfControl1} valueType="t"/>
            <RadioTypeOfControl setValue={setValue} typesOfControl={typesOfControl2} />
        </div>
    )
}
