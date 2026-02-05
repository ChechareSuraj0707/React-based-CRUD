export interface FieldConfig {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  pattern?: RegExp;
}

export const userFormConfig: FieldConfig[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    required: true,
    pattern: /^[0-9]{10}$/,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    pattern: /^\S+@\S+\.\S+$/,
  },
];
