import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
const Register = () => {
    const { CreateUserUsingPassAndEmail, photoAndNameUpdate, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();

        // Get form data directly from e.target
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            return toast.error('minimum 6 letter!')
        }
        CreateUserUsingPassAndEmail(email, password)
            .then(res => {
                if (res.user) {
                    const accountCreatedDate = res.user.metadata.createdAt
                    const userInfo = { name, photoURL, email, accountCreatedDate }

                    photoAndNameUpdate(name, photoURL)
                        .then(() => {
                            fetch('http://localhost:5000/users', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(userInfo)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.insertedId) {
                                        setUser((prev) => { return { ...prev, photoURL, displayName:name } })
                                        Swal.fire({
                                            title: 'Login Success',
                                            text: "Well come to our web page...",
                                            icon: 'success'
                                        })
                                    }

                                })
                                .catch(error => {
                                    console.log(error.message);
                                })
                            navigate('/')
                        })
                        .catch(err => console.log(err))
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    };

    return (
        <div className="flex justify-center items-center  md:py-10 py-5 bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Create an Account</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-[#E3B577]"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">Photo Url</label>
                        <input
                            type="url"
                            id="photoURL"
                            name="photoURL"
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-[#E3B577]"
                            placeholder="Photo url"
                            required
                        />
                    </div>

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
                    <div className="flex justify-between items-center">
                        <button
                            type="submit"
                            className="w-full mt-4 outLinePriBtn text-xl"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <div className="mt-3 text-center">
                    <button
                        // onClick={handleGoogleLogin}
                        className="w-full outLinePriBtn flex items-center text-xl gap-2 justify-center"
                    >
                        <FcGoogle />
                        <span>Sign in with Google</span>
                    </button>
                </div>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account? <Link to={'/login'} className="text-[#E3B577]">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
