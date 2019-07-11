import React from 'react';
import Card from '../Card';

const Content = ({ data }) => {
    return (
        <div style={styles.container}>
            <div style={styles.columnContainer}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {data.map((x, y) => {
                        if (y % 2 === 0) {
                            return (
                                <Card data={x} key={y.toString()} />

                            )
                        }
                    })}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {data.map((x, y) => {
                        if (y % 2 !== 0) {
                            return (
                                <Card data={x} key={y.toString()} />
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
        marginTop: 48,
    },
    columnContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

export default React.memo(Content);