'use client'
import { SearchManufacturerProps } from '@/types'
import React, { Fragment } from 'react'
import {Combobox,Transition} from '@headlessui/react'
import Image from 'next/image'
import { useState } from 'react'
import { manufacturers } from '@/constants'

function SearchManufaturer({ manufacturer, setManufacturer}:SearchManufacturerProps) {
    const [query, setQuery] = useState('')
    const filteredManufacturers = query === '' ? manufacturers : manufacturers.filter((item) =>(
        item.toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, '')
    )))
  return (
    <div className='search-manufacturer'>
        <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className='relative w-full'>
                <Combobox.Button className={'absolute top-[14px] px-4'}>
                    <Image src={'/car-logo.svg'}
                    width={20}
                    height={20}
                    alt='car-logo'
                    />
                </Combobox.Button>
                <Combobox.Input className={'search-manufacturer__input'}
                placeholder='Toyota'
                displayValue={(manufacturer: string)=>manufacturer}
                onChange={(e)=> setQuery(e.target.value)}/>
                <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                afterLeave={()=>setQuery('')}>
                    <Combobox.Options>
                        {filteredManufacturers.map((item)=>(
                                <Combobox.Option 
                                key={item}
                                value={item}
                                className={({active}) => ` relative search-manufacturer__option ${active ? 'bg-primary-blue text-white':'text-gray-900'}`}
                                >
                                    {({selected, active})=>(
                                          <>
                                          <span
                                            className={`block truncate ${
                                              selected ? 'font-medium' : 'font-normal'
                                            }`}
                                          >
                                            {item}
                                          </span>
                                          {selected ? (
                                            <span
                                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                active ? 'text-white' : 'text-teal-600'
                                              }`}
                                            >
                                            </span>
                                          ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))
                        }
                    </Combobox.Options>
                </Transition>
                
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufaturer