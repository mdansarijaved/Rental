'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/utils';

interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}

const ShowMore = ({pageNumber,isNext}:ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () =>{
        const newlimit = (pageNumber+1) * 10 ;
        const newPathName = updateSearchParams('limit', `${newlimit}`  )

        router.push(newPathName);
    }
  return (
    <div className='w-full gap-5 flex-center mt-10'>
        {!isNext && (
           <div className='text-white'>           <CustomButton  title='Show More' btnType='button' containerStyles='bg-primary-blue rounded-full ' handleClick={handleNavigation} />
           </div> 
        )}

    </div>
  )
}

export default ShowMore