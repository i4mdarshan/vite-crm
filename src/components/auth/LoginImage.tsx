import LoginPNG from "@/assets/login.png";

const LoginImage = () => {
  return (
    <div className='hidden bg-muted lg:block'>
      <img
        src={LoginPNG}
        alt='BrandImage'
        width='1920'
        height='1080'
        className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
      />
    </div>
  );
};

export default LoginImage;
