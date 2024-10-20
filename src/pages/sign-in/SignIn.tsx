import { SignIn } from "@/types/signin";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SignInSchema } from "@/schema/signin";
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
import { signin } from "@/api/auth/signin";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  const form = useForm<SignIn>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      username: "otonghyuga",
      password: "otonghyuga",
    },
  });

  const { mutateAsync: signinMutation } = useMutation({
    mutationFn: signin,
  });

  const onSubmit = form.handleSubmit(async (data) => {
    const promise = signinMutation(data);
    toast.promise(
      promise
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("name", res.data.name);
          localStorage.setItem("username", res.data.username);
          localStorage.setItem("email", res.data.email);
        })
        .catch((err) => {
          console.log("err");
          throw err.response.data;
        })
        .finally(() => {
          navigate("/");
        }),
      {
        loading: "Loading...",
        success: "Signin success",
        error: (err) => `${err.message}`,
      }
    );
  });

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={onSubmit}
          className="flex flex-col w-full max-w-[400px] gap-5"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
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
                  <Input placeholder="password" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant={"secondary"}>
            Submit
          </Button>

          <div className="w-full text-center text-sm">
            Don't have an account, yet?{" "}
            <a
              href="/auth/sign-up"
              className=" text-accent hover:text-white transition-all"
            >
              Sign-up
            </a>{" "}
            here
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignInPage;
