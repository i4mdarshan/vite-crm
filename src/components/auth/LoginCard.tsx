const LoginCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='flex items-center justify-center py-12'>
      <div className='mx-auto grid w-[350px] gap-6'>{children}</div>
    </div>
  );
};

export default LoginCard;
