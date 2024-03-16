"use client";
import AuthLayout from "@/layout/AuthLayout";
import { ISignInRequest } from "@/types/user.type";
import signinValidate, { signinInitValues } from "./config";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import http from "@/api/axiosClient";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const form = useForm<ISignInRequest>({
    mode: "all",
    defaultValues: signinInitValues,
    resolver: yupResolver(signinValidate),
  });
  const onSubmit = async (data: ISignInRequest) => {
    try {
      const response = await http.post("/auth/login", data);
      const accessToken = response.data;
      localStorage.setItem("accessToken", accessToken?.access_token);
      router.push("/");
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  return (
    <AuthLayout funcTitle="Sign Up" pageTitle="Sign In" toPage="/signin">
      <Form {...form}>
        <form
          className="flex flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold">Email</h3>
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter your email ..." {...field} />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold">Password</h3>
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password ..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <p className="flex justify-end font-medium cursor-pointer">
            Forgot password?
          </p>
          <div className="flex justify-end mt-3">
            <Button
              type="submit"
              size="lg"
              className="w-56 text-white bg-orange-primary"
            >
              Sign In
            </Button>
          </div>
        </form>
      </Form>
    </AuthLayout>
  );
}
