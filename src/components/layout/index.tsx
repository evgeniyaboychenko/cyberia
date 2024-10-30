import { ReactNode } from 'react';
import './style.scss';

interface Props {
  children?: ReactNode;
  className?: string;
}

function Layout({ className = 'layout', children }: Props) {
  return <div className={className}>{children}</div>;
}

export default Layout;
