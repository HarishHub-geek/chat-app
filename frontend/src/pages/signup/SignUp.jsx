import { Link } from "react-router";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const { loading, signup } = useSignup();

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	}

	const toggleConfirmPasswordVisibility = () => {
		setShowConfirmPassword((prev) => !prev);
	}

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-2xl shadow-md bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 border border-gray-100'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor='fullname-input' className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input
							type='text'
							id='fullname-input'
							placeholder='Harish Kumar'
							className='w-full input input-bordered  h-10'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label  htmlFor='username-input' className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							id='username-input'
							placeholder='harikutty'
							className='w-full input input-bordered h-10'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label htmlFor='password-input' className='label p-2 pb-1 cursor-pointer'>
							<span className='text-base label-text'>Password</span>
						</label>

						<div className="relative">
							<input type={!showPassword ? "password" : "text"} id='password-input' placeholder="Enter password" className="input input-bordered w-full h-10" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />


							<div
							className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
							onClick={togglePasswordVisibility}
							>
							{showPassword ? <FaEyeSlash /> : <FaEye />}
							</div>
						</div>
					</div>

					{/* confirm pwd */}
					<div>
						<label htmlFor='confirm-password-input' className='label p-2 pb-1 cursor-pointer'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>

						<div className="relative">
							<input type={!showConfirmPassword ? "password" : "text"} id='confirm-password-input' placeholder="Confirm password" className="input input-bordered w-full h-10" value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />


							<div
							className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
							onClick={toggleConfirmPasswordVisibility}
							>
							{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
							</div>
						</div>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					<span className='text-sm label-text text-white'>
            			Already have an account? 
						<Link to="/login" className='text-md hover:underline font-bold text-blue-600 mt-2 inline-block'>
              				Login
            			</Link>
          			</span>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700 hover:bg-blue-800 ' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;