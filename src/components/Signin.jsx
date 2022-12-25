import React from 'react';
import Loading from './Loading';
import auth from '../firebase.init';
import { useForm } from "react-hook-form";
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Signin = () => {
    const [signInWithGoogle, gUser, gLoadding, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';
    let userError;
    if (gError || error) {
        userError = <p>{gError?.message || error?.message}</p>
    }
    if (gLoadding || loading) {
        return <Loading></Loading>
    }
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    if (user || gUser) {
        navigate(from, { replace: true })
    }

    return (
        <div
            className='h-screen max-w-7xl md:w-10/12 mx-auto card flex flex-col justify-center items-center'
        >
            {/* page headline  */}
            <div
                className='text-center'
            >
                <h1
                    className='text-4xl font-bold mb-4'
                >
                    Sign in
                </h1>
                <h2
                    className='text-xl mb-10'
                >
                    Please stay connect with us
                </h2>
            </div>
            {/* sign in title  */}
            <div className="card-body md:w-6/12 ">
                <h2
                    onClick={() => signInWithGoogle()}
                    className='border rounded-full flex justify-center items-center gap-5  py-3  cursor-pointer mb-5'
                >
                    <FaGoogle />
                    Google
                </h2>
                <div className=" ">
                    <h2
                        className='text-lg text-center mb-5'
                    >
                        Or sign in with
                    </h2>
                </div>
                {/* sign in form  */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='w-full'
                >
                    <div className="form-control ">
                        <label
                            className="label "
                        >
                            My email address is
                        </label>
                        <input
                            type="text"
                            placeholder="Your email address"
                            className="input input-bordered w-full py-3 px-5 mt-2 mb-6 rounded-full "
                            {...register("email", {
                                required: { value: true, message: 'Email address is required' },
                                pattern: { value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: 'Enter a valid email' }
                            })}
                        />
                        <label className="label ">
                            {/* require error  */}
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 text-sm">{errors.email.message}</span>}
                            {/* pattern error  */}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 text-sm">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control ">
                        <label
                            className="label"
                        >
                            My password is
                        </label>
                        <input
                            type="password"
                            placeholder="Your password"
                            className="input input-bordered w-full py-3 px-4 mt-2 mb-6 rounded-full "
                            {...register("password", {
                                required: { value: true, message: 'Password is required' },
                                pattern: { value: /(?=.*[!@#$%^&*])/, message: 'Enter at least one speacial character' }
                            })}
                        />
                        <label className="label">
                            {/* require error  */}
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 text-sm">{errors.password.message}</span>}
                            {/* pattern error  */}
                            {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500 text-sm">{errors.password.message}</span>}
                        </label>
                    </div>
                    <input
                        type='submit'
                        value='Sign in'
                        className="w-full mt-5 border rounded-full py-3 mb-5">
                    </input>
                    {userError}
                </form>
                {/* sign up page terminate  */}
                <p className=' text-center flex justify-center gap-2'>
                    Don't have an account?
                    <Link className='text-primary' to='/signup'>
                        Create one
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signin;