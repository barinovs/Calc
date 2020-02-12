import React from 'react'

import CheckboxGroup from '../checkboxGroup/checkboxGroup'

export default function Sensors({sensors}) {
    return(
        <div>
            <label>Датчики</label>
            <CheckboxGroup typesOfControl={sensors}/>
        </div>
    )
}
