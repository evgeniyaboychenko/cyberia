export enum EmailValidationErrors {
  EMPTY = 'Поле не может быть пустым',
  PATTERN = 'Неверный формат email',
}

export enum PhoneValidationErrors {
  EMPTY = 'Поле не может быть пустым',
  PATTERN = 'Неверный формат телефона',
}

export enum NameValidationErrors {
  EMPTY = 'Имя не может быть пустым',
}

export enum MessageValidationErrors {
  EMPTY = 'Сообщение не может быть пустым',
}

export enum ConsentValidationErrors {
  EMPTY = 'Поле обязательно',
}

export enum FieldTypes {
  EMAIL = 'EMAIL',
  NAME = 'NAME',
  PHONE = 'PHONE',
  MESSAGE = 'MESSAGE',
  CONSENT = 'CONSENT',
}

export interface InputField {
  isValid: boolean;
  error:
    | EmailValidationErrors
    | PhoneValidationErrors
    | NameValidationErrors
    | MessageValidationErrors
    | ConsentValidationErrors
    | ''
    | string[]
    | undefined;
  value: string;
}

export interface Cases {
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  categories: Categories[];
  project_url: string;
}

export interface Categories {
  id: string;
  name: string;
}

export interface ResponseDataCases {
  items: Cases[];
}

export interface ResponseForm {
  errors: { email: string[]; phone: string[]; message: string[] } | null;
}

export interface ResponseDataCategories {
  items: Categories[];
}

export interface FormData {
  query: [
    {
      key: string;
      value: '79999999999';
    },
    {
      key: 'email';
      value: 'test@test.com';
    },
    {
      key: 'message';
      value: 'kjhsfgjonbsfg';
    },
  ];
}
