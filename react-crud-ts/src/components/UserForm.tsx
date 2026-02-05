import { useForm } from "react-hook-form";
import { userFormConfig } from "../config/formConfig";
import type { User } from "../types/user";
import { useState } from "react";

interface Props {
  onSubmit: (data: User) => void;
  defaultValues?: User;
}

export default function UserForm({ onSubmit, defaultValues }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
  } = useForm<User>({
    defaultValues,
    mode: "onChange",
  });

  const [successMessage, setSuccessMessage] = useState(false);

  const submitHandler = (data: User) => {
    onSubmit(data);
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 3000);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="bg-gradient-to-br from-slate-900 to-black p-10 rounded-2xl shadow-2xl border border-slate-700 mb-12"
    >
      <h2 className="text-3xl font-bold mb-8 text-slate-800">
        ➕ Add or Edit User
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
              : isSubmitted
                ? "bg-emerald-950 border-emerald-600 text-emerald-300 placeholder:text-emerald-400 focus:ring-2 focus:ring-emerald-600/40"
                : "bg-slate-900 border-slate-700 text-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-600/30"
          }`;

          /* Label Classes */
          const labelClasses = `block mb-2 text-sm font-medium ${
            hasError
              ? "text-red-400"
              : isSubmitted
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
                    : isSubmitted
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
              ) : isSubmitted ? (
                <p className="mt-2 text-sm text-emerald-400">
                  Well done! Some success message.
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:shadow-lg active:scale-95"
      >
        💾 Save User
      </button>
    </form>
    // <div className="bg-red-600 text-white p-4 text-xl">Tailwind Working</div>
  );
}
