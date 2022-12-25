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
                    className='text-4xl font-bold mb-5'
                >
                    Sign in
                </h1>
                <h2
                    className='text-xl mb-16'
                >
                    Please stay connect with us
                </h2>
            </div>
            {/* sign in title  */}
            <div className="card-body  ">
                <h2
                    onClick={() => signInWithGoogle()}
                    className='border rounded-full flex justify-center items-center gap-5  py-2  cursor-pointer mb-5'
                >
                    <FaGoogle />
                    Google
                </h2>
                <div className="divider ">
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
                            className="label mb-10 py-2 text-lg "
                        >
                            My email address is
                        </label>
                        <input
                            type="text"
                            placeholder="Your email address"
                            className="input input-bordered w-full py-3 px-4 my-2 rounded-full "
                            {...register("email", {
                                required: { value: true, message: 'Email address is required' },
                                pattern: { value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: 'Enter a valid email' }
                            })}
                        />
                        <label className="label ">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 text-sm">{errors.email.message}</span>}
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
                            className="input input-bordered w-full py-3 px-4 my-2 rounded-full "
                            {...register("password", {
                                required: { value: true, message: 'Password is required' },
                                pattern: { value: /(?=.*[!@#$%^&*])/, message: 'Enter at least one speacial character' }
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 text-sm">{errors.password.message}</span>}
                            {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500 text-sm">{errors.password.message}</span>}
                        </label>
                    </div>
                    <input
                        type='submit'
                        value='Sign in'
                        className="bg-green-500 z-100 w-full text-white mt-5">
                    </input>
                    {userError}
                </form>
                <p className='pt-4'>
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