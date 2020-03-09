import React from 'react'

const OptionComponent = ({option}) => {
    return (
        <option
            key={option.id}
            value={option.id}
            data-width={option.width}
            data-height={option.height}
        >
          {option.name}
        </option>
    )
}
export default OptionComponent
