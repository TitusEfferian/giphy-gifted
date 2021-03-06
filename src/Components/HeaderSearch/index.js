import React from 'react';
import { ORANGE, WHITE } from '../../styles/baseColor';
const HeaderSearch = (props) => {
    const { value, onChange, onClick } = props
    return (
        <div style={styles.container}>
            <input
                style={styles.inputText}
                placeholder='Search giphy'
                value={value}
                onChange={onChange}
                type='text'
            />
            <p style={styles.searchButton} onClick={onClick}>search</p>
        </div>
    )
}

const styles = {
    container: {
        padding: 16,
        backgroundColor: ORANGE,
        display: 'flex',
        alignItems: 'center',
        position:'fixed',
        top:0,
        left:0,
        right:0,
    },
    inputText: {
        borderRadius: 4,
        borderStyle: 'none',
        padding: 8,
        outline: 'none',
        flex: 1,
        marginRight: 16,
    },
    searchButton: {
        margin: 0,
        padding: 0,
        color: WHITE,
        fontWeight: 'bold',
        cursor: 'pointer'
    }
}

export default HeaderSearch