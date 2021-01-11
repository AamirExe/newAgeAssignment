import React from 'react'
import { useInView } from 'react-intersection-observer'
import Image from './image/Image'

const Section1 = ({ src }) => {



    return <div>
        <div className="column">

            <Image src={src} styleClass="slideFromBottom" />
        </div>
    </div>
}

export default Section1