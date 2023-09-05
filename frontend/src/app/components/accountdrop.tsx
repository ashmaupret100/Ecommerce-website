"use client";
import Link from "next/link";
import React from "react";

function AccountDrop() {
  const token = localStorage.getItem("session-token");
  function handleAccountStatus() {
    localStorage.removeItem("session-token");
  }
  return (
    <>
      <div className="absolute  bg-slate-100 mt-2 z-20 rounded">
        <button
          onClick={() => handleAccountStatus()}
          className="m-2 hover:bg-slate-200 text-sm p-1 rounded">
          LOG OUT
        </button>
      </div>
    </>
  );
}

export default AccountDrop;
