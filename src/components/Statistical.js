import React from 'react';
import img from '../assets/icons/eth.svg'
const Statistical = () => {
    return (
        <div className='pt-2'>
            <div className='relative flex flex-col md:px-3 md:pb-2 md:pt-3 lg:flex-row lg:items-center lg:justify-between'>
                <div className='flex flex-col lg:flex-row lg:items-center'>
                    <div className='hidden md:block md:pb-4 md:pr-6 lg:pb-0'>
                        <div className='flex items-center'>
                            <div>
                                <div className='relative flex flex-col'>
                                    <button
                                        className='border border-th-bkg-3 p-0.5 transition-none hover:border-th-bkg-4 focus:border-th-bkg-4 focus:outline-none false'
                                        id='headlessui-popover-button-18'
                                        type='button'
                                        aria-expanded='false'
                                    >
                                        <div className='flex items-center pl-2'>
                                            <img
                                                alt=''
                                                width='24'
                                                height='24'
                                                src={img}
                                                className='mr-2.5'
                                            />
                                            <div className='pr-0.5 text-xl font-semibold'>
                                                ETH
                                            </div>
                                            <span className='text-xl text-th-fgd-4'>-</span>
                                            <div className='pl-0.5 text-xl font-semibold'>
                                                PERP
                                            </div>
                                            <div className='flex h-10 w-8 items-center justify-center rounded-none'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    viewBox='0 0 20 20'
                                                    fill='currentColor'
                                                    aria-hidden='true'
                                                    className='default-transition h-6 w-6 rotate-360 transform'
                                                >
                                                    <path
                                                        fill-rule='evenodd'
                                                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                                        clip-rule='evenodd'
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-flow-row grid-cols-1 gap-2 md:grid-cols-3 lg:grid-flow-col lg:grid-cols-none lg:grid-rows-1 lg:gap-6'>
                        <div className='flex items-center justify-between md:block'>
                            <div className='text-th-fgd-3 md:pb-0.5 md:text-[0.65rem]'>
                                Oracle Price
                            </div>
                            <div className='text-th-fgd-1 md:text-xs'>3,207.4</div>
                        </div>
                        <div className='flex items-center justify-between md:block'>
                            <div className='text-th-fgd-3 md:pb-0.5 md:text-[0.65rem]'>
                                24hr Change
                            </div>
                            <div className='md:text-xs text-th-red'>-1.50%</div>
                        </div>
                        <div className='flex items-center justify-between md:block'>
                            <div className='text-th-fgd-3 md:pb-0.5 md:text-[0.65rem]'>
                                24hr Volume
                            </div>
                            <div className='text-th-fgd-1 md:text-xs'>$7,086,018</div>
                        </div>
                        <div className='flex items-center justify-between md:block'>
                            <div className='flex items-center text-th-fgd-3 md:pb-0.5 md:text-[0.65rem]'>
                                1h Funding Rate
                                <div
                                    className='outline-none focus:outline-none'
                                    aria-expanded='false'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke-width='2'
                                        stroke='currentColor'
                                        aria-hidden='true'
                                        className='ml-1.5 h-4 w-4 text-th-fgd-3 hover:cursor-help'
                                    >
                                        <path
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div className='text-th-fgd-1 md:text-xs'>
                                -0.0044% (-38.21% APR)
                            </div>
                        </div>
                        <div className='flex items-center justify-between md:block'>
                            <div className='text-th-fgd-3 md:pb-0.5 md:text-[0.65rem]'>
                                Open Interest
                            </div>
                            <div className='flex items-center text-th-fgd-1 md:text-xs'>
                                $1,700,672
                                <div
                                    className='outline-none focus:outline-none'
                                    aria-expanded='false'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke-width='2'
                                        stroke='currentColor'
                                        aria-hidden='true'
                                        className='ml-1.5 h-4 w-4 text-th-fgd-3 hover:cursor-help'
                                    >
                                        <path
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-between md:block'>
                            <div className='text-left text-th-fgd-3 md:pb-0.5 md:text-[0.65rem] xl:text-center'>
                                Daily Range
                            </div>
                            <div className='flex items-center justify-between md:block'>
                                <div className='flex items-center'>
                                    <div className='pr-2 text-th-fgd-2 md:text-xs'>
                                        $3,173.80
                                    </div>
                                    <div className='flex h-1.5 w-12 rounded bg-th-bkg-3 sm:w-16'>
                                        <div
                                            className='flex rounded bg-th-primary'
                                            style={{ width: '24.5942%' }}
                                        ></div>
                                    </div>
                                    <div className='pl-2 text-th-fgd-2 md:text-xs'>
                                        $3,310.50
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute right-0 bottom-0 flex items-center justify-end space-x-2 sm:bottom-auto lg:right-3'>
                    <div id='layout-tip'>
                        <div className='flex'>
                            <div className=' relative flex cursor-pointer'>
                                <div
                                    className='outline-none focus:outline-none'
                                    aria-expanded='false'
                                >
                                    <button
                                        className='undefined flex h-7 w-7 items-center justify-center rounded-full bg-th-bkg-4 text-th-fgd-1 hover:text-th-primary focus:outline-none disabled:cursor-not-allowed 
      disabled:bg-th-bkg-4 disabled:text-th-fgd-4 disabled:hover:text-th-fgd-4'
                                    >
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke-width='2'
                                            stroke='currentColor'
                                            aria-hidden='true'
                                            className='h-4 w-4'
                                        >
                                            <path
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='data-refresh-tip'></div>
                </div>
            </div>
        </div>
    );
};

export default Statistical;
