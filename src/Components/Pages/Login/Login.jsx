import { useState } from "react";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Button, Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import SetHelmet from "../../Shared/SetHelmet/SetHelmet";

export function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  return (
    <>
      <SetHelmet title="Login" />
      <section className="bg-light animate__animated animate__fadeIn grid text-center items-center p-8 w-96 border-2 border-primary rounded-xl shadow-2xl shadow-primary ">
        <div >
          <Typography variant="h3" className="mb-2 text-primary">
            B-Pay
          </Typography>

          <Typography className="mb-4 text-success font-normal text-[18px]">
            Enter your phone number/email and pin to login
          </Typography>
          <form action="#" className="mx-auto max-w-[24rem] text-left">
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
                id="email"
                color="gray"
                size="lg"
                type="email"
                name="email"
                placeholder="name@mail.com / 01954114410"
                className="w-full placeholder:opacity-100 focus:border-secondary "
                labelProps={{
                  className: "hidden",
                }}
              />
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
                size="lg"
                placeholder="12345"
                labelProps={{
                  className: "hidden",
                }}
                className="w-full placeholder:opacity-100 focus:border-secondary "
                type={passwordShown ? "text" : "password"}
                icon={
                  <i onClick={togglePasswordVisiblity}>
                    {passwordShown ? (
                      <EyeIcon className="h-5 w-5" />
                    ) : (
                      <EyeSlashIcon className="h-5 w-5" />
                    )}
                  </i>
                }
              />
            </div>
            <Button size="lg" className="mt-6 bg-primary hover:bg-secondary duration-200 capitalize" fullWidth>
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
