import { ReactNode } from 'react';
import cx from 'classnames';

type Props = {
  children?: ReactNode,
};

export const Container = ({ children, }: Props) => {
  return (
    <div className={cx("container lg")}>
      {children}
    </div>
  );
};
