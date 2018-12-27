import FilterLink from '../containers/FilterLink'
import React from 'react'
import { VisibilityFilters } from '../actions';

const Footer = () => (
    <div>
        <span>Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}></FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}></FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}></FilterLink>
    </div>
)

export default Footer