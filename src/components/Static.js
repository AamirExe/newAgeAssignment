import React, { Fragment } from 'react'
import Image from './image/Image'
import { useInView } from 'react-intersection-observer';
const Static = () => {

    const [ref, inView] = useInView({
        triggerOnce: false,
        rootMargin: '-1px 1px'
    });
    const [ref2, inView2] = useInView({
        triggerOnce: false,
        rootMargin: '-1px 1px'
    });


    const heroImage = "https://images.pexels.com/photos/1798642/pexels-photo-1798642.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    const fullWidthImage = "https://images.pexels.com/photos/4705205/pexels-photo-4705205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

    const text1 = "LOREM IPSUM DUMMY TEXT"


    const text2 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it to make a type specimen book.`



    return (<Fragment>

        <div className="hero-image">

            <Image src={heroImage} styleClass="image-style" />
            <div className="center-text">

                <span ref={ref2} className={inView2 ? "text animate-main-text" : "text"}>{text1}  </span>
                <span ref={ref2} className={inView2 ? "text2 animate-sub-text" : "text2"}>{text2}</span>
            </div>
        </div>

        <div className='full-width'>
            <Image src={fullWidthImage} />
            <div className='align-text-right'>

                <span ref={ref} className={inView && 'section2-text1'} >
                    {text1}
                </span>
                <span ref={ref} className={inView && 'section2-text2'}>{text2}</span>
            </div>
        </div>
    </Fragment>

    )
}

export default Static