import { useState } from "react";
import sideImage from "../../assets/files-min.jpeg";
import CustomBtn from "../../components/CustomBtn";
import CustomInput from "../../components/CustomInput";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='flex'>
      <div className='w-1/2'>
        {/* IMAGE CONTAINER */}
        <div className='h-screen'>
          <img src={sideImage} className='h-full w-full' alt='' />
          <h3 className='absolute text-2xl text-white font-bold top-5 left-5 mt-10 ml-10'>
            Zupa
          </h3>

          <div className='absolute top-5 center-5 my-60 ml-10'>
            <h3 className='max-w-lg text-4xl font-semibold text-white mb-5'>
              Super Charge your <br />
              business
            </h3>

            <p className='text-white'>
              Super Charge Growth for <br />
              your business
            </p>
          </div>
        </div>
      </div>

      <div className='w-5/6'>
        {/* AUTH CONTAINER */}
        <div className='pt-20 px-28'>
          <div className='flex justify-between'>
            <div className='flex'>
              <i className='fa-solid fa-arrow-left mr-5 mt-1'></i>
              <p className='font-semibold'>Go Back</p>
            </div>

            <div className='flex'>
              <p className='font-medium mr-5'>Don't have an account</p>
              <CustomBtn btnMargin={"-mt-3"}>Sign Up</CustomBtn>
            </div>
          </div>

          <div className='flex flex-col w-4/6'>
            <div className='mt-40'>
              <h1 className='text-3xl font-semibold mb-2'>Sign In Into Zupa</h1>
              <p className='text-xl text-gray-500 font-medium'>
                Enter your details
              </p>
            </div>

            {/* INPUT ELEMENT */}
            <form onSubmit={handleSubmit}>
              <div className="className='flex flex-col space-y-8 mt-10">
                <CustomInput
                  inputProps={{
                    type: "email",
                    name: "email",
                    placeholder: "Enter Email Address",
                    value: formData.email,
                    onChange: handleChange,
                  }}
                />

                <CustomInput
                  inputProps={{
                    type: "password",
                    name: "password",
                    placeholder: "Enter Password",
                    value: formData.password,
                    onChange: handleChange,
                  }}
                />
              </div>

              <div className='flex justify-end mt-4'>
                <p className='text-sm text-primaryColor font-medium'>
                  <a href='#forgot-password'>Forgot Password?</a>
                </p>
              </div>

              <CustomBtn type='submit' btnMargin={"mt-5"}>
                Sign In
              </CustomBtn>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
