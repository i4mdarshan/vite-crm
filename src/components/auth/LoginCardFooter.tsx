import { Link } from "react-router-dom";

const LoginCardFooter = () => {
  return (
    <div className='mt-4 text-center text-sm'>
      Don&apos;t have an account?{" "}
      <Link to='/register' className='underline'>
        Sign up
      </Link>
    </div>
  );
};

export default LoginCardFooter;
