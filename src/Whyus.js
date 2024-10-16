import React, {useState} from 'react'

const Whyus = () => {
    const [isVisable,setIsVisable] = useState(false)
    const toggleImage = () => {
        setIsVisable(!isVisable)
    }
  return (
    <div id = 'whyus' className='bg home-align'>
        <h1 className='whyus-heading'>About EthAi</h1>
        <p className='home-para'>At EthAi, we're all about crypto trading easier and more intuitive. We provide tools <br/> that help traders keep up with
            all new market trends, trank top traders momements.
        </p>
        <button className='nav-button' onClick={toggleImage}>
            {isVisable ? 'Read Less' : 'Read More'}
        </button>
        {isVisable && (
            <img className='whyus-img' src = '/Overlay.png' alt = 'overlay'/>
        )}
    </div>
  )
}

export default Whyus