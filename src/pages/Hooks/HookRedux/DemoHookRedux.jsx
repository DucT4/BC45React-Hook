import React from 'react'
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addCommentAction } from '../../../redux/reducers/appChatReducer';
const DemoHookRedux = () => {

    const arrComment = useSelector(state => state.appChatReducer.arrComment);
     const dispatch = useDispatch();

    const userCommentRef = useRef({
        name: '',
        content: ''
    });

    const handleChange = (e) => {
        let { id, value } = e.target;
        userCommentRef.current[id] = value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('comment', userCommentRef.current);
        //đưa dữ liệu comment lên reducers
        // create data
        const action = addCommentAction(userCommentRef.current);
        //đưa lên redux
        dispatch(action);
    }

    return (
        <div className='container'>
            <h5>App chat</h5>
            <div className='card'>
                <div className='card-header'>
                    {arrComment.map((useComment, index) => {
                        return <div className='d-flex' key={index}>
                            <img style={{ width: '15%' }} src={useComment.img} alt="..." />
                            <div className='m-2 '>
                                <h5>{useComment.name}</h5>
                                <p>{useComment.content}</p>
                            </div>

                        </div>
                    })}

                </div>
                <div className='card-body'>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <p>name</p>
                            <input id='name' className='form-control' onChange={handleChange} />
                        </div>
                        <div className='form-group'>
                            <p>content</p>
                            <input id='content' className='form-control' onChange={handleChange} />
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-dark mt-2' >Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DemoHookRedux