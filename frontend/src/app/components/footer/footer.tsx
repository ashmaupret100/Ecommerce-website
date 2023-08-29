import Link from "next/link";
import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
const footerList = [
  "STORIES",
  "SHIPPING INFO",
  "FAQ",
  "RETURNS AND EXCHANGES",
  "CAREERS",
  "PRIVACY POLICY",
];

function Footer() {
  return (
    <>
      <div className="border-t border-gray-300 m-4"></div>
      <div className="flex ml-4">
        <div className="flex flex-col text-sm p-2">
          {footerList.map((each) => (
            <Link
              key={each}
              className=" text-xs pt-2 hover:text-slate-600"
              href="/">
              {each}
            </Link>
          ))}
        </div>
        <div className="ml-4 pt-2">
          <Link className="text-xs hover:text-slate-600" href="/">
            CONTACT: SUPPORT@NYCFASHION{" "}
          </Link>
          <div className="flex  pt-2 ">
            <BsInstagram className="hover:text-slate-600" />
            <BiLogoFacebook className="ml-2 hover:text-slate-600" />
            <BsTwitter className="ml-2 hover:text-slate-600" />
          </div>
          <div className="pt-2 hover:text-slate-600">United States</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
