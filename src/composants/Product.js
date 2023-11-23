import React from 'react'

export default function Product(props) {
  return (
    <div className='col md-auto m-5'>
        <div className='card shadow-lg'>
            <img className='bd-placeholder-img card-img-top' src={`pictures/${props.data.thumbnail}`} alt="" />
            <div className='card-body'>
                <p className='card-title'>{props.data.title}</p>
                <p className='card-text'>{props.data.price} </p>
                <div className='d-flex judtify-content-between align-items-center'>
                    <div className='btn-group'>
                        <button type='button' className='btn btn-sm btn-danger btn-outline-secondary'> ajouter au panier</button>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
