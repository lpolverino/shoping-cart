import React from 'react'
import LinksButton from '../LinksButton/LinksButton'

const Header = () => {
  return (
    <div>
        <nav>
            <LinksButton link ="/" name="Home"></LinksButton>
            <LinksButton link ="shop" name="Shop"></LinksButton>
        </nav>
        <div>
            <button data-testid = "shop-element">Cart</button>
        </div>
    </div>
  )
}

export default Header