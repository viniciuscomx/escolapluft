import React from 'react';
import { cn } from '@/lib/utils';

const FIELD_CLASS =
  'w-full rounded-[14px] border border-[rgba(81,85,121,0.18)] bg-white px-4 py-3 text-[15px] text-pluft-ink outline-none transition-colors duration-200 placeholder:text-[rgba(39,41,67,0.35)] focus:border-pluft-red focus:ring-2 focus:ring-[rgba(232,71,53,0.18)] motion-reduce:transition-none';

export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  options,
  required = false,
}) {
  return (
    <label className="block" htmlFor={name}>
      <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.12em] text-pluft-blue">
        {label}
      </span>

      {options ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={cn(FIELD_CLASS, 'appearance-none')}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          className={FIELD_CLASS}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={FIELD_CLASS}
        />
      )}
    </label>
  );
}