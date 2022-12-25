import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle, FaPhone } from 'react-icons/fa';
import Loading from './Loading';
import auth from '../firebase.init';

const Signin = () => {
    const [signInWithGoogle, gUser, gLoadding, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    // const [token] = useToken(user || gUser)

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
    // if (token) {
    //     navigate(from, { replace: true })
    // }
    if (user || gUser) {
        navigate(from, { replace: true })
    }

    return (
        <section>

            <div className='lg:grid-cols-2 grid items-center my-10 w-11/12 mx-auto gap-5'>
                <div>
                    {/* <img src={signin} alt="" className='w-full' /> */}
                </div>
                <div className="card lg:w-full shadow-xl ">
                    <div className='bg-secondary text-white w-full rounded-tl-lg py-4 text-center'>
                        <h2 className="text-2xl font-semibold">Sign in</h2>
                        {/* <h3 className="text-lg">Stay connect with us</h3> */}
                    </div>

                    <div className="card-body items-center text-center text-black">
                        {/* <div className="divider">Sign in with</div> */}
                        {/* <button className="btn btn-outline btn-primary w-full" onClick={() => signInWithGoogle()} >Continue with google</button> */}

                        {/* <Link to='/' className='text-md p-3 rounded-full border border-primary hover:border-secondary hover:bg-secondary duration-300 ease-in   hover:text-white'><FaGoogle /></Link> */}
                        <div className='flex gap-5'>
                            <p onClick={() => signInWithGoogle()} className='cursor-pointer text-md p-3 rounded-full border border-secondary hover:border-secondary hover:bg-secondary text-secondary duration-300 ease-in   hover:text-white'><FaGoogle /></p>
                            <p className='cursor-pointer text-md p-3 rounded-full border border-secondary hover:border-secondary hover:bg-secondary text-secondary duration-300 ease-in   hover:text-white'><FaFacebook /></p>
                            <p className='cursor-pointer text-md p-3 rounded-full border border-secondary hover:border-secondary hover:bg-secondary text-secondary duration-300 ease-in   hover:text-white'><FaPhone /></p>

                        </div>
                        {/* <p className='pt-2'>Don't Have an Account?
                            <Link className='text-primary' to='/signup'> Create One</Link>
                        </p> */}
                        <div className="divider">Or Sign in with</div>

                        <form onSubmit={handleSubmit(onSubmit)} className=' w-full'>
                            <div className="form-control ">
                                <label className="label">Email</label>
                                <input type="text" placeholder="Email"
                                    className="input input-bordered w-full border-accent "
                                    {...register("email", {
                                        required: { value: true, message: 'Email is required' },
                                        pattern: { value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: 'Provide a valid email' }
                                    })}
                                />
                                <label className="label ">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 text-sm">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 text-sm">{errors.email.message}</span>}
                                </label>
                            </div>

                            <div className="form-control ">
                                <label className="label">Password</label>
                                <input type="password" placeholder="Password"
                                    className="input input-bordered w-full border-accent"
                                    {...register("password", {
                                        required: { value: true, message: 'Password is required' },
                                        pattern: { value: /(?=.*[!@#$%^&*])/, message: 'Password is at least one speacial character' }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 text-sm">{errors.password.message}</span>}
                                    {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500 text-sm">{errors.password.message}</span>}
                                </label>
                            </div>
                            <div className='flex justify-between'>
                                <div className='cursor-pointer '>
                                    <input type="checkbox" name="" id="" className='mr-2' />
                                    <span>Remember me</span>
                                </div>
                                <div className='cursor-pointer'>
                                    <span>Forgot password?</span>
                                </div>
                            </div>
                            <input type='submit' value='Sign in' className="btn btn-secondary w-full text-white mt-5"></input>
                            {userError}
                        </form>
                        <p className='pt-4'>Don't Have an Account?
                            <Link className='text-primary' to='/signup'> Create One</Link>
                        </p>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Signin;