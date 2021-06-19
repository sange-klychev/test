import React from 'react'

function Element({ link, owner, title }) {
  return (
    <div className="posts__element">
      <a className="posts__avatar" href={owner.link}>
        <img src={owner.profile_image} alt="avatar" />
      </a>
      <div className="posts__info">
        <a className="posts__name" href={owner.link}>{owner.display_name}</a>
        <a className="posts__header" href={link}>{title}</a>
      </div>
    </div>
  )
}

export default Element
