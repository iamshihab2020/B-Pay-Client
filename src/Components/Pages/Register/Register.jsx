import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Button, Input, Typography } from "@material-tailwind/react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SetHelmet from "../../Shared/SetHelmet/SetHelmet";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);

  const onSubmit = async (data) => {
    try {
      const { names, email, password } = data;
      const role = "user"; // Set default role to 'user'

      const userCredential = {
        name: names,
        email,
        pin: password,
        role,
      };

      const res = await axiosPublic.post("/users", userCredential);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your account has been successfully created",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          navigate(from, { replace: true });
        });
      } else {
        throw new Error("Failed to insert user");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "There was an error creating your account",
        showConfirmButton: true,
      });
    }
  };

  return (
    <>
      <SetHelmet title="Register" />
      <section className="animate__animated animate__fadeIn h-screen flex items-center justify-center bg-customRadial px-3 md:px-8 lg:px-10">
        <div className="bg-light grid text-center items-center p-8 w-96 border-2 border-primary rounded-xl shadow-2xl shadow-primary">
          <div>
            <Typography variant="h3" className="mb-2 text-primary">
              B-Pay
            </Typography>

            <Typography className="mb-4 text-success font-normal text-[18px]">
              Fill up all details to register
            </Typography>
            <form
              className="mx-auto max-w-[24rem] text-left"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-6">
                <label htmlFor="names">
                  <Typography
                    variant="md"
                    className="mb-2 block font-bold text-secondary"
                  >
                    Your Name
                  </Typography>
                </label>
                <Input
                  {...register("names", { required: true })}
                  id="names"
                  color="gray"
                  size="lg"
                  type="text"
                  name="names"
                  placeholder="John Doe"
                  className="w-full placeholder:opacity-100 focus:border-secondary border-primary"
                />
                {errors.names && (
                  <p className="text-red-500">Name is required.</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="email">
                  <Typography
                    variant="md"
                    className="mb-2 block font-bold text-secondary"
                  >
                    Your Email / Your Phone
                  </Typography>
                </label>
                <Input
                  {...register("email", {
                    required: true,
                    pattern: {
                      value:
                        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$|^\d{11}$/,
                      message: "Invalid email or phone number format",
                    },
                  })}
                  id="email"
                  color="gray"
                  size="lg"
                  type="text"
                  name="email"
                  placeholder="name@mail.com / 01954114410"
                  className="w-full placeholder:opacity-100 focus:border-secondary"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="password">
                  <Typography
                    variant="md"
                    className="mb-2 block font-bold text-secondary"
                  >
                    PIN (5 Digits)
                  </Typography>
                </label>
                <Input
                  {...register("password", {
                    required: true,
                    maxLength: 5,
                    pattern: {
                      value: /^\d{5}$/,
                      message: "PIN must be 5 digits",
                    },
                  })}
                  size="lg"
                  placeholder="12345"
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  className="w-full placeholder:opacity-100 focus:border-secondary"
                  icon={
                    <i onClick={togglePasswordVisibility}>
                      {passwordShown ? (
                        <EyeIcon className="h-5 w-5" />
                      ) : (
                        <EyeSlashIcon className="h-5 w-5" />
                      )}
                    </i>
                  }
                  inputProps={{ maxLength: 5 }} // Max length set here
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

              <Button
                size="lg"
                className="mt-6 capitalize bg-primary  hover:bg-secondary duration-200"
                type="submit"
                fullWidth
              >
                Register
              </Button>

              <Typography
                variant="small"
                color="gray"
                className="!mt-4 text-center font-normal"
              >
                Already have an account?{" "}
                <Link
                  to="/"
                  className="font-bold text-success hover:underline-offset-2 hover:underline"
                >
                  Login
                </Link>
              </Typography>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
