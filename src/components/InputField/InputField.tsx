import { useState } from "react";
import { Eye, EyeOff, X, Loader2 } from "lucide-react";
import type { InputFieldProps } from "../../types";


const InputField: React.FC<InputFieldProps> = ({
  value = "",
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",
  type = "text",
  showClear = false,
  showPasswordToggle = false,
  loading = false,
  id,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [internalValue, setInternalValue] = useState(value);

  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const isPassword = type === "password";
  const actualType = isPassword && showPassword ? "text" : type;
  const hasError = invalid || !!errorMessage;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(e);
  };

  const handleClear = () => {
    const syntheticEvent = {
      target: { value: "" },
      currentTarget: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;
    setInternalValue("");
    onChange?.(syntheticEvent);
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-4 py-3 text-lg",
  };

  const getVariantClasses = () => {
    const baseClasses =
      "w-full border transition-colors duration-200 focus:outline-none focus:ring-2";
    switch (variant) {
      case "filled":
        return `${baseClasses} bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-blue-500/20`;
      case "ghost":
        return `${baseClasses} bg-transparent border-transparent focus:border-blue-500 focus:ring-blue-500/20`;
      default:
        return `${baseClasses} bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500/20`;
    }
  };

  const inputClasses = `
    ${getVariantClasses()}
    ${sizeClasses[size]}
    ${hasError ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}
    ${disabled ? "bg-gray-100 cursor-not-allowed opacity-60" : ""}
    rounded-lg
    ${(showClear && internalValue) || (showPasswordToggle && isPassword) || loading ? "pr-12" : ""}
  `;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className={`block text-sm font-medium mb-2 ${disabled ? "text-gray-400" : "text-gray-700"}`}
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={inputId}
          type={actualType}
          value={internalValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className={inputClasses}
          aria-describedby={helperText ? `${inputId}-helper` : errorMessage ? `${inputId}-error` : undefined}
          aria-invalid={hasError}
        />

        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {loading && <Loader2 className="h-5 w-5 text-gray-400 animate-spin" />}
          {!loading && showClear && internalValue && !disabled && (
            <button type="button" onClick={handleClear} className="text-gray-400 hover:text-gray-600" aria-label="Clear input">
              <X className="h-5 w-5" />
            </button>
          )}
          {!loading && showPasswordToggle && isPassword && !disabled && (
            <button type="button" onClick={togglePasswordVisibility} className="text-gray-400 hover:text-gray-600" aria-label={showPassword ? "Hide password" : "Show password"}>
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          )}
        </div>
      </div>

      {errorMessage && <p id={`${inputId}-error`} className="mt-2 text-sm text-red-600">{errorMessage}</p>}
      {!errorMessage && helperText && <p id={`${inputId}-helper`} className="mt-2 text-sm text-gray-500">{helperText}</p>}
    </div>
  );
};

export default InputField;
