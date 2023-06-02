import { ReactNode } from 'react';

type Props = {
  className: string,
  children?: ReactNode,
};

export const Container = ({ className, children, }: Props) => {
  return (
    <div className={`container lg mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
};
