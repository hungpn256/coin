
import React from 'react';

const Orderbooks = () => {
    return (
        <div
            className='react-grid-item cssTransforms react-resizable-hide react-resizable'
            style={{
                width: '383px',
                height: '415px',
                position: 'absolute',
                transform: 'translate(795px, 10px)',
            }}
        >
            <div className='flipcard'>
                <div
                    className='relative h-full w-full text-center'
                    style={{
                        transition: 'transform 0.8s ease-out 0s',
                        transformStyle: 'preserve-3d',
                        transform: 'rotateY(0deg)',
                    }}
                >
                    <div className='flipcard-front h-full w-full'>
                        <div className='thin-scroll relative overflow-auto overflow-x-hidden rounded-lg bg-th-bkg-2 p-2.5 md:p-4 fadein-floating-element h-full'>
                            <div className='flex items-center justify-between pb-2.5'>
                                <div className='relative flex'>
                                    <div
                                        className='outline-none focus:outline-none'
                                        aria-expanded='false'
                                    >
                                        <button className='flex h-7 w-7 items-center justify-center rounded-full bg-th-bkg-4 hover:text-th-primary focus:outline-none'>
                                            <svg
                                                className='h-4 w-4'
                                                xmlns='http://www.w3.org/2000/svg'
                                                width={24}
                                                height={24}
                                                viewBox='0 0 24 24'
                                                fill='none'
                                                stroke='currentColor'
                                                strokeWidth={2}
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                            >
                                                <line x1={14} y1={5} x2={16} y2={5} />
                                                <line x1={14} y1={10} x2={18} y2={10} />
                                                <line x1={14} y1={15} x2={20} y2={15} />
                                                <line x1={14} y1={20} x2={22} y2={20} />
                                                <line x1={10} y1={5} x2={8} y2={5} />
                                                <line x1={10} y1={10} x2={6} y2={10} />
                                                <line x1={10} y1={15} x2={4} y2={15} />
                                                <line x1={10} y1={20} x2={2} y2={20} />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <h2 className='flex justify-center mb-0 -mt-1 items-center text-base '>
                                    Orderbook
                                </h2>
                                <div className='relative flex'>
                                    <div
                                        className='outline-none focus:outline-none'
                                        aria-expanded='false'
                                    >
                                        <button className='flex h-7 w-7 items-center justify-center rounded-full bg-th-bkg-4 hover:text-th-primary focus:outline-none'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 20 20'
                                                fill='currentColor'
                                                aria-hidden='true'
                                                className='h-4 w-4'
                                            >
                                                <path d='M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z' />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-3 flex items-center justify-end'>
                                <div className='flex items-center justify-center font-bold md:w-1/3 md:text-base text-th-green'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 20 20'
                                        fill='currentColor'
                                        aria-hidden='true'
                                        className='mr-1 h-4 w-4 text-th-green'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    102.37
                                </div>
                                <div className='relative relative flex w-1/3 flex-col items-end'>
                                    <button
                                        className='rounded border border-th-bkg-4 bg-th-bkg-1 py-0.5 font-normal hover:border-th-fgd-4 focus:border-th-fgd-4 focus:outline-none'
                                        id='headlessui-listbox-button-8'
                                        type='button'
                                        aria-haspopup='true'
                                        aria-expanded='false'
                                    >
                                        <div className='flex items-center justify-between space-x-1 pr-1 pl-2 text-xs'>
                                            <span>0.01</span>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 20 20'
                                                fill='currentColor'
                                                aria-hidden='true'
                                                className='default-transition h-4 w-4 text-th-fgd-1 rotate-360 transform'
                                            >
                                                <path
                                                    fillRule='evenodd'
                                                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                                    clipRule='evenodd'
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='mb-2 flex justify-between text-xs text-th-fgd-4'>
                                <div className='text-left'>Size (SOL)</div>
                                <div className='text-center'>Price (USDC)</div>
                                <div className='text-right'>Size (SOL)</div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/2'>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:leading-6 text-th-fgd-2'>
                                                34.00
                                            </div>
                                            <div className='z-10 text-xs leading-5 md:pr-4 md:leading-6 text-th-green'>
                                                102.37
                                            </div>
                                        </div>
                                        <div
                                            className='absolute right-0 bg-th-green-muted'
                                            style={{
                                                textAlign: 'right',
                                                height: '100%',
                                                width: '1%',
                                            }}
                                        />
                                    </div>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:leading-6 text-th-fgd-2'>
                                                86.79
                                            </div>
                                            <div className='z-10 text-xs leading-5 md:pr-4 md:leading-6 text-th-green'>
                                                102.33
                                            </div>
                                        </div>
                                        <div
                                            className='absolute right-0 bg-th-green-muted'
                                            style={{
                                                textAlign: 'right',
                                                height: '100%',
                                                width: '3%',
                                            }}
                                        />
                                    </div>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:leading-6 text-th-fgd-2'>
                                                469.50
                                            </div>
                                            <div className='z-10 text-xs leading-5 md:pr-4 md:leading-6 text-th-green'>
                                                102.32
                                            </div>
                                        </div>
                                        <div
                                            className='absolute right-0 bg-th-green-muted'
                                            style={{
                                                textAlign: 'right',
                                                height: '100%',
                                                width: '13%',
                                            }}
                                        />
                                    </div>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:leading-6 text-th-fgd-2'>
                                                1.50
                                            </div>
                                            <div className='z-10 text-xs leading-5 md:pr-4 md:leading-6 text-th-green'>
                                                102.31
                                            </div>
                                        </div>
                                        <div
                                            className='absolute right-0 bg-th-green-muted'
                                            style={{
                                                textAlign: 'right',
                                                height: '100%',
                                                width: '13%',
                                            }}
                                        />
                                    </div>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:leading-6 text-th-fgd-2'>
                                                0.20
                                            </div>
                                            <div className='z-10 text-xs leading-5 md:pr-4 md:leading-6 text-th-green'>
                                                102.30
                                            </div>
                                        </div>
                                        <div
                                            className='absolute right-0 bg-th-green-muted'
                                            style={{
                                                textAlign: 'right',
                                                height: '100%',
                                                width: '13%',
                                            }}
                                        />
                                    </div>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:leading-6 text-th-fgd-2'>
                                                260.10
                                            </div>
                                            <div className='z-10 text-xs leading-5 md:pr-4 md:leading-6 text-th-green'>
                                                102.29
                                            </div>
                                        </div>
                                        <div
                                            className='absolute right-0 bg-th-green-muted'
                                            style={{
                                                textAlign: 'right',
                                                height: '100%',
                                                width: '19%',
                                            }}
                                        />
                                    </div>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:leading-6 text-th-fgd-2'>
                                                41.34
                                            </div>
                                            <div className='z-10 text-xs leading-5 md:pr-4 md:leading-6 text-th-green'>
                                                102.28
                                            </div>
                                        </div>
                                        <div
                                            className='absolute right-0 bg-th-green-muted'
                                            style={{
                                                textAlign: 'right',
                                                height: '100%',
                                                width: '20%',
                                            }}
                                        />
                                    </div>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:leading-6 text-th-fgd-2'>
                                                228.18
                                            </div>
                                            <div className='z-10 text-xs leading-5 md:pr-4 md:leading-6 text-th-green'>
                                                102.27
                                            </div>
                                        </div>
                                        <div
                                            className='absolute right-0 bg-th-green-muted'
                                            style={{
                                                textAlign: 'right',
                                                height: '100%',
                                                width: '25%',
                                            }}
                                        />
                                    </div>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:leading-6 text-th-fgd-2'>
                                                946.11
                                            </div>
                                            <div className='z-10 text-xs leading-5 md:pr-4 md:leading-6 text-th-green'>
                                                102.23
                                            </div>
                                        </div>
                                        <div
                                            className='absolute right-0 bg-th-green-muted'
                                            style={{
                                                textAlign: 'right',
                                                height: '100%',
                                                width: '46%',
                                            }}
                                        />
                                    </div>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:leading-6 text-th-fgd-2'>
                                                294.88
                                            </div>
                                            <div className='z-10 text-xs leading-5 md:pr-4 md:leading-6 text-th-green'>
                                                102.22
                                            </div>
                                        </div>
                                        <div
                                            className='absolute right-0 bg-th-green-muted'
                                            style={{
                                                textAlign: 'right',
                                                height: '100%',
                                                width: '52%',
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='w-1/2'>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div
                                            className='absolute left-0 bg-th-red-muted'
                                            style={{
                                                textAlign: 'left',
                                                height: '100%',
                                                width: '6%',
                                            }}
                                        />
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:pl-5 md:leading-6 text-th-red brightness-125'>
                                                102.46
                                            </div>
                                            <div className='z-10 text-xs text-th-fgd-2'>
                                                292.95
                                            </div>
                                        </div>
                                    </div>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div
                                            className='absolute left-0 bg-th-red-muted'
                                            style={{
                                                textAlign: 'left',
                                                height: '100%',
                                                width: '12%',
                                            }}
                                        />
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:pl-5 md:leading-6 text-th-red brightness-125'>
                                                102.47
                                            </div>
                                            <div className='z-10 text-xs text-th-fgd-2'>
                                                258.70
                                            </div>
                                        </div>
                                    </div>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div
                                            className='absolute left-0 bg-th-red-muted'
                                            style={{
                                                textAlign: 'left',
                                                height: '100%',
                                                width: '33%',
                                            }}
                                        />
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:pl-5 md:leading-6 text-th-red brightness-125'>
                                                102.48
                                            </div>
                                            <div className='z-10 text-xs text-th-fgd-2'>
                                                946.11
                                            </div>
                                        </div>
                                    </div>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div
                                            className='absolute left-0 bg-th-red-muted'
                                            style={{
                                                textAlign: 'left',
                                                height: '100%',
                                                width: '34%',
                                            }}
                                        />
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:pl-5 md:leading-6 text-th-red brightness-125'>
                                                102.49
                                            </div>
                                            <div className='z-10 text-xs text-th-fgd-2'>
                                                52.34
                                            </div>
                                        </div>
                                    </div>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div
                                            className='absolute left-0 bg-th-red-muted'
                                            style={{
                                                textAlign: 'left',
                                                height: '100%',
                                                width: '34%',
                                            }}
                                        />
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:pl-5 md:leading-6 text-th-red brightness-125'>
                                                102.50
                                            </div>
                                            <div className='z-10 text-xs text-th-fgd-2'>
                                                0.40
                                            </div>
                                        </div>
                                    </div>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div
                                            className='absolute left-0 bg-th-red-muted'
                                            style={{
                                                textAlign: 'left',
                                                height: '100%',
                                                width: '37%',
                                            }}
                                        />
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:pl-5 md:leading-6 text-th-red brightness-125'>
                                                102.51
                                            </div>
                                            <div className='z-10 text-xs text-th-fgd-2'>
                                                113.52
                                            </div>
                                        </div>
                                    </div>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div
                                            className='absolute left-0 bg-th-red-muted'
                                            style={{
                                                textAlign: 'left',
                                                height: '100%',
                                                width: '38%',
                                            }}
                                        />
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:pl-5 md:leading-6 text-th-red brightness-125'>
                                                102.52
                                            </div>
                                            <div className='z-10 text-xs text-th-fgd-2'>
                                                50.72
                                            </div>
                                        </div>
                                    </div>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div
                                            className='absolute left-0 bg-th-red-muted'
                                            style={{
                                                textAlign: 'left',
                                                height: '100%',
                                                width: '42%',
                                            }}
                                        />
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:pl-5 md:leading-6 text-th-red brightness-125'>
                                                102.53
                                            </div>
                                            <div className='z-10 text-xs text-th-fgd-2'>
                                                192.19
                                            </div>
                                        </div>
                                    </div>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div
                                            className='absolute left-0 bg-th-red-muted'
                                            style={{
                                                textAlign: 'left',
                                                height: '100%',
                                                width: '48%',
                                            }}
                                        />
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:pl-5 md:leading-6 text-th-red brightness-125'>
                                                102.58
                                            </div>
                                            <div className='z-10 text-xs text-th-fgd-2'>
                                                251.07
                                            </div>
                                        </div>
                                    </div>
                                    <div className='relative flex cursor-pointer justify-between text-sm leading-6'>
                                        <div
                                            className='absolute left-0 bg-th-red-muted'
                                            style={{
                                                textAlign: 'left',
                                                height: '100%',
                                                width: '48%',
                                            }}
                                        />
                                        <div className='flex w-full items-center justify-between hover:font-semibold'>
                                            <div className='z-10 text-xs leading-5 md:pl-5 md:leading-6 text-th-red brightness-125'>
                                                102.60
                                            </div>
                                            <div className='z-10 text-xs text-th-fgd-2'>
                                                0.20
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-0 mt-3 flex justify-between rounded-md bg-th-bkg-1 p-2 text-xs'>
                                <div className='hidden text-th-fgd-3 sm:block'>
                                    Spread
                                </div>
                                <div className='text-th-fgd-1'>0.09</div>
                                <div className='text-th-fgd-1'>0.09%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className='react-resizable-handle react-resizable-handle-se' />
        </div>
    );
}

export default Orderbooks;
