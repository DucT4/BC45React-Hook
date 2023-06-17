import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const useRoute = () => {
    const params = useParams();//lấy tham số trên url
    const navigate = useNavigate();//chuyển hướng trang trong function
    const [searchParam, setSearchParam] = useSearchParams();//lấy và gán tham số trên url


    return {
        params: params,
        navigate,
        searchParam
    }
}

export default useRoute