import React, { useState } from 'react';
import img from '../assets/icons/usdc.svg';
const Solperp = () => {
    const [selecting, setSelecting] = useState(false);
    const [isBuyMode, setBuyMode] = useState(true);
    return (
        <
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
                        <div className='thin-scroll relative overflow-auto overflow-x-hidden rounded-lg bg-th-bkg-2 p-2.5 md:p-4 fadein-floating-element h-full px-1 py-0 md:px-4 md:py-4'>
                            <div>
                                <h2 className='flex justify-center mb-2.5 -mt-1 items-center text-base hidden md:flex'>
                                    SOL-PERP
                                    <span className='ml-2 rounded border border-th-primary px-1 py-0.5 text-xs text-th-primary'>
                                        20x
                                    </span>
                                </h2>
                                <div className='relative mb-3 md:-mt-2.5 md:border-b md:border-th-fgd-4'>
                                    <div className={`absolute hidden md:block ${isBuyMode ? 'translate-x-0 bg-th-green' : 'translate-x-full bg-th-red'} default-transition bottom-[-1px] left-0 h-0.5 w-1/2 transform`} />
                                    <nav
                                        className='-mb-px flex space-x-2'
                                        aria-label='Tabs'
                                    >
                                        <button
                                            className={`default-transition relative flex w-1/2 cursor-pointer 
                                                items-center justify-center whitespace-nowrap py-1 text-sm font-semibold hover:opacity-100 md:text-base
                                                border border-th-fgd-4 text-th-fgd-4 hover:border-th-green hover:text-th-green md:border-0 ${isBuyMode && 'border-th-green text-th-green'}
                                            `}
                                            onClick={() => setBuyMode(true)}
                                        >
                                            Buy
                                        </button>
                                        <button
                                            className={`default-transition relative flex w-1/2 cursor-pointer 
                                                items-center justify-center whitespace-nowrap py-1 text-sm font-semibold hover:opacity-100 md:text-base
                                                border border-th-fgd-4 text-th-fgd-4 hover:border-th-red hover:text-th-red md:border-0 ${!isBuyMode && 'border-th-red text-th-red'}
                                            `}
                                            onClick={() => setBuyMode(false)}
                                        >
                                            Sell

                                        </button>
                                    </nav>
                                </div>
                                <div className='grid grid-cols-12 gap-x-1.5 gap-y-0.5 text-left'>
                                    <div className='col-span-12 md:col-span-6'>
                                        <label className='text-xxs text-th-fgd-3'>
                                            Type
                                        </label>
                                        <div className='relative '>
                                            <button
                                                className='h-full w-full rounded-md bg-th-bkg-1 font-normal ring-1 ring-inset ring-th-bkg-4 hover:ring-th-fgd-4 focus:border-th-fgd-4 focus:outline-none'
                                                id='headlessui-listbox-button-9'
                                                type='button'
                                                aria-haspopup='true'
                                                aria-expanded='false'
                                                onClick={() => setSelecting(!selecting)}
                                            >
                                                <div
                                                    className='flex items-center justify-between space-x-2 p-2 text-th-fgd-1'
                                                    style={{ minHeight: '2.5rem' }}
                                                >
                                                    Limit
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        viewBox='0 0 20 20'
                                                        fill='currentColor'
                                                        aria-hidden='true'
                                                        className='default-transition h-5 w-5 flex-shrink-0 text-th-fgd-1 rotate-360 transform'
                                                    >
                                                        <path
                                                            fillRule='evenodd'
                                                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                                            clipRule='evenodd'
                                                        />
                                                    </svg>
                                                </div>
                                            </button>
                                            {selecting && (
                                                <ul
                                                    className='thin-scroll absolute left-0 z-20 mt-1 max-h-60 w-full origin-top-left overflow-auto rounded-md bg-th-bkg-3 p-2 text-th-fgd-1 outline-none '
                                                    aria-labelledby='headlessui-listbox-button-9'
                                                    aria-orientation='vertical'
                                                    id='headlessui-listbox-options-111'
                                                    role='listbox'
                                                    tabIndex={0}
                                                >
                                                    <li
                                                        id='headlessui-listbox-option-112'
                                                        role='option'
                                                        tabIndex={-1}
                                                        aria-selected='true'
                                                    >
                                                        <div className='default-transition text-th-fgd-1 hover:cursor-pointer hover:bg-th-bkg-3 hover:text-th-primary text-th-primary '>
                                                            Limit
                                                        </div>
                                                    </li>
                                                    <li
                                                        id='headlessui-listbox-option-113'
                                                        role='option'
                                                        tabIndex={-1}
                                                    >
                                                        <div className='default-transition text-th-fgd-1 hover:cursor-pointer hover:bg-th-bkg-3 hover:text-th-primary false '>
                                                            Market
                                                        </div>
                                                    </li>
                                                    <li
                                                        id='headlessui-listbox-option-114'
                                                        role='option'
                                                        tabIndex={-1}
                                                    >
                                                        <div className='default-transition text-th-fgd-1 hover:cursor-pointer hover:bg-th-bkg-3 hover:text-th-primary false '>
                                                            Stop Loss
                                                        </div>
                                                    </li>
                                                    <li
                                                        id='headlessui-listbox-option-115'
                                                        role='option'
                                                        tabIndex={-1}
                                                    >
                                                        <div className='default-transition text-th-fgd-1 hover:cursor-pointer hover:bg-th-bkg-3 hover:text-th-primary false '>
                                                            Stop Limit
                                                        </div>
                                                    </li>
                                                    <li
                                                        id='headlessui-listbox-option-116'
                                                        role='option'
                                                        tabIndex={-1}
                                                    >
                                                        <div className='default-transition text-th-fgd-1 hover:cursor-pointer hover:bg-th-bkg-3 hover:text-th-primary false '>
                                                            Take Profit
                                                        </div>
                                                    </li>
                                                    <li
                                                        id='headlessui-listbox-option-117'
                                                        role='option'
                                                        tabIndex={-1}
                                                    >
                                                        <div className='default-transition text-th-fgd-1 hover:cursor-pointer hover:bg-th-bkg-3 hover:text-th-primary false '>
                                                            Take Profit Limit
                                                        </div>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                    <div className='col-span-12 md:col-span-6'>
                                        <label className='text-xxs text-th-fgd-3'>
                                            Price
                                        </label>
                                        <div className='relative flex w-full'>
                                            <div className='absolute left-2 top-1/2 -translate-y-1/2 transform undefined'>
                                                <img
                                                    src={img}
                                                    alt=''
                                                    width={16}
                                                    height={16}
                                                />
                                            </div>
                                            <input
                                                className='undefined h-10 w-full flex-1 rounded-md border bg-th-bkg-1 px-2 pb-px
                                                    text-th-fgd-1 border-th-bkg-4 default-transition hover:border-th-fgd-4 
                                                    focus:border-th-fgd-4 focus:outline-none 
                                                    pl-7
                                                    '
                                                min={0}
                                                step='0.01'
                                                placeholder
                                                type='number'
                                                defaultValue
                                            />
                                        </div>
                                    </div>
                                    <div className='col-span-6'>
                                        <label className='text-xxs text-th-fgd-3'>
                                            Size
                                        </label>
                                        <div className='relative flex w-full'>
                                            <div className='absolute left-2 top-1/2 -translate-y-1/2 transform undefined'>
                                                <img
                                                    src={img}
                                                    alt=''
                                                    width={16}
                                                    height={16}
                                                />
                                            </div>
                                            <input
                                                className='undefined h-10 w-full flex-1 rounded-md border bg-th-bkg-1 px-2 pb-px
                                                        text-th-fgd-1 border-th-bkg-4 default-transition hover:border-th-fgd-4 
                                                        focus:border-th-fgd-4 focus:outline-none 
                                                        
                                                        pl-7
                                                        '
                                                min={0}
                                                step='0.01'
                                                type='number'
                                                defaultValue
                                            />
                                        </div>
                                    </div>
                                    <div className='col-span-6'>
                                        <label className='text-xxs text-th-fgd-3'>
                                            Quantity
                                        </label>
                                        <div className='relative flex w-full'>
                                            <div className='absolute left-2 top-1/2 -translate-y-1/2 transform undefined'>
                                                <img
                                                    src={img}
                                                    alt=''
                                                    width={16}
                                                    height={16}
                                                />
                                            </div>
                                            <input
                                                className='undefined h-10 w-full flex-1 rounded-md border bg-th-bkg-1 px-2 pb-px
                                                        text-th-fgd-1 border-th-bkg-4 default-transition hover:border-th-fgd-4 
                                                        focus:border-th-fgd-4 focus:outline-none 
                                                        
                                                        pl-7
                                                        '
                                                min={0}
                                                step='0.01'
                                                type='number'
                                                defaultValue
                                            />
                                        </div>
                                    </div>
                                    <div className='col-span-12 mt-1'>
                                        <div className='rounded-md bg-th-bkg-3'>
                                            <div className='relative flex'>
                                                <button
                                                    className='undefined default-transition relative w-1/2 cursor-pointer rounded-md px-2 py-1.5 text-center text-xs font-normal
                                                        text-th-fgd-2 hover:text-th-primary
                                                        '
                                                    style={{ width: '20%' }}
                                                >
                                                    10%
                                                </button>
                                                <button
                                                    className='undefined default-transition relative w-1/2 cursor-pointer rounded-md px-2 py-1.5 text-center text-xs font-normal
                                                        text-th-fgd-2 hover:text-th-primary
                                                        '
                                                    style={{ width: '20%' }}
                                                >
                                                    25%
                                                </button>
                                                <button
                                                    className='undefined default-transition relative w-1/2 cursor-pointer rounded-md px-2 py-1.5 text-center text-xs font-normal
                                                        text-th-fgd-2 hover:text-th-primary
                                                        '
                                                    style={{ width: '20%' }}
                                                >
                                                    50%
                                                </button>
                                                <button
                                                    className='undefined default-transition relative w-1/2 cursor-pointer rounded-md px-2 py-1.5 text-center text-xs font-normal
                                                        text-th-fgd-2 hover:text-th-primary
                                                        '
                                                    style={{ width: '20%' }}
                                                >
                                                    75%
                                                </button>
                                                <button
                                                    className='undefined default-transition relative w-1/2 cursor-pointer rounded-md px-2 py-1.5 text-center text-xs font-normal
                                                        text-th-fgd-2 hover:text-th-primary
                                                        '
                                                    style={{ width: '20%' }}
                                                >
                                                    100%
                                                </button>
                                            </div>
                                        </div>
                                        <div className='flex-wrap sm:flex'>
                                            <div className='flex'>
                                                <div className='mr-4 mt-3'>
                                                    <div
                                                        className='outline-none focus:outline-none'
                                                        aria-expanded='false'
                                                    >
                                                        <label className='default-transition flex cursor-pointer items-center text-th-fgd-3 hover:text-th-fgd-2'>
                                                            <input type='checkbox' />
                                                            <span className='ml-2 text-xs '>
                                                                POST
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className='mr-4 mt-3'>
                                                    <div
                                                        className='outline-none focus:outline-none'
                                                        aria-expanded='false'
                                                    >
                                                        <div className='flex items-center text-xs text-th-fgd-3'>
                                                            <label className='default-transition flex cursor-pointer items-center text-th-fgd-3 hover:text-th-fgd-2'>
                                                                <input type='checkbox' />
                                                                <span className='ml-2 text-xs '>
                                                                    IOC
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mr-4 mt-3'>
                                                <div
                                                    className='outline-none focus:outline-none'
                                                    aria-expanded='false'
                                                >
                                                    <label className='default-transition flex cursor-pointer items-center text-th-fgd-3 hover:text-th-fgd-2'>
                                                        <input type='checkbox' />
                                                        <span className='ml-2 text-xs '>
                                                            Reduce Only
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='mt-3'>
                                                <div
                                                    className='outline-none focus:outline-none'
                                                    aria-expanded='false'
                                                >
                                                    <label className='default-transition flex cursor-pointer items-center text-th-fgd-3 hover:text-th-fgd-2'>
                                                        <input type='checkbox' />
                                                        <span className='ml-2 text-xs '>
                                                            Slide
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-3 flex'>
                                            <button
                                                disabled
                                                className='flex-grow rounded-full px-6 py-2 font-bold text-white hover:brightness-[1.1] focus:outline-none disabled:cursor-not-allowed disabled:bg-th-bkg-4 disabled:text-th-fgd-4 disabled:hover:brightness-100 bg-th-red'
                                            >
                                                Sell SOL-PERP
                                            </button>
                                        </div>
                                        <div className='mt-2.5 flex flex-col items-center justify-center px-6 text-xs text-th-fgd-4 md:flex-row'>
                                            <div>Maker Fee: -0.03% </div>
                                            <span className='hidden md:block md:px-1'>
                                                |
                                            </span>
                                            <div> Taker Fee: 0.05%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className='react-resizable-handle react-resizable-handle-se' />
        </>
    );
};

export default Solperp;
