import React from 'react'
import Chip from '@mui/material/Chip';
import ProgressBar from './ProgressBar';
const PerformerCard = ({title}) => {
  return (
    <div className='shadow-gray-500 bg-[#FFFFFF] shadow-sm rounded-3xl inline-block w-[400px] m-5'>
        <div className='p-5'>
        <h1 className="font-bold text-[#4285F4]">{title}</h1>
        <div className='flex justify-between items-center mt-2'>
             
        <Chip label="Mid Cap Fund" variant="outlined" />
        
        <div className='w-40'>
            <h1>Since Inception</h1>
            <ProgressBar  progress='20.24'  height={10} />
            <h1 className='text-[#23B123]'>20.24%</h1>
        </div>
        </div>
        <div className='flex justify-between items-center mt-2'>
            
            <Chip label="Handpicked Collections" variant="outlined" />
            
            <div className='w-40'>
                <h1>3 yrs return</h1>
                <ProgressBar bgcolor="#4050E7" progress='34'  height={10} />
                <h1 className='text-[#23B123]'>34.00%</h1>
            </div>
            </div>
            <div className='flex justify-between items-center mt-2'>
            
            <Chip label="Equity" variant="outlined" />
            
            <div className='w-40'>
                <h1>5 yrs return</h1>
                <ProgressBar bgcolor="#4050E7" progress='19.49'  height={10} />
                <h1 className='text-[#23B123]'>19.49%</h1>
            </div>
            </div>
        
        </div>
    </div>
  )
}

export default PerformerCard