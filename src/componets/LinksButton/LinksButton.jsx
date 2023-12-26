import React from 'react'
import { Link } from 'react-router-dom'

const LinksButton = ({link, name}) => {
  return (
    <Link to={link}>{name}</Link>
  )
}

export default LinksButton