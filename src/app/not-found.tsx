import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='container text-center my-40'>
    <div className='text-base my-4'>Spiacenti, la pagina che cerchi non è disponibile. </div>

    <Link href={'/products'}>
    <button className='bg-black text-white rounded-md px-8 py-2'>Vai ai prodotti</button>
    </Link>
    </div>
  )
}

export default NotFound