import React from 'react';
import 'lazysizes';
import Spinner from './Spinner-1s-200px.svg'
const Card = ({ data }) => {
    return (
        <img
            alt=""
            style={{
                width: data.images.fixed_width.width - 8,
                height: data.images.fixed_width.height,
                margin:4,
            }}
            data-src={data.images.fixed_width.webp}
            src={Spinner}
            className='lazyload'
        />
    )
}

export default React.memo(Card)