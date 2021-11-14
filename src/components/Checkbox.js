import React from 'react'

function Checkbox({label, onChange}) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    return (
        <label>
            <input type="checkbox" value={label} onChange={onChange} />
            <span>{capitalize(label)}</span>
        </label>
    )
}

export default Checkbox
