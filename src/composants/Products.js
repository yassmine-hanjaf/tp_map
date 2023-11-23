import React from 'react'
import Product from './Product'
export default function Products(props) {
  return (
    <div className='container'>
        <div className='row'>
            {
                props.produits.map((produit,index)=>{
                    return <Product key={index} data={produit}/>
                })
            }
        </div>
      
    </div>
  )
}
