import React from 'react'

const OptionComponent = ({option}) => {
    console.log("option ", option)
    return (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
    )
}
export default OptionComponent
