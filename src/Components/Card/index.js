import React from 'react';
/**
 * helper for lazyloaded images
 * https://web.dev/fast
 */
import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import Spinner from './Spinner-1s-200px.svg'
const Card = ({ data }) => {
    const [click,setClick] = React.useState(false)
    const webp = data.images.fixed_width.webp
    const jpg = data.images['480w_still'].url
    return (
        <img
            alt=""
            style={{
                width: data.images.fixed_width.width - 8,
                height: 200,
                margin:4,
                cursor:'pointer',
            }}
            data-src={click ? webp : jpg}
            src={Spinner}
            onClick={()=>{setClick(!click)}}
            className='lazyload'
        />
    )
}

export default React.memo(Card)