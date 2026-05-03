"use client";
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const route = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      fetchOptions: {
        onSuccess: () => {
          toast.success("Sing in successful");
          route.push("/");
        },
        onError: (error) => {
          toast.error(error.message);
        },
      },
    });
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      fetchOptions: {
        onSuccess: () => {
          route.push("/");
          toast.success("Sing in successful");
        },
        onError: (error) => {
          toast.error(error.message);
        },
      },
    });
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>
      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              //   className="w-full max-w-[280px]"
              type={isVisible ? "password" : "text"}
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <EyeSlash className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
      <Separator />
      <p className="text-center">Or</p>
      <Separator />
      <Button
        onClick={handleGoogleSignIn}
        className={"flex justify-center w-full"}
      >
        <FcGoogle /> Sing in with google
      </Button>
    </Card>
  );
};

export default SignInPage;
