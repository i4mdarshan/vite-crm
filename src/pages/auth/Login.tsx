import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Label,
  LoginContainer,
  LoginCard,
  LoginImage,
  LoginCardHeader,
} from "@/components";
import { useConstantStrings, usePageTitle } from "@/hooks";
import { Link } from "react-router-dom";

const Login = () => {
  usePageTitle("Login | viteCRM");
  const strings = useConstantStrings();

  return (
    <>
      <LoginContainer>
        <LoginCard>
          <LoginCardHeader
            title={strings.LOGIN_CARD_TITLE}
            description={strings.LOGIN_CARD_DESCRIPTION}
          />
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                required
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' type='password' required />
            </div>
            <Button type='submit' className='w-full'>
              Login
            </Button>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Link
                  to='/forgot-password'
                  className='ml-auto inline-block text-sm underline'
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <Button variant='outline' className='w-full'>
              Login with Google
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            Don&apos;t have an account?{" "}
            <Link to='/register' className='underline'>
              Sign up
            </Link>
          </div>
        </LoginCard>
        <LoginImage />
      </LoginContainer>
    </>
  );
};

export default Login;
