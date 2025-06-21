// import React, { useState, useEffect } from 'react';
// import Header from './Header';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setUser, setLoading } from '../redux/userSlice.jsx';

// const API_END_POINT = 'https://minor-8idz.onrender.com/api/v1/user';

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [animateForm, setAnimateForm] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const isLoading = useSelector((store) => store.app.isLoading);

//   useEffect(() => {
//     // Start animation after component mounts
//     setAnimateForm(true);
//   }, []);

//   const loginHandler = () => {
//     // Trigger animation out
//     setAnimateForm(false);
    
//     // Wait for animation to complete before switching forms
//     setTimeout(() => {
//       setIsLogin(!isLogin);
//       setAnimateForm(true);
//     }, 300);
//   };

//   const getInputData = async (e) => {
//     e.preventDefault();
//     dispatch(setLoading(true));

//     const user = isLogin ? { email, password } : { fullName, email, password };
//     const apiUrl = isLogin ? `${API_END_POINT}/login` : `${API_END_POINT}/register`;

//     try {
//       const res = await axios.post(apiUrl, user, {
//         headers: { 'Content-Type': 'application/json' },
//         withCredentials: true,
//       });

//       if (res && res.data) {
//         toast.success(res.data.message);
//         if (isLogin) {
//           dispatch(setUser(res.data.user));
//           navigate('/');
//         } else {
//           setIsLogin(true);
//         }
//       } else {
//         throw new Error('Unexpected response format');
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'An error occurred');
//       console.log(error);
//     } finally {
//       dispatch(setLoading(false));
//       setFullName('');
//       setEmail('');
//       setPassword('');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex flex-col">
//       <Header />
      
//       <div className="flex flex-grow items-center justify-center px-4 py-12">
//         <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
//           {/* Left side image and motivational content */}
//           <div className="hidden md:block w-1/2 bg-indigo-600 p-12 text-white relative">
//             <div className="absolute inset-0 bg-black opacity-30"></div>
//             <div className="absolute inset-0 flex flex-col justify-center p-12 z-10">
//               <h2 className="text-4xl font-bold mb-6">Welcome to MindSkoon</h2>
//               <p className="text-lg mb-8">
//                 Begin your journey to mental wellness and personal growth today.
//                 Join our community of mindful individuals.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
//                     </svg>
//                   </div>
//                   <p className="text-lg">Personalized growth plans</p>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
//                     </svg>
//                   </div>
//                   <p className="text-lg">Expert guidance and resources</p>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
//                     </svg>
//                   </div>
//                   <p className="text-lg">Supportive community</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Right side form */}
//           <div className={`w-full md:w-1/2 p-8 md:p-12 transition-all duration-300 ${animateForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//             <div className="flex justify-center mb-8">
//               <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center">
//                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
//                 </svg>
//               </div>
//             </div>
            
//             <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
//               {isLogin ? 'Welcome Back' : 'Create Your Account'}
//             </h1>
            
//             <p className="text-gray-600 text-center mb-8">
//               {isLogin 
//                 ? 'Enter your credentials to access your account' 
//                 : 'Start your journey to mental wellness today'}
//             </p>
            
//             <form onSubmit={getInputData} className="space-y-6">
//               {!isLogin && (
//                 <div className="relative">
                  
//                   <input
//                     type="text"
//                     value={fullName}
//                     onChange={(e) => setFullName(e.target.value)}
//                     placeholder="Full Name"
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//                     required
//                   />
//                 </div>
//               )}
              
//               <div className="relative">
               
//                 <input
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition "
//                   required
//                 />
//               </div>
              
//               <div className="relative">
                
//                 <input
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   type="password"
//                   placeholder="Password"
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//                   required
//                 />
//               </div>
              
//               {isLogin && (
//                 <div className="flex justify-end">
//                   <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800 transition">
//                     Forgot password?
//                   </a>
//                 </div>
//               )}
              
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 group"
//                 disabled={isLoading}
//               >
//                 {isLoading ? 'Processing...' : isLogin ? 'Sign In' : 'Create Account'}
                
//               </button>
//             </form>
            
//             <div className="mt-8">
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-300"></div>
//                 </div>
               
//               </div>
              
//             </div>
            
//             <p className="text-gray-600 text-center mt-8">
//               {isLogin ? "Don't have an account?" : "Already have an account?"}
//               <button
//                 type="button"
//                 onClick={loginHandler}
//                 className="ml-1 text-indigo-600 font-medium hover:text-indigo-800 focus:outline-none transition"
//               >
//                 {isLogin ? 'Sign up' : 'Sign in'}
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>
      
//       <footer className="py-4 text-center text-white">
//         <p>&copy; {new Date().getFullYear()} MindSkoon. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Login;


import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setLoading } from '../redux/userSlice.jsx';

const API_END_POINT = 'http://localhost:8080/api/v1/user';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [animateForm, setAnimateForm] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.app.isLoading);

  useEffect(() => {
    // Start animation after component mounts
    setAnimateForm(true);
  }, []);

  const loginHandler = () => {
    // Trigger animation out
    setAnimateForm(false);
    
    // Wait for animation to complete before switching forms
    setTimeout(() => {
      setIsLogin(!isLogin);
      setAnimateForm(true);
    }, 300);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    const user = isLogin ? { email, password } : { fullName, email, password };
    const apiUrl = isLogin ? `${API_END_POINT}/login` : `${API_END_POINT}/register`;

    try {
      // const res = await axios.post(apiUrl, user, {
      //   headers: { 'Content-Type': 'application/json' },
      //   withCredentials: true,
      // });

      const res = await axios.post(apiUrl, user, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      

      if (res && res.data) {
        toast.success(res.data.message);
        if (isLogin) {
          dispatch(setUser(res.data.user));
          navigate('/');
        } else {
          setIsLogin(true);
        }
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
      console.log(error);
    } finally {
      dispatch(setLoading(false));
      setFullName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-pink-800 flex flex-col">
      <Header />
      
      <div className="flex flex-grow items-center justify-center px-4 py-12">
        <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Left side image and motivational content */}
          <div className="hidden md:block w-1/2 bg-red-700 p-12 text-white relative">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col justify-center p-12 z-10">
              <h2 className="text-4xl font-bold mb-6">Welcome to MindSkoon</h2>
              <p className="text-lg mb-8">
                Begin your journey to mental wellness and personal growth today.
                Join our community of mindful individuals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="text-lg">Personalized growth plans</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="text-lg">Expert guidance and resources</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="text-lg">Supportive community</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side form */}
          <div className={`w-full md:w-1/2 p-8 md:p-12 transition-all duration-300 ${animateForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
              {isLogin ? 'Welcome Back' : 'Create Your Account'}
            </h1>
            
            <p className="text-gray-600 text-center mb-8">
              {isLogin 
                ? 'Enter your credentials to access your account' 
                : 'Start your journey to mental wellness today'}
            </p>
            
            <form onSubmit={getInputData} className="space-y-6">
              {!isLogin && (
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500">
                  
                  </span>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                    required
                  />
                </div>
              )}
              
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500">
                
               
                </span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                  required
                />
              </div>
              
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500">
                 
                </span>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                  required
                />
              </div>
              
              {isLogin && (
                <div className="flex justify-end">
                  <a href="#" className="text-sm text-red-600 hover:text-red-800 transition">
                    Forgot password?
                  </a>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 group"
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : isLogin ? 'Sign In' : 'Create Account'}
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
           
            
            <p className="text-gray-600 text-center mt-8">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={loginHandler}
                className="ml-1 text-red-600 font-medium hover:text-red-800 focus:outline-none transition"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
      
      <footer className="py-4 text-center text-white">
        <p>&copy; {new Date().getFullYear()} MindSkoon. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;