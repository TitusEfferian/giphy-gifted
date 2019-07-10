import React from 'react';
import { ORANGE, WHITE } from '../../styles/baseColor';
const HeaderSearch = (props) => {
    const { value, onChange, setInput } = props
    return (
        <div style={styles.container}>
            <input
                style={styles.inputText}
                placeholder='Search giphy'
                value={value}
                onChange={(event) => { onChange(event, setInput) }}
            />
            <p style={styles.searchButton}>search</p>
        </div>
    )
}

const styles = {
    container: {
        padding: 16,
        backgroundColor: ORANGE,
        display: 'flex',
        alignItems: 'center',
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