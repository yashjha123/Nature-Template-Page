import { faArrowLeft, faArrowRight, faDiagramNext } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ContextBox = ({next, prev}) => {
  return (
    <div className='contextBox position-absolute bottom-0 end-0'>
        <div className='sdx' style={{borderRight:"solid 1px white"}} onClick={prev}>
            <h4>02 <FontAwesomeIcon style={{float:'right'}} icon={faArrowLeft}/></h4>
            <h3>Previous Slide</h3> <br />
            No place to go.
        </div>
        <div className='sdx' onClick={next}>
            <h4>03<FontAwesomeIcon style={{float:'right'}} icon={faArrowRight}/></h4>
            <h3>Next Slide</h3> <br />
            Nature pieces.
        </div>
    </div>
  )
}

export default ContextBox