import React from 'react'

const Home = () => {
  return (
    <div className='bg'>
    <nav class="navbar navbar-inverse navbar-dark">
        <div class="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand roadmap-heading" href="#features">Ethai</a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
                <li class="active"><a href="#features" className='items'>Features</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                    <li><a href="#whyus" className='items'>Why Us</a></li>
                <li><a href="#tokenomics" className='items'>Tokenomics</a></li>
                <li><a href="#roadmap" className='items'>Roadmap</a></li>
                <li><a className='nav-login'>Login</a></li>
                <li> <button className='nav-button'>WhitePaper</button></li>
                    </ul>
                </li>
            </ul>
        </div>
    
    </nav>
    <div className='home-align'>
        <h3 className='home-heading'>When Innovation<br/> Meets <span className='home-span'> Investment</span></h3>
        <p className='home-para'>Empowering Trading Through Advanced Technology</p>
        <button className='home-button'>Open dApp</button>
    <img className='home-img1' src = '/feature1.png' alt = 'features1'/>
    <img className='home-img2' src = '/feature 2.png' alt='features2'/>
   </div>

</div>
  )
}

export default Home