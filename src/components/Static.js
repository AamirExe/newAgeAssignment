import React, { Fragment } from 'react'

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



    const text1 = "LOREM IPSUM DUMMY TEXT"


    const text2 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it to make a type specimen book.`



    return (<Fragment>

        <div className="hero-image">
            <div className="center-text">
                <span ref={ref2} className={inView2 ? "text animate-main-text" : "text"}>{text1}  </span>
                <span ref={ref2} className={inView2 ? "text2 animate-sub-text" : "text2"}>{text2}</span>
            </div>
        </div>

        <div className='full-width'>
            <div className='align-text-right'>

                <span ref={ref} className={inView && 'section2-text1'} >
                    {text1}
                </span>
                <span ref={ref} className={inView && 'section2-text2'}>{text2}</span>
            </div>
        </div>

        {/* 
        <div className='table'>

            <div class="row">
                <div class="column">
                    <img src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2" alt="Snow" />
                </div>
                <div class="column">
                    <img src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2" alt="Forest" />
                </div>
                <div class="column">
                    <img src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2" alt="Mountains" />
                </div>
            </div>
        </div> */}






    </Fragment>

    )
}

export default Static