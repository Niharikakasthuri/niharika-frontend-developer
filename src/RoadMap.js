import React from 'react'

const Roadmap = () => {
  return (
    <div className='bg home-align' id='roadmap'>
        <h1 className='whyus-heading'>RoadMap</h1>
        <div className='roadmap-align'>
        <ul className='roadmap-list'>
            <li className='phase-button'>Phase1</li>
            <li className='roadmap-heading'>Kicking Off</li>
            <li className='to-list'>Launch of EthAi: Officially</li>
            <li className='to-list'>Development of Core AI Agents</li>
            <li className='to-list'>User Onboarding Campaign</li>
            <li className='to-list'>Community Engagement Initiatives</li>
        </ul>
        <img className='phase1' src = '/phase1-img.png' alt = 'phase1'/>
        </div>
        <div className='roadmap-align slide-left'>
        <img className='phase3' src = '/phase2-img.png' alt = 'phase1'/>
        <ul className='roadmap-list'>
            <li className='phase-button'>Phase2</li>
            <li className='roadmap-heading'>Bigger Insights</li>
            <li className='to-list'>Introduction to AI Agent</li>
            <li className='to-list'>Stategic Patenerships</li>
            <li className='to-list'>User Interface Optimization</li>
            <li className='to-list'>Comprehensive Marketing Campaign</li>
            </ul>
            <img className='phase2' src = '/phase2-img.png' alt = 'phase1'/>
            </div>
            <div className='roadmap-align'>
        <ul className='roadmap-list slide-left'>
            <li className='phase-button'>Phase3</li>
            <li className='roadmap-heading'>Full Power</li>
            <li className='to-list'>Introduction to Enchanced Features</li>
            <li className='to-list'>API Integration for Data Access</li>
            <li className='to-list'>Launch od Community-Driven Initiatives</li>
            <li className='to-list'>Continuous Improvements and Updates</li>
        </ul>
        <img className='phase1' src = '/phase3-img.png' alt = 'phase1'/>
        </div>
        <div className='roadmap-align'>
        <h3 className='roadmap-heading2'>Frequently Asked Questions</h3>
        <ul className='roadlist'>
            <li className='to-list'>+ What is EthAi?</li>
            <li className='to-list'>+ How can EthAi help me as a trade?</li> 
            <li className='to-list'>+ Who can Use EthAi?</li>
            <li className='to-list'>+ How does ensure data security?</li>
            </ul>
            </div>
            <div className='home-align roadmap-card'>
                <h1 className='roadmap-heading'>Explore Our dApp</h1>
                <p className='to-list'>EthAi is an AI-powered designed to help<br/> traders make smater, data driven decicions.<br/> By tracking smart moneyflows, motoring
                  <br/>  key wallets, and providing real-time<br/> market insights.
                </p>
                <button className='nav-button'>Open dApp</button>
            </div>
            </div>
  )
}

export default Roadmap