import React from 'react'


import checkPNG from "../../assets/check.png"

const CheckoutSuccessPage = () => {
  return (
    <section>

        <div className='max-w-[500px] mx-auto'>



          <div className="flex flex-col items-center gap-0.5">



          <img src={checkPNG} width={70} />

          <h2 className='text-[22px] font-bold mt-2'>Payment Done!</h2>
          <p className='text__para'>Thank You for completing your Secure Online Payment</p>
          <h5 className='text-[15px] font-medium'>Have a Great Day😊</h5>

          </div>






        </div>


    </section>
  )
}

export default CheckoutSuccessPage