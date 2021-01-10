import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Section1 from './Section1'

import Image from './image/Image'


const Test = () => {

    const [ref1, inView1] = useInView({
        triggerOnce: false,
        rootMargin: '-1px 1px'
    })

    const [ref3, inView3] = useInView({
        triggerOnce: false,
        rootMargin: '-1px 1px'
    })
    const [ref4, inView4] = useInView({
        triggerOnce: false,
        rootMargin: '-1px 1px'
    })

    const section1Image = ['https://images.pexels.com/photos/2457284/pexels-photo-2457284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/1389460/pexels-photo-1389460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940']

    const section2Image1 = 'https://images.pexels.com/photos/1153895/pexels-photo-1153895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    const section2Image2 = 'https://images.pexels.com/photos/1148496/pexels-photo-1148496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

    return (

        <div className='table'>

            <div class="row">

                {section1Image.map((src, index) => <Section1 src={src} key={index} />)}

                <div ref={ref1} className={inView1 ? 'column  fadeIn' : "column"}>
                    <h1>LOREM IPSUM DUMMY TEXT</h1>
                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book a</h2>
                </div>
                <div ref={ref1} className={inView1 ? 'column  fadeIn' : "column"}>
                    <h1>LOREM IPSUM DUMMY TEXT</h1>
                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book asdasdasdasdsadasdsadasda</h2>
                </div>
                <div ref={ref3} className={inView3 ? 'column  animate-img-left' : "column"}>
                    <Image src={section2Image1} styleClass="image" />
                </div>
                <div ref={ref3} className={inView3 ? 'column  fadeIn' : "column"}>
                    <h1>LOREM IPSUM DUMMY TEXT</h1>
                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book a</h2>
                </div>
                <div ref={ref4} className={inView4 ? 'column  fadeIn' : "column"}>
                    <h1>LOREM IPSUM DUMMY TEXT</h1>
                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book a</h2>
                </div>
                <div ref={ref4} className={inView4 ? 'column  animate-img-right' : "column"}>
                    <Image src={section2Image2} styleClass="image" />
                </div>
            </div>
        </div>

    )
}

export default Test