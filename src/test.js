import './App.css';
import Statistical from './components/Statistical';

function App() {
  return (
    <>
      <div
        className='react-grid-item cssTransforms react-resizable-hide react-resizable'
        style={{
          width: '383px',
          height: '340px',
          position: 'absolute',
          transform: 'translate(1187px, 435px)',
        }}
      >
        <div className='thin-scroll relative overflow-auto overflow-x-hidden rounded-lg bg-th-bkg-2 p-2.5 md:p-4 h-full'>
          <div className='absolute top-0 left-0 z-10 h-full w-full'>
            <div className='relative z-10 flex h-full flex-col items-center justify-center'>
              <div className='flex flex-col items-center rounded-lg px-4 pb-2 text-th-fgd-1'>
                <div className='mb-1 h-6 w-6 text-th-primary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
                    />
                  </svg>
                </div>
                <h2 className='mb-1 text-base'>Connect Wallet</h2>
                <button className='whitespace-nowrap rounded-full bg-th-bkg-button px-6 py-2 font-bold text-th-fgd-1 hover:brightness-[1.1] focus:outline-none disabled:cursor-not-allowed disabled:bg-th-bkg-4 disabled:text-th-fgd-4 disabled:hover:brightness-100 mt-2'>
                  Connect
                </button>
              </div>
            </div>
            <div className='absolute top-0 left-0 h-full w-full rounded-lg bg-th-bkg-2 opacity-50' />
          </div>
          <div
            className='blur-sm filter'
            id='account-details-tip'
          >
            <h2 className='flex justify-center mb-2.5 -mt-1 items-center text-base '>
              Account
            </h2>
            <div>
              <div>
                <div className='flex justify-between pb-2'>
                  <div className='font-normal leading-4 text-th-fgd-3'>
                    Equity
                  </div>
                  <div className='text-th-fgd-1'>
                    <div className='h-5 w-10 animate-pulse rounded-sm bg-th-bkg-3' />
                  </div>
                </div>
                <div className='flex justify-between pb-2'>
                  <div className='font-normal leading-4 text-th-fgd-3'>
                    Leverage
                  </div>
                  <div className='text-th-fgd-1'>
                    <div className='h-5 w-10 animate-pulse rounded-sm bg-th-bkg-3' />
                  </div>
                </div>
                <div className='flex justify-between pb-2'>
                  <div className='font-normal leading-4 text-th-fgd-3'>
                    Collateral Available
                  </div>
                  <div className='text-th-fgd-1'>
                    <div className='h-5 w-10 animate-pulse rounded-sm bg-th-bkg-3' />
                  </div>
                </div>
                <div className='flex justify-between pb-2'>
                  <div className='font-normal leading-4 text-th-fgd-3'>
                    SOL-PERP Margin Available
                  </div>
                  <div className='text-th-fgd-1'>0.00</div>
                </div>
                <div className='flex justify-between pb-2'>
                  <div className='font-normal leading-4 text-th-fgd-3'>
                    SOL-PERP Est. Liq. Price
                  </div>
                  <div className='text-th-fgd-1'>N/A</div>
                </div>
                <div className='flex justify-between pb-2'>
                  <div
                    className='outline-none focus:outline-none'
                    aria-expanded='false'
                  >
                    <div className='default-transition cursor-help border-b border-dashed border-th-fgd-3 border-opacity-20 font-normal leading-4 text-th-fgd-3 hover:border-th-bkg-2'>
                      MNGO Rewards
                    </div>
                  </div>
                  <div className='flex items-center text-th-fgd-1'>
                    <div className='h-5 w-10 animate-pulse rounded-sm bg-th-bkg-3' />
                    <button
                      disabled
                      className='border-0 font-bold text-th-fgd-2 underline hover:no-underline hover:opacity-60 focus:outline-none disabled:cursor-not-allowed disabled:underline disabled:opacity-60 ml-2 text-xs text-th-primary disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:underline'
                    >
                      Claim
                    </button>
                  </div>
                </div>
              </div>
              <div className='my-2 flex items-center rounded border border-th-bkg-4 p-2.5 sm:my-1'>
                <div className='flex items-center pr-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                    className='mr-1.5 h-5 w-5 text-th-primary'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>
                    <div
                      className='outline-none focus:outline-none'
                      aria-expanded='false'
                    >
                      <div className='default-transition cursor-help border-b border-dashed border-th-fgd-3 border-opacity-20 font-normal leading-4 text-th-fgd-3 hover:border-th-bkg-2'>
                        Health
                      </div>
                    </div>
                  </span>
                </div>
                <div className='flex h-1.5 flex-grow rounded bg-th-bkg-4'>
                  <div
                    className='flex rounded bg-th-green'
                    style={{ width: '100%' }}
                  />
                </div>
                <div className='pl-2 text-right'>100.00%</div>
              </div>
              <div className='grid grid-cols-2 grid-rows-1 gap-4 pt-2 sm:pt-2'>
                <button
                  disabled
                  className='whitespace-nowrap rounded-full bg-th-bkg-button px-6 py-2 font-bold text-th-fgd-1 hover:brightness-[1.1] focus:outline-none disabled:cursor-not-allowed disabled:bg-th-bkg-4 disabled:text-th-fgd-4 disabled:hover:brightness-100 w-full'
                >
                  <span>Deposit</span>
                </button>
                <button
                  disabled
                  className='whitespace-nowrap rounded-full bg-th-bkg-button px-6 py-2 font-bold text-th-fgd-1 hover:brightness-[1.1] focus:outline-none disabled:cursor-not-allowed disabled:bg-th-bkg-4 disabled:text-th-fgd-4 disabled:hover:brightness-100 w-full'
                >
                  <span>Withdraw</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <span className='react-resizable-handle react-resizable-handle-se' />
      </div>
      <div
        className='react-grid-item cssTransforms react-resizable-hide react-resizable'
        style={{
          width: '383px',
          height: '315px',
          position: 'absolute',
          transform: 'translate(1187px, 785px)',
        }}
      >
        <div className='thin-scroll relative overflow-auto overflow-x-hidden rounded-lg bg-th-bkg-2 p-2.5 md:p-4 h-full'>
          <div className='absolute top-0 left-0 z-10 h-full w-full'>
            <div className='relative z-10 flex h-full flex-col items-center justify-center'>
              <div className='flex flex-col items-center rounded-lg px-4 pb-2 text-th-fgd-1'>
                <div className='mb-1 h-6 w-6 text-th-primary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
                    />
                  </svg>
                </div>
                <h2 className='mb-1 text-base'>Connect Wallet</h2>
                <button className='whitespace-nowrap rounded-full bg-th-bkg-button px-6 py-2 font-bold text-th-fgd-1 hover:brightness-[1.1] focus:outline-none disabled:cursor-not-allowed disabled:bg-th-bkg-4 disabled:text-th-fgd-4 disabled:hover:brightness-100 mt-2'>
                  Connect
                </button>
              </div>
            </div>
            <div className='absolute top-0 left-0 h-full w-full rounded-lg bg-th-bkg-2 opacity-50' />
          </div>
          <div className='blur-sm filter' id='perp-positions-tip'>
            <h2 className='flex justify-center mb-2.5 -mt-1 items-center text-base '>
              SOL-PERP Position
            </h2>
            <div className='flex items-center justify-between pb-2'>
              <div className='font-normal leading-4 text-th-fgd-3'>
                Side
              </div>
              <div className='h-5 w-10 animate-pulse rounded-sm bg-th-bkg-3' />
            </div>
            <div className='flex justify-between pb-2'>
              <div className='font-normal leading-4 text-th-fgd-3'>
                Position Size
              </div>
              <div className='text-th-fgd-1'>
                <div className='h-5 w-10 animate-pulse rounded-sm bg-th-bkg-3' />
              </div>
            </div>
            <div className='flex justify-between pb-2'>
              <div className='font-normal leading-4 text-th-fgd-3'>
                Notional Size
              </div>
              <div className='text-th-fgd-1'>
                <div className='h-5 w-10 animate-pulse rounded-sm bg-th-bkg-3' />
              </div>
            </div>
            <div className='flex justify-between pb-2'>
              <div className='font-normal leading-4 text-th-fgd-3'>
                Avg Entry Price
              </div>
              <div className='text-th-fgd-1'>
                <div className='h-5 w-10 animate-pulse rounded-sm bg-th-bkg-3' />
              </div>
            </div>
            <div className='flex justify-between pb-2'>
              <div className='font-normal leading-4 text-th-fgd-3'>
                Break-even Price
              </div>
              <div className='text-th-fgd-1'>
                <div className='h-5 w-10 animate-pulse rounded-sm bg-th-bkg-3' />
              </div>
            </div>
            <div className='flex justify-between pb-2'>
              <div
                className='outline-none focus:outline-none'
                aria-expanded='false'
              >
                <div className='default-transition inline-block cursor-help border-b border-dashed border-th-fgd-3 border-opacity-20 hover:border-th-bkg-2 font-normal leading-4 text-th-fgd-3'>
                  Redeemable Value
                </div>
              </div>
              <div className='flex items-center'>
                <div className='h-5 w-10 animate-pulse rounded-sm bg-th-bkg-3' />
                <button
                  disabled
                  className='border-0 font-bold text-th-fgd-2 underline hover:no-underline hover:opacity-60 focus:outline-none disabled:cursor-not-allowed disabled:underline disabled:opacity-60 ml-2 text-xs text-th-primary disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:underline'
                >
                  Redeem
                </button>
              </div>
            </div>
          </div>
        </div>
        <span className='react-resizable-handle react-resizable-handle-se' />
      </div>
    </>
  );
}

export default App;