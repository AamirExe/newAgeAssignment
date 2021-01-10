import React from 'react'
import { useInView } from 'react-intersection-observer'
import Image from './image/Image'

const Section1 = ({ src }) => {

    const [ref2, inView2] = useInView({
        triggerOnce: false,
        rootMargin: '-1px 200px'
    })

    return <div>
        <div ref={ref2} className={inView2 ? ' column slideFromBottom' : "column"}>

            <Image src={src} styleClass="image" />
        </div>
    </div>
}

export default Section1