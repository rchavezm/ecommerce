import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box"> Description </div>
            <div className="descriptionbox-nav-box fade"> Reviews (122) </div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates buying and selling of products or srvices over the internet serves as a virtual marketplace where businesses and individuals showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerces websites have gained immense popularity due to their conventional accessibilty, and the global reach they offer</p>
            <p>E-commerce websites typically display products or services as detailed descriptions, images, prices, and any available vary (e.g., sizes, colors). Each product usually has its own dedication with relevant information.</p>
        </div>
    </div>
  )
}
