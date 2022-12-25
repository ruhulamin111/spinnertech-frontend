import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../firebase.init'
import Loading from './Loading'

const Protected = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()

    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to='/signin' replace state={{ from: location }} />
    }
    return children
}

export default Protected