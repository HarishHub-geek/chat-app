import { useState } from "react";
import { Link } from "react-router";
import useLogin from "../../hooks/useLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const { loading, login } = useLogin();

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-2xl shadow-md bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 border border-gray-100'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login
					<span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor='username-input' className='label p-2 pb-1 cursor-pointer'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							id='username-input'
							placeholder='Enter username'
							className='w-full input input-bordered h-10'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					{/* <div>
						<label htmlFor='password-input' className='label p-2 pb-1 cursor-pointer'>
							<span className='text-base label-text'>Password</span>
						</label>
						<div className="relative">
							<input
							type={!showPassword ? "password" : "text"} 
							id='password-input'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<div className="eye-icon" onClick={() => togglePasswordVisibility()}>
							{showPassword ? <FaEyeSlash /> : <FaEye />}
						</div>
						</div>
					</div> */}

					<div>
						<label htmlFor='password-input' className='label p-2 pb-1 cursor-pointer'>
							<span className='text-base label-text'>Password</span>
						</label>

						<div className="relative">
							<input
							type={!showPassword ? "password" : "text"}
							id='password-input'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10 pr-10'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							/>

							<div
							className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
							onClick={togglePasswordVisibility}
							>
							{showPassword ? <FaEyeSlash /> : <FaEye />}
							</div>
						</div>
					</div>
					<div className='flex items-center mt-2 gap-2'>
						<span className='text-sm label-text text-white'>
							Don't have an account? 
							<Link to="/signup" className='text-md hover:underline font-bold text-blue-600 mt-2 inline-block'>
								Sign Up
							</Link>
						</span>
					</div>

					<div>
						<button className='btn btn-block btn-sm mt-2' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;