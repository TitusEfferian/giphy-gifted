import React from 'react';
import Card from '../Card';

const Content = ({ data }) => {
    return (
        <div style={styles.container}>
             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {data.map((x, y) => {
                                if (y % 2 === 0) {
                                    return (
                                        <Card data={x} />

                                    )
                                }
                            })}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {data.map((x, y) => {
                                if (y % 2 !== 0) {
                                    return (
                                        <Card data={x} />
                                    )
                                }
                            })}
                        </div>
                    </div>
        </div>
    )
}

const styles = {
    container: {
        padding: 24,
        maxWidth: 720,
        margin: 'auto',
    }
}

export default Content;