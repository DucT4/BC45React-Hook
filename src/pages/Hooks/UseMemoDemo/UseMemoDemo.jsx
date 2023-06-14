import React, { useState, useMemo } from 'react'
import Cart from './Cart';

const UseMemoDemo = () => {
    let [like, setLike] = useState(1);
    let cart = [
        { id: 1, name: 'iphone', price: 1000 },
        { id: 2, name: 'htc phone', price: 2000 },
        { id: 3, name: 'lg phone', price: 3000 }
    ];
    const cartMemo = useMemo(() => cart, []);
     //useMemo dùng để làm cái gì? => useMemo dùng để các phương thức không cần thay đổi thì khỏi cần render lại. Cái nào cần thay đổi thì gọi meomo
    return (
        <div className="m-5">
            Like: {like} ♥
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
                setLike(like + 1);
            }}>♥</span>
            <br />
            <br />
            <Cart cart={cartMemo} />
        </div>
    )
   
}

export default UseMemoDemo