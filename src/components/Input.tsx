import React, { FC, useCallback, useMemo } from 'react';
import clsx from 'clsx';

type InputValue = string | number | undefined;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
interface InputProps {
  label?: string;
  id?: string;
  placeholder?: string;
  value?: InputValue;
  onChange: (value: InputValue, event?: ChangeEvent) => void;
  state: 'normal' | 'success' | 'error';
  hint?: string;
  type: 'text' | 'number';
  required?: boolean;
  disabled?: boolean;
}

export const Input: FC<InputProps> = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  state,
  hint,
  type,
  required,
  disabled = false,
}) => {
  const inputId = useMemo<string | undefined>(() => {
    if (id) return id;
    if (label) return `input-${Math.random()}`;
    return undefined;
  }, [id, label]);

  const classNames = clsx(
    {
      'border-danger': state === 'error',
      'border-primary': state === 'success',
      'border-gray-400 focus:border-black': state === 'normal',
      'border-black': value && state === 'normal',
    },
    'block outline-none border border-solid ',
    'text-black text-sm',
    'w-full px-[16px] py-[10px] rounded-md bg-gray-50',
  );

  const handleInputChange = useCallback(
    (event: ChangeEvent) => {
      onChange(event.target.value, event);
    },
    [onChange],
  );

  return (
    <div className="mb-6">
      <label
        htmlFor={inputId}
        className="block mb-1 text-sm font-normal text-gray-900 dark:text-gray-300 w-full"
      >
        <span>{label}</span>
        {required && <span className="text-[#04D484]">{' *'}</span>}
      </label>
      <input
        disabled={disabled}
        type={type}
        id={inputId}
        className={classNames}
        placeholder={placeholder}
        required={required}
        onChange={handleInputChange}
        value={value}
      />
      {hint && hint !== '' && (
        <div
          className={clsx(
            'text-sm font-normal leading-[18px] mb-[2px]',
            state === 'error' ? 'text-danger' : 'text-dark-gray',
          )}
        >
          {hint}
        </div>
      )}
    </div>
  );
};
