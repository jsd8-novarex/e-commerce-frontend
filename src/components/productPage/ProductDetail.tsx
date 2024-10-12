import React from "react";

function ProductDetail() {
  return (
    <section className='col-start-8 col-end-13 bg-red-500'>
      <p>content</p>
      <div>
        <h3>Mens Recycled Cashmere Cardigan - Black</h3>
        <h3>$275</h3><br />
        <ul className='flex gap-2'>
          <li>Womens</li>
          <li>Mens</li>
        </ul>
      </div>
      <br />
      <div>
        <h4><b>Color</b></h4>
        <ul className='flex gap-2'>
          <li>Black</li>
          <li>Oatmeal</li>
        </ul><br />
      </div>
      <div>
        <h4>Size</h4>
        <ul className='flex gap-4'>
          <li>XXS</li>
          <li>XS</li>
          <li>S</li>
          <li>M</li>
          <li>L</li>
          <li>XL</li>
          <li>XXL</li>
        </ul>
      </div>
      <br />
      <div>
        <h4>Description</h4>
        <p>
          WRAP YOURSELF IN WARMTH WITH THE PANGAIA RECYCLED CASHMERE CARDIGAN.
           MADE FROM A LUXURIOUS BLEND OF RECYCLED CASHMERE, 
           THIS CARDIGAN OFFERS SOFTNESS AND DURABLENESS IN ONE ELEGANT PIECE.
        </p>
      </div>
    </section>
  );
}

export default ProductDetail;
