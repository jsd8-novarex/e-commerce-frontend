import React from "react";

const DeliveryAddressD = () => {
  return (
    <>
      <div>
        <div className='mt-4 flex justify-between border p-4'>
          <div>Delivery</div>
          <div>
            <button>edit</button>
          </div>
        </div>
        <div className='flex border border-t-0 p-4'>
          <strong>Delivery address</strong>
        </div>
        <div className='flex flex-col justify-between border border-t-0 p-4'>
          <div>
            <strong>Delivery address</strong>
          </div>
          <div className='flex'>
            <div className='mr-6 flex flex-col'>
              <span>Mr.name</span>
              <span>Address</span>
              <span>Tel.</span>
            </div>
            <div>
              <div>
                <p>Shipping method</p>
                <span>DHL e-commerce-Standard delivery</span>
                <span>$ 0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryAddressD;
