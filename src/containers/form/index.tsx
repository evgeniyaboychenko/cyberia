// import { memo, useCallback, useState, useRef } from 'react';
// import { ReactNode } from 'react';
import Field from '../../components/field';
import { INPUT_ID } from '../../constants';
import './style.scss';

// interface Props {
//   // title?: ReactNode
// }

function Form() {
  return (
    <form className='form' id='form'>
      <div className='form__wrap'>
        <Field label='Ваше имя*'>
          <input id={INPUT_ID.NAME}></input>
        </Field>
        <Field label='Email*'>
          <input id={INPUT_ID.EMAIL}></input>
        </Field>
        <Field label='Телефон*'>
          <input id={INPUT_ID.PHONE}></input>
        </Field>
      </div>
      <Field label='Сообщение*' typeField='textarea'>
        <textarea rows={5} id={INPUT_ID.MESSAGE}></textarea>
      </Field>
      <Field label='Согласие на обработку персональных данных' typeField='checkbox'>
        <input id={INPUT_ID.CONSENT} type='checkbox'></input>
        <div className='field__check'></div>
      </Field>
      <button className='form__button' type='submit'>
        Обсудить проект
      </button>
    </form>
  );
}

export default Form;
