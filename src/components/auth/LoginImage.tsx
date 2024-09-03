const LoginImage = () => {
  return (
    <div className='hidden bg-muted lg:block'>
      <img
        src='https://placehold.co/1920x1080'
        alt='BrandImage'
        width='1920'
        height='1080'
        className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
      />
    </div>
  );
};

export default LoginImage;
