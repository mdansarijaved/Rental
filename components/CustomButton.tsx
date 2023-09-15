'use client'; 

import { CustomButtonProps } from '@/types';
import Image from 'next/image';
import React from 'react'

function CustomButton({title , containerStyles, handleClick,btnType,rightIcon,isDisabled}: CustomButtonProps) {
  return (
    <button
    disabled={false}
    type={btnType || 'button'}
    onClick={handleClick}
    className={`custom-btn ${containerStyles}}`}
    >
        <span className={`flex-1`}>{title}</span>
        {rightIcon && (
          <div className='relative w-6 h-6'>
            <Image src={rightIcon}  fill alt="right arrow" />
          </div>
        )}
    </button>
  )
}

export default CustomButton