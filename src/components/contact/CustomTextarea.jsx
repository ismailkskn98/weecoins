"use client";
import React, { useState } from "react";
import { useField } from "formik";
import classNames from "classnames";
import { FiMessageSquare } from "react-icons/fi";

export default function CustomTextarea(props) {
  const [isFocusInput, setIsFocusInput] = useState(false);
  const [field, meta] = useField(props.name);
  return (
    <div className="relative">
      <textarea
        {...props}
        {...field}
        onFocus={() => setIsFocusInput(true)}
        onBlur={(e) => {
          setIsFocusInput(false);
          field.onBlur(e);
        }}
        rows={8}
        className={classNames("block w-full rounded-sm border bg-transparent px-[9px] py-3 text-sm focus:outline-none sm:px-3 sm:text-base placeholder:text-sm border-gray-800 focus:border-logo text-white/70", {
          "border-red-500 focus:border-red-700 text-red-500": meta.error && meta.touched,
        })}
      />
      {meta.touched && meta.error ? <div className="absolute -bottom-4 left-[2px] text-xs text-red-600">*{meta.error}</div> : null}
      <div
        className={classNames("pointer-events-none absolute rounded-sm px-2 text-sm transition-all duration-300", {
          "-top-[11px] left-1 bg-main-black text-main-white": isFocusInput || (!isFocusInput && field.value.length),
          "left-2 top-4 bg-transparent text-sm text-zinc-600 dark:text-zinc-400": !isFocusInput && !field.value.length,
        })}
      >
        {props.label}
      </div>
      <span className="absolute right-2 top-4">
        {
          <FiMessageSquare
            className={classNames("", {
              "text-red-500": meta.error && meta.touched,
              "text-theme-black": !meta.error,
            })}
          />
        }
      </span>
    </div>
  );
}
