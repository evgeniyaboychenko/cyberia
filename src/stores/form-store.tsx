import RootStore from './root-store';
import axios, { AxiosResponse } from 'axios';
import { makeAutoObservable, runInAction } from 'mobx';
import {
  InputField,
  FieldTypes,
  EmailValidationErrors,
  NameValidationErrors,
  ResponseForm,
  ConsentValidationErrors,
  PhoneValidationErrors,
  MessageValidationErrors,
} from '../types';

class FormStore {
  rootStore: RootStore;

  isSubmitted = false;
  fields: Record<string, InputField>;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.fields = {
      EMAIL: {
        isValid: false,
        error: '',
        value: '',
      },
      NAME: {
        isValid: false,
        error: '',
        value: '',
      },
      PHONE: {
        isValid: false,
        error: '',
        value: '',
      },
      MESSAGE: {
        isValid: false,
        error: '',
        value: '',
      },
      CONSENT: {
        isValid: false,
        error: '',
        value: '',
      },
    } as Record<string, InputField>;

    makeAutoObservable(this, undefined, { deep: true });
  }

  resetForm = () => {
    this.fields = {
      EMAIL: {
        isValid: false,
        error: '',
        value: '',
      },
      NAME: {
        isValid: false,
        error: '',
        value: '',
      },
      PHONE: {
        isValid: false,
        error: '',
        value: '',
      },
      MESSAGE: {
        isValid: false,
        error: '',
        value: '',
      },
      CONSENT: {
        isValid: false,
        error: '',
        value: '',
      },
    };
  };

  onFormSubmit = async () => {
    const query = new URLSearchParams({
      phone: this.fields[FieldTypes.PHONE].value,
      email: this.fields[FieldTypes.EMAIL].value,
      message: this.fields[FieldTypes.MESSAGE].value,
    });

    const api = `/api/v1/feedbacks?${query.toString()}`;

    try {
      this.isSubmitted = true;
      const res = await axios.post(api, {});
      if (res.status === 200) {
        this.resetForm();
        this.isSubmitted = false;
        alert(res.data.message);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.status === 422) {
          const resp = err.response as AxiosResponse<ResponseForm>;
          if (resp.data.errors?.email) {
            runInAction(() => {
              this.isSubmitted = false;
              this.fields[FieldTypes.EMAIL].error = resp.data.errors?.email;
              this.fields[FieldTypes.EMAIL].isValid = false;
            });
          }
          if (resp.data.errors?.phone) {
            runInAction(() => {
              this.isSubmitted = false;
              this.fields[FieldTypes.PHONE].error = resp.data.errors?.phone;
              this.fields[FieldTypes.PHONE].isValid = false;
            });
          }
          if (resp.data.errors?.message) {
            runInAction(() => {
              this.isSubmitted = false;
              this.fields[FieldTypes.MESSAGE].error = resp.data.errors?.message;
              this.fields[FieldTypes.MESSAGE].isValid = false;
            });
          }
        }
        return;
      } else if (err instanceof Error) {
        this.isSubmitted = false;
        console.error(err);
      }
    }
  };

  validate = (value: string, type: FieldTypes) => {
    switch (type) {
      case FieldTypes.EMAIL: {
        const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (value === '') {
          this.fields[FieldTypes.EMAIL].error = EmailValidationErrors.EMPTY;
          this.fields[FieldTypes.EMAIL].isValid = false;
        } else if (!pattern.test(value)) {
          this.fields[FieldTypes.EMAIL].error = EmailValidationErrors.PATTERN;
          this.fields[FieldTypes.EMAIL].isValid = false;
        } else {
          this.fields[FieldTypes.EMAIL].isValid = true;
        }
        break;
      }
      case FieldTypes.NAME: {
        if (value === '') {
          this.fields[FieldTypes.NAME].error = NameValidationErrors.EMPTY;
          this.fields[FieldTypes.NAME].isValid = false;
        } else {
          this.fields[FieldTypes.NAME].isValid = true;
        }
        break;
      }
      case FieldTypes.PHONE: {
        const pattern = /^[7-8]{1}[0-9]{10}$/;
        if (value === '') {
          this.fields[FieldTypes.PHONE].error = PhoneValidationErrors.EMPTY;
          this.fields[FieldTypes.PHONE].isValid = false;
        } else if (!pattern.test(value)) {
          this.fields[FieldTypes.PHONE].error = PhoneValidationErrors.PATTERN;
          this.fields[FieldTypes.PHONE].isValid = false;
        } else {
          this.fields[FieldTypes.PHONE].isValid = true;
        }
        break;
      }
      case FieldTypes.MESSAGE: {
        if (value === '') {
          this.fields[FieldTypes.MESSAGE].error = MessageValidationErrors.EMPTY;
          this.fields[FieldTypes.MESSAGE].isValid = false;
        } else {
          this.fields[FieldTypes.MESSAGE].isValid = true;
        }
        break;
      }
      case FieldTypes.CONSENT: {
        if (value === 'false' || value === '') {
          this.fields[FieldTypes.CONSENT].error = ConsentValidationErrors.EMPTY;
          this.fields[FieldTypes.CONSENT].isValid = false;
        } else {
          this.fields[FieldTypes.CONSENT].isValid = true;
        }
        break;
      }
      default:
        break;
    }
  };

  handleInputChange = (value: string, type: FieldTypes) => {
    this.fields[type].value = value;
    this.validate(value, type);
  };
}

export default FormStore;
