import Button from "@/modules/atoms/button";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <main className="bg-linear-to-r flex flex-col items-center justify-center from-blue-400 to-blue-600 p-4">
      <div className="flex flex-col gap-6 items-center justify-center py-12">
        <span className="text-white text-lg tracking-tight">
          Proven recruitment success
        </span>
        <h1 className="w-xl text-center text-6xl text-white">
          Real hiring results for growing teams.
        </h1>
        <p className="w-lg text-white text-xl text-center">
          See how our recruitment strategies have helped organizations attract
          and retain top talent.
        </p>

        <Button
          name="Contact Us"
          link=""
          style="bg-white px-6 font-semibold rounded-lg"
        />
      </div>

      <div className="bg-white w-full rounded-4xl p-18">
        <div className="pb-6 flex items-start justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex">
              <h1 className="text-cyan-500 text-lg font-semibold">Easy</h1>
              <h1 className="text-blue-600 text-lg font-semibold">Appoint</h1>
            </div>
            <h1 className="text-4xl w-xs">Find the right talent faster</h1>
            <Button
              name="Get In Touch"
              link=""
              style="w-fit border border-blue-600 hover:bg-white hover:text-blue-600 bg-blue-600 text-lg tracking-tight text-white rounded-lg"
            />

            <div className="flex gap-4 items-center justify-start pt-12 text-neutral-600">
              <FaInstagram size={22} />
              <FaFacebook size={22} />
              <FaLinkedin size={22} />
              <FaYoutube size={22} />
            </div>
          </div>

          <div className="flex items-start gap-12">
            <div className="flex flex-col items-center justify-center">
              <span className="text-black font-semibold">Company</span>
              <ul className="text-neutral-600 text-center pt-6">
                <li>
                  <Link href="">About Us</Link>
                </li>
                <li>
                  <Link href="">Our Team</Link>
                </li>
                <li>
                  <Link href="">Careers</Link>
                </li>
                <li>
                  <Link href="">Services</Link>
                </li>
                <li>
                  <Link href="">Case Study</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-black font-semibold">Resources</span>
              <ul className="text-neutral-600 text-center pt-6">
                <li>
                  <Link href="">Blog</Link>
                </li>
                <li>
                  <Link href="">Hiring Guides</Link>
                </li>
                <li>
                  <Link href="">FAQs</Link>
                </li>
              </ul>
            </div>
            <div className="w-32 flex flex-col items-start justify-center">
                <span className="text-black font-semibold">Address</span>
                <span className="text-justify pt-6">
                    6th Floor, office no. 657, Tower B1, Spaze I-Tech Park, Sector 49, Gurugram, Haryana 122018
                </span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t flex items-center justify-between border-neutral-300">
          <span className="text-sm">
            © 2026 EasyAppoint. All rights reserved.
          </span>
          <span className="text-sm">No more searching.</span>
        </div>
      </div>
    </main>
  );
}
