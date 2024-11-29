import { FcGoogle } from "react-icons/fc";

const Login = () => {

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Get form data directly from e.target
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Displaying values (for demonstration, you can handle form logic here)
        console.log('Email:', email);
        console.log('Password:', password);

        // Here you can add logic to validate the form, send data to API, etc.
    };

    // Handle Google login (you can integrate Firebase or any other logic)
    const handleGoogleLogin = () => {
        console.log("Google login clicked");
        // Implement Google login logic here
    };

    return (
        <div className="flex justify-center items-center md:py-10 py-5 bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-[#E3B577]"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-[#E3B577]"
                            placeholder="********"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-between items-center">
                        <button
                            type="submit"
                            className="w-full mt-4 outLinePriBtn text-xl"
                        >
                            Login
                        </button>
                    </div>
                </form>

                {/* Google Login Button */}
                <div className="mt-3 text-center">
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full outLinePriBtn flex items-center text-xl gap-2 justify-center"
                    >
                        <FcGoogle />
                        <span>Sign in with Google</span>
                    </button>
                </div>

                {/* Redirect to Register Link */}
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don&apos;t have an account? <a href="/reg" className="text-[#E3B577]">Create one</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
