'use client';
import { useQuery } from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

export default function ProductsPage(){
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('')
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const {data, error} = useQuery({
        queryKey: ['getProducts', search, page, category], 
        queryFn: async() => {
            const res = await axios.get('http://localhost:5000/api/products', {
                params: {
                    page, 
                    search, 
                    category
                }
            })

            return res.data
        }
    })
    
    useEffect(() => {
        const currentUrl = new URLSearchParams(searchParams);
        currentUrl.set(`page`, page.toString())
        if(search) currentUrl.set(`search`, search)
        if(category) currentUrl.set(`category`, category)
        router.push(`${pathname}?${currentUrl.toString()}`)
    }, [page, search, category])

    return(
        <main className='p-10'>
            <section>
                <label className='input input-bordered flex items-center gap-2'>
                    <input type='text' onChange={(e) => setSearch(e.target.value)} className='grow' placeholder='Search' />
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 16 16'
                        fill='currentColor'
                        className='h-4 w-4 opacity-70'>
                        <path
                        fillRule='evenodd'
                        d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                        clipRule='evenodd' />
                    </svg>
                </label>
            </section>
            <section className='grid grid-cols-12 gap-5 py-5'>
                <div className='col-span-3 border border gray-300 rounded-md p-5'>
                    <div>
                        <h1 className='text-xl font-bold'>
                            Category
                        </h1>
                        <div className='flex gap-3'>
                            <h1 className='text-sm font-thin border border-gray-300 rounded-full p-3'>
                                Shirt
                            </h1>
                            <h1 className='text-sm font-thin border border-gray-300 rounded-full p-3'>
                                T-Shirt
                            </h1>
                            <h1 className='text-sm font-thin border border-gray-300 rounded-full p-3'>
                                Jacket
                            </h1>
                        </div>
                    </div>
                </div> 
                <div className='col-span-9 grid grid-cols-5 gap-3'>
                    {
                        data?.data?.products?.map((product: any, index: number) => {
                            return(
                                <div key={index} className='h-[300px] border border-gray-300 rounded-md col-span-1'>
                                    <div className='h-[200px] bg-gray-100'>

                                    </div>
                                    <div className='p-3'>
                                        <h1 className='text-lg font-bold'>
                                            {product?.name}
                                        </h1>
                                        <h1 className='text-sm'>
                                            Rp. {product?.price}
                                        </h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}