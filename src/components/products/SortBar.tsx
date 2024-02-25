import React from 'react'

const SortBar = () => {
  return (
    <div className='hidden md:flex flex-col md:flex-row gap-6 text-xs border-b py-2 my-8 font-bold'>

        <div>ORDINA PER:</div>

        <div className='uppercase'>Popolarità</div>
        <div className='uppercase'>Prezzo minore</div>
        <div className='uppercase'>Prezzo maggiore</div>
        <div className='uppercase'>Nome</div>


    </div>
  )
}

export default SortBar