import React from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import {UserIcon} from '@heroicons/react/24/outline'
import {BuildingStorefrontIcon} from '@heroicons/react/24/outline'
import {Bars4Icon} from '@heroicons/react/24/outline'
import Link from 'next/link'
function NavBar() {
  return (
    <div className='w-full h-20 flex items-center bg-white relative'>
        {/* button */}
        <div className='w-1/3 flex justify-start md:hidden'>
            <Bars4Icon className='w-6' />
        </div>
        {/* logo */}
        <div className='w-1/3 h-full flex items-center'>
            <p className='text-2xl text-center font-bold px-4'>united by blue</p>
        </div>
        {/* navs */}
        <div className='w-1/3 h-full  md:flex md:items-center md:justify-center hidden'>
            {
                datas.map((data , i) => (
                    <div className='group h-full p-5' key={i}>
                    <span className='flex items-center justify-center font-medium cursor-pointer h-full'>
                        {data.title}
                    </span>
                    <div className='flex w-full justify-around absolute right-0 top-20 group-hover:flex 
                    -translate-y-full group-hover:translate-y-0 ease-in-out duration-300 -z-10 p-5 bg-slate-50'>
                    <ul>
                        <span>{data.linksTitle}</span>
                        {
                            data.links.map((link , i) => (
                                <li key={i}>{link}</li>
                            ))
                        }
                    </ul>
                    <div className='flex gap-4 '>
                        {
                            data.images.map((image, i) => (
                            <div key={i}>
                                <img src={image.image} alt="" />
                                <span>{image.imageTitle}</span>
                            </div>
                            ))
                        }
                    </div>
                    </div>
                </div>
                ))
            }
        </div>
        {/* icons */}
        <div className='h-full w-1/3 flex items-center justify-end'>
            <Link href="/login">
            <div className=' w-10 md:w-16 h-full flex justify-center items-center'>
                <UserIcon className='h-7 w-7 cursor-pointer duration-300 hover:scale-125'/>
            </div>
            </Link>
            <div className='w-10 md:w-16 flex h-full items-center justify-center'>
                <MagnifyingGlassIcon className='h-7 w-7 cursor-pointer duration-300 hover:scale-125'/>
            </div>
            <div className='w-10 md:w-16 flex h-full items-center justify-center'>
                <BuildingStorefrontIcon className='h-7 w-7 cursor-pointer duration-300 hover:scale-125'/>
            </div>
        </div>
    </div>
  )
}

export default NavBar

const datas = 
[
    {
        title : "sale",
        linksTitle : "Shop all sale",
        links : ["Under 50" , "Under 50" , "Under 50" , "Under 50"],
        images : [
            {
                image : "//cdn.shopify.com/s/files/1/0287/3670/files/BoxingDay22-nav_300x400.jpg?v=1672063190",
                imageTitle : "this is article"
            },
            {
                image : "//cdn.shopify.com/s/files/1/0287/3670/files/WMNS_RESPONSIBLE_FLANNEL_JUNIPER_201-313-34824_0642_300x400.jpg?v=1672059781",
                imageTitle : "this is article"
            },
        ] 
    },
    {
        title : "Women",
        linksTitle : "Shop all sale",
        links : ["Under 50" , "Under 50" , "Under 50" , "Under 50"],
        images : [
            {
                image : "//cdn.shopify.com/s/files/1/0287/3670/files/WMNS_OVERSIZED_CASHMERE_TURTLENECK_CAMEL_201-312-18224_2217_300x400.jpg?v=1671048572",
                imageTitle : "this is article"
            },
            {
                image : "//cdn.shopify.com/s/files/1/0287/3670/files/WMNS_OVERSIZED_CASHMERE_TURTLENECK_CAMEL_201-312-18224_2217_300x400.jpg?v=1671048572",
                imageTitle : "this is article"
            },
        ] 
    },
    {
        title : "Men",
        linksTitle : "Shop all sale",
        links : ["Under 50" , "Under 50" , "Under 50" , "Under 50"],
        images : [
            {
                image : "//cdn.shopify.com/s/files/1/0287/3670/files/MENS_BISON_LINER_JACKET_FOREST_FLOOR_104-066-34325_1889_300x400.jpg?v=1669839045",
                imageTitle : "this is article"
            },
            {
                image : "//cdn.shopify.com/s/files/1/0287/3670/files/MENS_ORGANIC_CORDUROY_L_S_BUTTON_DOWN_PACIFIC_101-374-34525_2868_300x400.jpg?v=1671626629",
                imageTitle : "this is article"
            },
        ] 
    },
    {
        title : "Accessoires",
        linksTitle : "Shop all sale",
        links : ["Under 50" , "Under 50" , "Under 50" , "Under 50"],
        images : [
            {
                image : "https://cdn.shopify.com/s/files/1/0287/3670/files/R_EVOLUTION_55L_CARRY-ON_DUFFLE_CORTADO_814-058-35013_5580_300x400.jpg?v=1672059722",
                imageTitle : "this is article"
            },
            {
                image : "https://cdn.shopify.com/s/files/1/0287/3670/files/COZY_REVERSIBLE_BUCKET_HAT_FOREST_FLOOR_706-135-34313_0013_300x400.jpg?v=1672059704",
                imageTitle : "this is article"
            },
        ] 
    },
    {
        title : "Linving",
        linksTitle : "Sustainility",
        links : ["Cleanups" , "MAterials" , "Manufacturing"],
        images : [
            {
                image :"//cdn.shopify.com/s/files/1/0287/3670/files/STACKABLE_STONEWARE_TEA_POT_707-332-34413_4752_0105_300x400.jpg?v=1672059680",
                imageTitle : "this is article"
            },
            {
                image : "//cdn.shopify.com/s/files/1/0287/3670/files/STACKABLE_STONEWARE_TEA_POT_707-332-34413_4752_0105_300x400.jpg?v=1672059680",
                imageTitle : "this is article"
            },
        ] 
    },
    {
        title : "Impact",
        linksTitle : "Shop all sale",
        links : ["Under 50" , "Under 50" , "Under 50" , "Under 50"],
        images : [
            {
                image : "//cdn.shopify.com/s/files/1/0287/3670/files/DSC00232_s2_300x400.jpg?v=1668639108",
                imageTitle : "this is article"
            },
            {
                image : "//cdn.shopify.com/s/files/1/0287/3670/files/Nav-Materials_300x400.jpg?v=1662039923",
                imageTitle : "this is article"
            },
        ] 
    },
]