import { ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import { FieldTypes } from '../../types';
import './style.scss';

interface Props {
  label: ReactNode;
  children: ReactNode;
  typeField?: string;
  error?: ReactNode;
  name: FieldTypes;
  isValid?: boolean;
}

const Field = observer(({ ...props }: Props) => {
  const { label, children, typeField = 'input', error, isValid = true } = props;
  return (
    <div className='field'>
      <label className='field__label'>
        <div className={`field__${typeField}`}>{children}</div>
        <span className='field__label-text'>{label}</span>
      </label>
      {isValid ? '' : <div className='field__error'>{error}</div>}
    </div>
  );
});

export default Field;
