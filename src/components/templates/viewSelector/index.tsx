import React from 'react'

interface IViewSelectorProps {
  
}

function ViewSelector(props: IViewSelectorProps) {
  return (
    <div className="adminPanel">
      <nav className="navbar"></nav>
      <main className="selectedView"></main>
    </div>
  )
}

export default ViewSelector
