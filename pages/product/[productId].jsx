
import { useRouter } from "next/router";
import { StarIcon } from "@heroicons/react/24/outline";
import React, { useState } from 'react'
import Image from 'next/image'

function ProductDetails() {

    const router = new useRouter();
    const { productId } = router.query;
    
    const [radioColor , setRadioColor] = useState("");
    const [radioSize , setRadioSize] = useState("S");

    const handleChangeColor = (e) => {
        setRadioColor(e.target.value)
        console.log(e.target.value)
    }
    const handleChangeSize = (e) => {
        setRadioSize(e.target.value)
    }
  return (
    
    <div>
        <div className="container mx-auto grid grid-cols-2 gap-4  ">
            <div className="w-full">
                <img src="https://cdn.shopify.com/s/files/1/0287/3670/products/102-057_whitepepper1.jpg?v=1665032700" className="w-full h-full"/>
            </div>
            <div className="p-4">
                <span className="text-xs text-gray-600">UNITED BY BLUE</span>
                <h1 className="font-bold text-2xl pb-3">Organic Throwback Sweatpant</h1>
                <p className="text-2xl text-gray-900">$98</p>  
                <div className="flex items-center pb-2 mb-2">
                    <StarIcon className="text-xs h-7 w-5 "/>
                    <StarIcon className="text-xs h-7 w-5"/>
                    <StarIcon className="text-xs h-7 w-5"/>
                    <StarIcon className="text-xs h-7 w-5"/>
                    <StarIcon className="text-xs h-7 w-5"/>
                 
                </div>

                <div className="flex mt-3 mb-2">
                    <p className="font-semibold text-sm flex text-gray-700">
                    Color : 
                    <span className="block text-gray-800">
                        {radioColor}
                    </span>
                    </p> 
                </div>
                <label htmlFor="" className="flex items-center mb-4">
                    <input onChange={handleChangeColor}
                    value="red"
                    type="radio" name="colorProduct" id="11" 
                    className="relative h-6 w-6 before:content-[''] before:block before:w-full before:h-full before:bg-red-600 before:rounded-full  before:absolute mr-1 after:block after:w-[110%] after:h-[110%] after:border after:border-black after:rounded-full after:absolute"/>
                    <label htmlFor="" for="11" className=""></label>

                    <input onChange={handleChangeColor}
                    value="blue"
                    type="radio" name="colorProduct" id="11"
                    className="relative h-6 w-6 before:content-[''] before:block before:w-full before:h-full before:bg-blue-600 before:rounded-full  before:absolute mr-1"/>

                    <input onChange={handleChangeColor}
                    value="green"
                    type="radio" name="colorProduct" id="11"
                    className="relative h-6 w-6 before:content-[''] before:block before:w-full before:h-full before:bg-green-600 before:rounded-full  before:absolute mr-1"/>  
                </label>
                
                <div className="flex items-center mb-2">
                    Size :
                    <span className="block text-gray-800"></span>
                </div>
                <label htmlFor="" className="flex mb-6">
                
                <div className="relative w-10 h-8">
                        <input 
                        value="L"
                        onChange={handleChangeSize}
                        type="radio" name="sizeProduct" id="12" 
                        className={`relative w-10 h-8 rounded-full before:absolute before:h-full before:w-[100%] 
                        before:block before:conten-[""] before:rounded-full ${(radioSize == "L") ? 'before:bg-cyan-900 ' : 'bg-white'}`}/>
                        <label for="12" className={`absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 ${(radioSize == "L") ? 'text-white ' : 'text-black'}`}>L</label>
                    </div>
                    <div className="relative w-10 h-8">
                        <input 
                        value="S"
                        onChange={handleChangeSize}
                        type="radio" name="sizeProduct" id="12" 
                        className={`relative w-10 h-8 rounded-full before:absolute before:h-full before:w-[100%] 
                        before:block before:conten-[""] before:rounded-full ${(radioSize == "S") ? 'before:bg-cyan-900 ' : 'bg-white'}`}/>
                        <label for="12" className={`absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 ${(radioSize == "S") ? 'text-white' : 'text-black'}`}>S</label>
                    </div>
                    </label>
                    <div className="w-full mt-3 mb-7">
                        <button className="w-full h-14 bg-cyan-800 font-semibold border border-cyan-800 hover:bg-white hover:text-cyan-900 text-white">Add To Cart</button>
                    </div>
                    <section>
                        <h1 className="font-bold">Details</h1>
                        <p className="text-sm">Listen, people love this sock (maybe youre one of them). Its our coziest, plushiest, warmest sock ever with nearly 800 5-star reviews. The secres in our signature BisonShield™ fiber: crafted with salvaged bison wool that we intercept from the waste stream  for a sock thats both soft on you and on the planet.</p>
                        <ul className="list-disc pl-8 pt-3 text-sm">
                            <li>Features: reinforced heel and toe, ribbed arch support</li>
                            <li>To avoid microplastic shedding in the wash, we recommend using a Guppyfriend Washing Bag</li>
                            <li>62% wool, 22% nylon, 15% bison wool, 1% spandex</li>
                            <li>Small fits W 6-10 M 5-8</li>
                            <li>Large fits W 10-13, M 8-1</li>
                            <li>Made with love in the USA</li>
                        </ul>
                    </section>
                
                <div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default ProductDetails