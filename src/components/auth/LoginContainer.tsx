const LoginContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className='w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]'>
      {children}
    </div>
  );
};

export default LoginContainer;
