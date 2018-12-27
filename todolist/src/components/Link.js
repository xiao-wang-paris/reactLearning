import ProtoTypes from 'prop-types'
import React from 'react'

const Link = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px'
        }}
    >
    {children}
    </button>
)

Link.prototypes = {
    active: ProtoTypes.bool.isRequired,
    children: ProtoTypes.node.isRequired, 
    onClick: ProtoTypes.func.isRequired
}

export default Link