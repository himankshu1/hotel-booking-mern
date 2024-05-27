import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";

export type RegisterForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterPage = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: () => {
      console.log("user registered");
    },
    onError: (error: Error) => {
      console.log("Error while user registration", error.message);
    },
  });

  const registerHandler = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form onSubmit={registerHandler}>
      <div className="translate-y-[-74px]">
        <Card className="mx-auto max-w-3xl md:max-w-lg px-8">
          <CardHeader>
            <CardTitle className="text-xl text-emerald-950">Register</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    placeholder="your first name"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                </div>
                {errors.firstName && (
                  <span className="text-red-500 text-sm mt-[-14px]">
                    * {errors.firstName.message}
                  </span>
                )}
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    placeholder="your last name"
                    {...register("lastName")}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email"
                  {...register("email", { required: "Email is required" })}
                />
              </div>
              {errors.email && (
                <span className="text-red-500 text-sm mt-[-14px]">
                  * {errors.email.message}
                </span>
              )}

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="strong password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "password must be 8 characters",
                    },
                  })}
                />
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm mt-[-14px]">
                  * {errors.password.message}
                </span>
              )}

              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="re-enter password"
                  {...register("confirmPassword", {
                    validate: (val) => {
                      if (!val) {
                        return "Password is required";
                      } else if (watch("password") !== val) {
                        return "Password do not match";
                      }
                    },
                  })}
                />
              </div>
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm mt-[-14px]">
                  * {errors.confirmPassword.message}
                </span>
              )}

              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700"
              >
                Create account
              </Button>
              <Button variant="outline" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Sign up with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/sign-in" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </form>
  );
};

export default RegisterPage;
