import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Button, Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import SetHelmet from "../../Shared/SetHelmet/SetHelmet";
import { useForm } from "react-hook-form";

export function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle login logic here
  };

  return (
    <>
      <SetHelmet title="Login" />
      <section className="bg-light animate__animated animate__fadeIn grid text-center items-center p-8 w-96 border-2 border-primary rounded-xl shadow-2xl shadow-primary">
        <div>
          <Typography variant="h3" className="mb-2 text-primary">
            B-Pay
          </Typography>

          <Typography className="mb-4 text-success font-normal text-[18px]">
            Enter your phone number/email and pin to login
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-[24rem] text-left"
          >
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
                  required: "Email or phone number is required",
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
                labelProps={{
                  className: "hidden",
                }}
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
                  required: "PIN is required",
                  pattern: {
                    value: /^\d{5}$/,
                    message: "PIN must be exactly 5 digits",
                  },
                })}
                size="lg"
                placeholder="12345"
                labelProps={{
                  className: "hidden",
                }}
                className="w-full placeholder:opacity-100 focus:border-secondary"
                type={passwordShown ? "text" : "password"}
                icon={
                  <i onClick={togglePasswordVisibility}>
                    {passwordShown ? (
                      <EyeIcon className="h-5 w-5" />
                    ) : (
                      <EyeSlashIcon className="h-5 w-5" />
                    )}
                  </i>
                }
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <Button
              size="lg"
              className="mt-6 bg-primary hover:bg-secondary duration-200 capitalize"
              fullWidth
              type="submit"
            >
              Login
            </Button>

            <Typography
              variant="small"
              color="gray"
              className="!mt-4 text-center font-normal"
            >
              Not registered?{" "}
              <Link
                to="/register"
                className="font-bold text-success hover:underline-offset-2 hover:underline"
              >
                Create account
              </Link>
            </Typography>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
