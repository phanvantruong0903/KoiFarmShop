import React from 'react'
import { useSearchParams,useNavigate } from 'react-router-dom'

export default function ResetPassword() {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    React.useEffect(() => {
        console.log(params)
        const token = params.get('forgot_password_secrect_token'); // LAM ON HOAT DONG
        if (token) {
            console.log(token)
            localStorage.setItem('forgot_password_secrect_token', token)
            navigate('/login')
        }
    }, [params])
  
    return (
        <div>resetpassword</div>
    )
}
