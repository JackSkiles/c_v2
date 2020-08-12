import React from 'react'
import './pages.css';
import Footer from './Footer'

export default function Beliefs() {
    return (
        <div className="main">
            <div className="imgCont">
                <img className="topImg" src="sports.jpg"></img>
            </div>
            <div className="mainCont">
                <div className="textCont">
                    <h2>Our Beliefs:</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus auctor tellus, quis commodo purus congue ac.
                            Integer blandit pellentesque commodo. Aliquam est tortor, venenatis vel euismod a, pharetra nec elit. Nulla vitae magna luctus orci suscipit mattis non at turpis. Sed non tristique felis. Nam vitae sem sed mauris tincidunt pretium. Nunc consectetur augue eu ipsum blandit, a sodales sem aliquam. Nulla orci nulla, blandit et pharetra et, cursus vel purus. Vestibulum varius et risus sit amet mollis. Nunc porttitor egestas turpis, ut fermentum nisi sodales sed. Nulla vehicula finibus nulla, at sollicitudin sem condimentum non. Vivamus vel nisl quam. Cras nunc nulla, aliquet non tellus sed, lobortis pellentesque eros. Ut faucibus bibendum dapibus.</p>
                </div>
                <div className="textCont">
                    <h2>“</h2>
                    <p>
                    For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.</p>
                    <p>— Ephesians 2:8-9</p>
                </div>
            </div>
            <Footer />
        </div>

    )
}
