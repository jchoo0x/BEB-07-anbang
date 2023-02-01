import React from "react";

export default function Hero() {
    return(
        <div className='w-1/2 mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>부동산 플랫폼 <span className='text-amber-400'>안방</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-amber-400'>NFT</span> 부동산 거래</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://s26162.pcdn.co/wp-content/uploads/2022/04/blockchain.jpg" alt="/" />
        </div>
    </div>
  )
}
