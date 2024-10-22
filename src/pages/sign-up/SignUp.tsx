import { SignUp } from "@/types/signup";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SignUpSchema } from "@/schema/signup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signup } from "@/api/auth/signup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/layout/AuthLayout";

const SignUpPage = () => {
  const navigate = useNavigate();

  const form = useForm<SignUp>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const { mutateAsync: signupMutation } = useMutation({
    mutationFn: signup,
  });

  const onSubmit = form.handleSubmit(async (data) => {
    const promise = signupMutation(data);
    toast.promise(
      promise
        .then(() => {
          navigate("/auth/sign-in");
        })
        .catch((err) => {
          console.log("err");
          throw err.response.data;
        }),
      {
        loading: "Loading...",
        success: "Signup success",
        error: (err) => `${err.message}`,
      }
    );
  });

  return (
    <AuthLayout>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Form {...form}>
          <form
            onSubmit={onSubmit}
            className="flex flex-col w-full max-w-[400px] gap-5"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email"
                      {...field}
                      required
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="password"
                      {...field}
                      type="password"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" variant={"secondary"}>
              Submit
            </Button>
            <div className="w-full text-center text-sm">
              Already have an account, yet?{" "}
              <a
                href="/auth/sign-in"
                className=" text-accent hover:text-white transition-all"
              >
                Sign-in
              </a>{" "}
              here
            </div>
          </form>
        </Form>
      </div>
    </AuthLayout>
  );
};

export default SignUpPage;
