import { useState } from "react";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import SetHelmet from "../../Shared/SetHelmet/SetHelmet";

export function Register() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  return (
    <>
      <SetHelmet title="Register" />
      <section className="animate__animated animate__fadeIn h-screen flex items-center justify-center bg-light ">
        <div className="grid text-center items-center p-8 w-96 border-2 border-primary rounded-xl shadow-2xl shadow-primary">
          <div>
            <Typography variant="h3" className="mb-2 text-primary">
              B-Pay
            </Typography>

            <Typography className="mb-4 text-success font-normal text-[18px]">
              Fill up all details to register
            </Typography>
            <form action="#" className="mx-auto max-w-[24rem] text-left">
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
                  id="names"
                  color="gray"
                  size="lg"
                  type="text"
                  name="names"
                  placeholder="John Dow"
                  className="w-full placeholder:opacity-100 focus:border-secondary "
                  labelProps={{
                    className: "hidden",
                  }}
                />
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
              <Button
                size="lg"
                className="mt-6 capitalize bg-primary"
                fullWidth
              >
                Register
              </Button>

              <Typography
                variant="small"
                color="gray"
                className="!mt-4 text-center font-normal"
              >
                Already have account?{" "}
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
