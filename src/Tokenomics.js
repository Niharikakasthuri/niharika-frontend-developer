import React from 'react'
const Tokenomics = () => {
  return (
    <div id = 'tokenomics' className='bg home-align'>
        <h1 className='whyus-heading'>Tokenomics</h1>
        <div className='to-align'>
        <img className='to-graph' src ='/graph.png' alt='graph'/>
        <div>
        <ul className='to-background1'>
            <li className='to-list'>Name: EthAi</li>
            <li className='to-list'>Token Name: $EthAi</li>
            <li className='to-list'>Token Standard: ERC20</li>
            <li className='to-list'>Blockchain: Ethereum</li>
            <li className='to-list'>Total Supply: 100 Million</li>
            <li className='to-list'>Tax: 5%/5%</li>
        </ul>
        <ul className='to-background2'>
            <li className='to-list'>Team: 35%</li>
            <li className='to-list'>Marketing: 5%</li>
            <li className='to-list'>Liquidity Pool: 90%</li>
        </ul>
        </div>
        </div>
    </div>
  )
}

export default Tokenomics