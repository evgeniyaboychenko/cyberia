import { observer } from 'mobx-react-lite';
import Field from '../../components/field';
import { FieldTypes } from '../../types';
import { useStores } from '../../stores';
import './style.scss';

const Form = observer(() => {
  const store = useStores();

  return (
    <form
      className='form'
      id='form'
      onSubmit={(evt) => {
        evt.preventDefault();
        void store.formStore.onFormSubmit();
      }}
    >
      <div className='form__wrap'>
        <Field
          label='Ваше имя*'
          name={FieldTypes.NAME}
          error={store.formStore.fields[FieldTypes.NAME].error}
          isValid={store.formStore.fields[FieldTypes.NAME].isValid}
        >
          <input
            autoComplete='off'
            id={FieldTypes.NAME}
            value={store.formStore.fields[FieldTypes.NAME].value}
            onInput={(evt) =>
              store.formStore.handleInputChange(
                (evt.target as HTMLInputElement).value,
                FieldTypes.NAME
              )
            }
          ></input>
        </Field>
        <Field
          label='Email*'
          name={FieldTypes.EMAIL}
          error={store.formStore.fields[FieldTypes.EMAIL].error}
          isValid={store.formStore.fields[FieldTypes.EMAIL].isValid}
        >
          <input
            autoComplete='off'
            id={FieldTypes.EMAIL}
            value={store.formStore.fields[FieldTypes.EMAIL].value}
            onInput={(evt) =>
              store.formStore.handleInputChange(
                (evt.target as HTMLInputElement).value,
                FieldTypes.EMAIL
              )
            }
          ></input>
        </Field>
        <Field
          label='Телефон*'
          name={FieldTypes.PHONE}
          error={store.formStore.fields[FieldTypes.PHONE].error}
          isValid={store.formStore.fields[FieldTypes.PHONE].isValid}
        >
          <input
            autoComplete='off'
            id={FieldTypes.PHONE}
            value={store.formStore.fields[FieldTypes.PHONE].value}
            onInput={(evt) =>
              store.formStore.handleInputChange(
                (evt.target as HTMLInputElement).value,
                FieldTypes.PHONE
              )
            }
          ></input>
        </Field>
      </div>
      <Field
        label='Сообщение*'
        typeField='textarea'
        name={FieldTypes.MESSAGE}
        error={store.formStore.fields[FieldTypes.MESSAGE].error}
        isValid={store.formStore.fields[FieldTypes.MESSAGE].isValid}
      >
        <textarea
          value={store.formStore.fields[FieldTypes.MESSAGE].value}
          rows={7}
          id={FieldTypes.MESSAGE}
          onInput={(evt) =>
            store.formStore.handleInputChange(
              (evt.target as HTMLInputElement).value,
              FieldTypes.MESSAGE
            )
          }
        ></textarea>
      </Field>
      <Field
        label='Согласие на обработку персональных данных'
        typeField='checkbox'
        name={FieldTypes.CONSENT}
        error={store.formStore.fields[FieldTypes.CONSENT].error}
        isValid={store.formStore.fields[FieldTypes.CONSENT].isValid}
      >
        <input
          id={FieldTypes.CONSENT}
          type='checkbox'
          checked={store.formStore.fields[FieldTypes.CONSENT].value === 'true' ? true : false}
          onChange={(evt) =>
            store.formStore.handleInputChange(
              String((evt.target as HTMLInputElement).checked),
              FieldTypes.CONSENT
            )
          }
        ></input>
        <div className='field__check'></div>
      </Field>
      {store.formStore.isSubmitted ? (
        <button className={'form__button form__button--loading'} type='submit' disabled={true}>
          Обсудить проект
        </button>
      ) : (
        <button
          type='submit'
          className={'form__button'}
          disabled={
            !store.formStore.fields[FieldTypes.CONSENT].isValid ||
            !store.formStore.fields[FieldTypes.EMAIL].isValid ||
            !store.formStore.fields[FieldTypes.PHONE].isValid ||
            !store.formStore.fields[FieldTypes.MESSAGE].isValid ||
            !store.formStore.fields[FieldTypes.NAME].isValid
              ? true
              : false
          }
        >
          Обсудить проект
        </button>
      )}
    </form>
  );
});

export default Form;
