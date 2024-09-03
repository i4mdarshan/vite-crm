import React from "react";

interface LoginCardHeaderProps {
  title: string;
  description: string;
}

const LoginCardHeader: React.FC<LoginCardHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className='grid gap-2 text-left'>
      <h1 className='text-3xl font-bold'>{title || "LOGIN_CARD_TITLE"}</h1>
      <p className='text-balance text-muted-foreground'>
        {description || "LOGIN_CARD_DESCRIPTION"}
      </p>
    </div>
  );
};

export default LoginCardHeader;
