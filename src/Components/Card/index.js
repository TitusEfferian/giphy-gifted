import React from 'react';

const Card = ({ data }) => {
    return (
        <img
            alt=""
            style={{
                width: data.images.fixed_width.width - 8,
                height: data.images.fixed_width.height,
                margin:4,
            }}
            src={data.images.fixed_width.webp}
        />
    )
}

export default Card