import PropTypes from 'prop-types'
import React from 'react'

const Todo = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed? 'line-through':'none'
        }}
    >
    test
    </li>
)

Todo.PropTypes = {
    onClick : PropTypes.func.isRequired, 
    completed: PropTypes.func.isRequired, 
    text: PropTypes.func.isRequired
}

export default Todo