import './App.css';
import Statistical from './components/Statistical';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import Orderbooks from './components/OrderBooks';
import Solperp from './components/Solperp';

function App() {
  return (
    <div className='bg-primary'>
      <div className='container mx-auto '>
        <div className='text-white'>
          <Statistical />
        </div>
        <div
          className='react-grid-layout'
          style={{ height: '1160px' }}
        >
          <div
            className='react-grid-item cssTransforms react-resizable-hide react-resizable'
            style={{
              width: '775px',
              height: '665px',
              position: 'absolute',
              transform: 'translate(10px, 10px)',
            }}
          >
            <div className='thin-scroll relative overflow-auto overflow-x-hidden rounded-lg bg-th-bkg-2 p-2.5 md:p-4 h-full pl-0 md:pl-0 md:pr-1 md:pb-1 md:pt-2.5'>
              <div
                id='tv_chart_container'
                className='tradingview-chart'
              >
                <TradingViewWidget
                  symbol="NASDAQ:AAPL"
                  theme={Themes.DARK}
                  locale="fr"
                  autosize
                />
              </div>
            </div>
            <span className='react-resizable-handle react-resizable-handle-se' />
          </div>
          <Orderbooks />
          <Solperp />

          <div
            className='react-grid-item cssTransforms react-resizable-hide react-resizable'
            style={{
              width: '383px',
              height: '240px',
              position: 'absolute',
              transform: 'translate(795px, 435px)',
            }}
          >
            <div className='thin-scroll relative overflow-auto overflow-x-hidden rounded-lg bg-th-bkg-2 p-2.5 md:p-4 h-full'>
              <h2 className='flex justify-center mb-2.5 -mt-1 items-center text-base '>
                Recent Trades
              </h2>
              <div className='mb-2 grid grid-cols-3 text-xs text-th-fgd-4'>
                <div>Price (USDC) </div>
                <div className='text-right'>Size (SOL)</div>
                <div className='text-right'>Time</div>
              </div>
              <div className='text-xs'>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-red'>102.42</div>
                  <div className='text-right text-th-fgd-3'>9.06</div>
                  <div className='text-right text-th-fgd-3'>
                    10:40:12 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.47</div>
                  <div className='text-right text-th-fgd-3'>6.86</div>
                  <div className='text-right text-th-fgd-3'>
                    10:38:59 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.47</div>
                  <div className='text-right text-th-fgd-3'>9.07</div>
                  <div className='text-right text-th-fgd-3'>
                    10:38:54 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.44</div>
                  <div className='text-right text-th-fgd-3'>5.61</div>
                  <div className='text-right text-th-fgd-3'>
                    10:38:48 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.43</div>
                  <div className='text-right text-th-fgd-3'>3.46</div>
                  <div className='text-right text-th-fgd-3'>
                    10:38:48 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-red'>102.37</div>
                  <div className='text-right text-th-fgd-3'>0.1</div>
                  <div className='text-right text-th-fgd-3'>
                    10:38:43 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-red'>102.39</div>
                  <div className='text-right text-th-fgd-3'>0.1</div>
                  <div className='text-right text-th-fgd-3'>
                    10:38:10 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-red'>102.40</div>
                  <div className='text-right text-th-fgd-3'>
                    292.83
                  </div>
                  <div className='text-right text-th-fgd-3'>
                    10:38:09 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.40</div>
                  <div className='text-right text-th-fgd-3'>0.2</div>
                  <div className='text-right text-th-fgd-3'>
                    10:37:54 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-red'>102.39</div>
                  <div className='text-right text-th-fgd-3'>9.07</div>
                  <div className='text-right text-th-fgd-3'>
                    10:37:36 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-red'>102.39</div>
                  <div className='text-right text-th-fgd-3'>9.07</div>
                  <div className='text-right text-th-fgd-3'>
                    10:37:33 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-red'>102.39</div>
                  <div className='text-right text-th-fgd-3'>9.07</div>
                  <div className='text-right text-th-fgd-3'>
                    10:37:31 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-red'>102.39</div>
                  <div className='text-right text-th-fgd-3'>9.07</div>
                  <div className='text-right text-th-fgd-3'>
                    10:37:31 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.30</div>
                  <div className='text-right text-th-fgd-3'>3</div>
                  <div className='text-right text-th-fgd-3'>
                    10:37:11 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.44</div>
                  <div className='text-right text-th-fgd-3'>
                    36.77
                  </div>
                  <div className='text-right text-th-fgd-3'>
                    10:37:05 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.44</div>
                  <div className='text-right text-th-fgd-3'>
                    98.86
                  </div>
                  <div className='text-right text-th-fgd-3'>
                    10:37:05 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.44</div>
                  <div className='text-right text-th-fgd-3'>293</div>
                  <div className='text-right text-th-fgd-3'>
                    10:37:05 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.43</div>
                  <div className='text-right text-th-fgd-3'>
                    40.43
                  </div>
                  <div className='text-right text-th-fgd-3'>
                    10:37:05 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.40</div>
                  <div className='text-right text-th-fgd-3'>0.2</div>
                  <div className='text-right text-th-fgd-3'>
                    10:37:05 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.38</div>
                  <div className='text-right text-th-fgd-3'>
                    19.48
                  </div>
                  <div className='text-right text-th-fgd-3'>
                    10:37:05 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.30</div>
                  <div className='text-right text-th-fgd-3'>0.2</div>
                  <div className='text-right text-th-fgd-3'>
                    10:37:05 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-red'>102.27</div>
                  <div className='text-right text-th-fgd-3'>7.66</div>
                  <div className='text-right text-th-fgd-3'>
                    10:36:52 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.27</div>
                  <div className='text-right text-th-fgd-3'>6.42</div>
                  <div className='text-right text-th-fgd-3'>
                    10:36:46 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.27</div>
                  <div className='text-right text-th-fgd-3'>9.08</div>
                  <div className='text-right text-th-fgd-3'>
                    10:36:44 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.26</div>
                  <div className='text-right text-th-fgd-3'>
                    26.85
                  </div>
                  <div className='text-right text-th-fgd-3'>
                    10:36:13 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.26</div>
                  <div className='text-right text-th-fgd-3'>
                    40.71
                  </div>
                  <div className='text-right text-th-fgd-3'>
                    10:36:13 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.22</div>
                  <div className='text-right text-th-fgd-3'>
                    293.63
                  </div>
                  <div className='text-right text-th-fgd-3'>
                    10:36:13 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.21</div>
                  <div className='text-right text-th-fgd-3'>
                    24.79
                  </div>
                  <div className='text-right text-th-fgd-3'>
                    10:36:13 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.20</div>
                  <div className='text-right text-th-fgd-3'>0.2</div>
                  <div className='text-right text-th-fgd-3'>
                    10:36:13 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.20</div>
                  <div className='text-right text-th-fgd-3'>0.2</div>
                  <div className='text-right text-th-fgd-3'>
                    10:36:13 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.10</div>
                  <div className='text-right text-th-fgd-3'>15.9</div>
                  <div className='text-right text-th-fgd-3'>
                    10:36:12 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.14</div>
                  <div className='text-right text-th-fgd-3'>
                    30.58
                  </div>
                  <div className='text-right text-th-fgd-3'>
                    10:33:23 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.10</div>
                  <div className='text-right text-th-fgd-3'>0.2</div>
                  <div className='text-right text-th-fgd-3'>
                    10:33:16 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.08</div>
                  <div className='text-right text-th-fgd-3'>9.09</div>
                  <div className='text-right text-th-fgd-3'>
                    10:32:59 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-red'>101.99</div>
                  <div className='text-right text-th-fgd-3'>0.74</div>
                  <div className='text-right text-th-fgd-3'>
                    10:31:19 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-red'>101.99</div>
                  <div className='text-right text-th-fgd-3'>1.76</div>
                  <div className='text-right text-th-fgd-3'>
                    10:31:19 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-red'>102.00</div>
                  <div className='text-right text-th-fgd-3'>0.2</div>
                  <div className='text-right text-th-fgd-3'>
                    10:31:19 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-red'>102.03</div>
                  <div className='text-right text-th-fgd-3'>1.96</div>
                  <div className='text-right text-th-fgd-3'>
                    10:31:18 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-red'>102.10</div>
                  <div className='text-right text-th-fgd-3'>0.2</div>
                  <div className='text-right text-th-fgd-3'>
                    10:30:57 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-red'>102.10</div>
                  <div className='text-right text-th-fgd-3'>
                    63.46
                  </div>
                  <div className='text-right text-th-fgd-3'>
                    10:30:57 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-red'>102.15</div>
                  <div className='text-right text-th-fgd-3'>6</div>
                  <div className='text-right text-th-fgd-3'>
                    10:30:39 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-red'>102.16</div>
                  <div className='text-right text-th-fgd-3'>9.08</div>
                  <div className='text-right text-th-fgd-3'>
                    10:30:39 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.30</div>
                  <div className='text-right text-th-fgd-3'>0.2</div>
                  <div className='text-right text-th-fgd-3'>
                    10:30:27 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.27</div>
                  <div className='text-right text-th-fgd-3'>3.59</div>
                  <div className='text-right text-th-fgd-3'>
                    10:30:15 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.27</div>
                  <div className='text-right text-th-fgd-3'>1.34</div>
                  <div className='text-right text-th-fgd-3'>
                    10:30:15 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.20</div>
                  <div className='text-right text-th-fgd-3'>0.2</div>
                  <div className='text-right text-th-fgd-3'>
                    10:30:14 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.22</div>
                  <div className='text-right text-th-fgd-3'>2.34</div>
                  <div className='text-right text-th-fgd-3'>
                    10:29:38 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.21</div>
                  <div className='text-right text-th-fgd-3'>2.66</div>
                  <div className='text-right text-th-fgd-3'>
                    10:29:38 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.21</div>
                  <div className='text-right text-th-fgd-3'>
                    11.32
                  </div>
                  <div className='text-right text-th-fgd-3'>
                    10:29:20 PM
                  </div>
                </div>
                <div className='grid grid-cols-3 leading-6'>
                  <div className='text-th-green'>102.21</div>
                  <div className='text-right text-th-fgd-3'>
                    11.32
                  </div>
                  <div className='text-right text-th-fgd-3'>
                    10:29:19 PM
                  </div>
                </div>
              </div>
            </div>
            <span className='react-resizable-handle react-resizable-handle-se' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
