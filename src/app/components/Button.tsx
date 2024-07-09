"use client";

import { ButtonProps } from "../types";

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="bg-primary block h-10 tablet:w-[340px] hover:bg-primary-hover rounded py-2.5 px-5 my-2.5 w-full"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
