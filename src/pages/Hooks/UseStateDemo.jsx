import React, { useState } from 'react'

const UseStateDemo = () => {

    const [number, setNumber] = useState(1)
    const [img, setImg] = useState('https:/i.pravatar.cc?u=7')
    const [fontZi, setFont] = useState(16)
    return (
        <div className='container'>
            <h3>Number:{number}</h3>
            <button className='btn btn-dark' onClick={() => {
                setNumber(number + 1)
            }}>+</button>
            <hr />
            <div className='mt-2'>
                <div className='card w-25' >
                    <div className='card'>
                        <img src={img} alt={'...'} />
                        <div className='card-body'>
                            <button className='btn btn-danger' onClick={() => {
                                let newImg = `https:/i.pravatar.cc?u=${Math.floor(Math.random() * 100)}`;
                                setImg(newImg);
                            }}>Random</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='mt-3'>
                <h3> vd3</h3>
                <p style={{ fontSize: fontZi }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dolorem.</p>
                <button className='btn btn-dark mx-2' onClick={() => {
                    let newFont = fontZi + 1;
                    setFont(newFont);
                }}>+</button>

                <button className='btn btn-dark mx-2' onClick={() => {
                    let newFont = fontZi - 1;
                    setFont(newFont);
                }} >-</button>

            </div>
        </div>
    )
}

export default UseStateDemo