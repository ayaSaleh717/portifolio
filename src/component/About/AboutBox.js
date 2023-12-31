import React from 'react'

const AboutBox = () => {
  return (
    <div className='about_boxs grid'>
    <div className='about_box'>
        <i className= 'about_icon icon-fire'></i>
        <div>
            <h3 className='about_title'>198</h3>
            <span className='about_subtitle'>Project Completed</span>

        </div>
    </div>

    <div className='about_box'>
        <i className= 'about_icon icon-cup'></i>
        <div>
            <h3 className='about_title'>569</h3>
            <span className='about_subtitle'>Cup Of Coffee</span>

        </div>
    </div>

    <div className='about_box'>
        <i className= 'about_icon icon-people'></i>
        <div>
            <h3 className='about_title'>569</h3>
            <span className='about_subtitle'>Satisfied Client</span>

        </div>
    </div>

    <div className='about_box'>
        <i className= 'about_icon icon-badge'></i>
        <div>
            <h3 className='about_title'>5690</h3>
            <span className='about_subtitle'>Nominees Winner</span>

        </div>
    </div>
      
    </div>
  )
}

export default AboutBox
