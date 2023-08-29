import Link from "next/link";
import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="border-t border-gray-300 m-4"></div>
      <div className="flex ml-4">
        <div className="flex flex-col text-sm p-2">
          <Link className=" text-xs pt-2" href="/">
            STORIES
          </Link>
          <Link className=" text-xs pt-2" href="/">
            SHIPPING INFO
          </Link>
          <Link className=" text-xs pt-2" href="/">
            FAQ
          </Link>
          <Link className=" text-xs pt-2" href="/">
            RETURNS AND EXCHANGES
          </Link>
          <Link className=" text-xs pt-2" href="/">
            CAREERS
          </Link>
          <Link className=" text-xs pt-2" href="/">
            PRIVACY POLICY
          </Link>
        </div>
        <div className="ml-4 pt-2">
          <Link className="text-xs" href="/">
            CONTACT: SUPPORT@NYCFASHION{" "}
          </Link>
          <div className="flex  pt-2">
            <BsInstagram className="" />
            <BiLogoFacebook className="ml-2" />
            <BsTwitter className="ml-2" />
          </div>
          <div className="pt-2">United States</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
