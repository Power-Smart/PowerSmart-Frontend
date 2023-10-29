import React from 'react'

const Controller = ({ position, setPosition }) => {
    const minMax = 40;
    return (
        <div className='fixed top-10 left-0 text-white'>
            <div>
                <h2>First : </h2>
                <input
                    type="range"
                    min={-minMax}
                    max={minMax}
                    step={1}
                    value={position.x}
                    onChange={e => setPosition({ ...position, x: e.target.value })}
                />
                <p>Selected Value: {position.x}</p>
            </div>
            <div>
                <h2>First : </h2>
                <input
                    type="range"
                    min={-minMax}
                    max={minMax}
                    step={1}
                    value={position.y}
                    onChange={e => setPosition({ ...position, y: e.target.value })}

                />
                <p>Selected Value: {position.y}</p>
            </div>
            <div>
                <h2>First : </h2>
                <input
                    type="range"
                    min={-minMax}
                    max={minMax}
                    step={1}
                    value={position.z}
                    onChange={e => setPosition({ ...position, z: e.target.value })}

                />
                <p>Selected Value: {position.z}</p>
            </div>
        </div>
    )
}

export default Controller