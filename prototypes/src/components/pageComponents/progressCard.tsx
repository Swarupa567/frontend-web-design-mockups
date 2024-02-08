import React from 'react';
import {Card,CardHeader, CardTitle, CardDescription,CardContent, CardFooter} from '@/components/ui/card';

const ProgressCard = () => {
  return (
    <div className='items-center mt-22 text-[#000] text-md'>
        <Card className='bg-[#D1D0F5] text-center w-[29%] flex flex-col justify-center items-center m-auto right-[30rem] absolute top-0 mt-20 p-[90px]'>
            <CardHeader>
            </CardHeader>
        </Card>
        <Card className='text-center w-[27%] flex flex-col justify-center items-start m-auto relative mt-[8rem] p-[39px]'>
            <CardHeader>
                <CardTitle className='items-start font-roboto'>Your Progress</CardTitle>
            </CardHeader>
            <CardContent className=" pl-8 font-roboto">
                <CardDescription className='flex justify-between items-start text-[#000]'>
                    <div className='w-16 h-16 border-4 border-solid border-[#D5D4F0] rounded-full flex items-center justify-center font-bold text-[18px]'>93%</div>
                    <div className='pl-[18px] pt-[12px]'>
                    <p className='font-bold'>32 of 42 complete</p>
                    <p className='font-medium text-[14px]'>Finish course</p>
                    </div>
               
                    </CardDescription>
            </CardContent>
        </Card>
    </div>
  );
};

export default ProgressCard;