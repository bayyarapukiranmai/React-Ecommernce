import React from 'react'

export default function Gallery({productItems, handleAddToCart}) {
  return (
    <div>
       <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{height:"450px"}} class="d-block w-100" alt="First slide"/>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{height:"450px"}} class="d-block w-100" alt="Second slide"/>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{height:"450px"}} class="d-block w-100" alt="Third slide"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
<div className='container row' style={{margin:"auto"}}>
    {productItems.map((product)=>(
        <div className='card col-2' style={{margin:"25px"}}>
            <img className='card-img-top' style={{height:"150px"}} src={product.pic} alt='card'/>
<div className='card-body'>
    <h5 className='card-title'>{product.name}</h5>
    <p>If you want product details goto description.</p>
    <button className='btn btn-primary' onClick={()=>handleAddToCart(product)}>Add to Cart</button>

</div>
        </div>
    ))}

</div>

    </div>
  )
}
