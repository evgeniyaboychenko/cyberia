import { ReactNode } from 'react';
import './style.scss';

interface Props {
  label: ReactNode;
  children: ReactNode;
  typeField?: string;
  error?: ReactNode;
}

function Field({ ...props }: Props) {
  const { label, children, typeField = 'input', error } = props;
  return (
    <div className='field'>
      <label className='field__label'>
        <div className={`field__${typeField}`}>{children}</div>
        <span className='field__label-text'>{label}</span>
      </label>
      <div className='field__error'>{error}</div>
    </div>
  );
}

export default Field;
