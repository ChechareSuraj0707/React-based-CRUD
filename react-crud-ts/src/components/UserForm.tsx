import { useForm } from "react-hook-form";
import { userFormConfig } from "../config/formConfig";
import type { User } from "../types/user";
import { useState, useEffect } from "react";

interface Props {
  onSubmit: (data: User) => Promise<void>;
  onCancel?: () => void;
  defaultValues?: User;
}

export default function UserForm({ onSubmit, onCancel, defaultValues }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<User>({
    defaultValues,
    mode: "onChange",
  });
  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);
  const [successMessage, setSuccessMessage] = useState(false);

  const submitHandler = async (data: User) => {
    await onSubmit(data); // ✅ Wait for API call to complete

    // Show success message
    setSuccessMessage(true);

    // Reset form and hide success message after 2 seconds
    setTimeout(() => {
      // Reset to empty values (not defaultValues)
      reset({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      });
      setSuccessMessage(false);
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="bg-gradient-to-br from-slate-900 to-black p-10 rounded-2xl shadow-2xl border border-slate-700 mb-12"
    >
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-300 via-gray-100 to-white bg-clip-text text-transparent">
        {defaultValues ? "✏️ Edit User" : "➕ Add User"}
      </h2>

      {successMessage && (
        <div className="mb-6 p-4 bg-green-50 border border-green-300 rounded-lg">
          <p className="text-green-700 font-semibold text-sm">
            ✅ Success! User saved successfully.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {userFormConfig.map((field) => {
          const hasError = errors[field.name as keyof User];

          /* Input Classes */
          const inputClasses = `w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
            hasError
              ? "bg-red-950 border-red-600 text-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-red-600/40"
              : isSubmitSuccessful
                ? "bg-emerald-950 border-emerald-600 text-emerald-300 placeholder:text-emerald-400 focus:ring-2 focus:ring-emerald-600/40"
                : "bg-slate-900 border-slate-700 text-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-600/30"
          }`;

          /* Label Classes */
          const labelClasses = `block mb-2 text-sm font-medium ${
            hasError
              ? "text-red-400"
              : isSubmitSuccessful
                ? "text-emerald-400"
                : "text-slate-300"
          }`;

          return (
            <div key={field.name}>
              {/* Label */}
              <label className={labelClasses}>{field.label}</label>

              {/* Input */}
              <input
                type={field.type}
                className={inputClasses}
                placeholder={
                  hasError
                    ? "Error input"
                    : isSubmitSuccessful
                      ? "Success input"
                      : `Enter ${field.label.toLowerCase()}`
                }
                {...register(field.name as keyof User, {
                  required: field.required,
                  pattern: field.pattern,
                })}
              />

              {/* Message */}
              {hasError ? (
                <p className="mt-2 text-sm text-red-400">
                  Oh, snap! Some error message.
                </p>
              ) : isSubmitSuccessful ? (
                <p className="mt-2 text-sm text-emerald-400">
                  Well done! Some success message.
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:shadow-lg active:scale-95"
        >
          💾 Save User
        </button>

        {defaultValues && (
          <button
            type="button"
            onClick={() => {
              // Reset form with empty values (not defaultValues)
              reset({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
              });
              // Clear the parent edit state
              onCancel?.();
            }}
            className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-200 transform hover:shadow-lg active:scale-95"
          >
            ❌ Cancel
          </button>
        )}
      </div>
    </form>
    // <div className="bg-red-600 text-white p-4 text-xl">Tailwind Working</div>
  );
}
