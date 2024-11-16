import { Eye, EyeOff, Globe } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { SinginUrl } from "@/GlobalApi";
import axios from "axios";

export const Signin = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("inside handleSubmit");
      const res = await axios.post(SinginUrl,{
        email,
        password
      })

      // if (res.status != 200) {
      //   alert("something went wrong")
      //   console.log(res.status);
      //   return;
      // }
      console.log("before jwt");
      const jwt = res.data.token;
      localStorage.setItem("token",jwt);
      navigate("/dashboard");
      console.log("after jwt");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col justify-center items-center px-4">
      <div className="max-w-md bg-white w-full rounded-lg shadow-md p-8">
        <div className="flex justify-center mb-8">
          <Globe className="size-12 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-center">
          Login to Global Trade Connect
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 ">
          <div>
            <div className="pb-2">
              <Label htmlFor="email">Email</Label>
            </div>
            <Input
              id="email"
              type="email"
              placeholder="vedika@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative gap-2 pt-2">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="size-5 text-blue-400" />
                ) : (
                  <Eye className="size-5 text-blue-400" />
                )}
              </button>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Log In
          </Button>
        </form>
        <div className="mt-6 text-center">
          <Link to="" className="text-blue-600 hover:underline">
            Forgot password
          </Link>
        </div>
      </div>
      <p className="mt-8 text-center text-sm text-gray-600">
        Don{"' "} have an account?{" "}
        <Link to="#" className="font-medium text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};
