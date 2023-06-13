import React,{memo} from 'react'

const Child = (props) => {
    console.log('child')
    return (
        <div className='bg-dark text-white fs-3 p-3 text-center mt-2'>
            child
            <p>number props:{props.renderNumber()}</p>
        </div>
    )
}

export default memo(Child)