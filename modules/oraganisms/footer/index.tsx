export default function Footer(){
  return(
    <main className="bg-[#1b4a42]">
      <div className="grid grid-cols-2">
        <div className="flex items-start p-12 border-r border-b border-r-neutral-500 border-b-neutral-500 justify-between gap-12">
          <div className="w-sm space-y-4">
            <h1 className="text-[#abf007] font-semibold uppercase">Services</h1>
            <ul className="text-white space-y-2">
              <li>Full-time on your payroll</li>
              <li>Remote on third-party payroll</li>
              <li>Freelance + project delivery</li>
            </ul>
          </div>
          <div className="w-sm space-y-4">
            <h1 className="text-[#abf007] font-semibold uppercase">Company</h1>
            <ul className="text-white space-y-2">
              <li>About us</li>
              <li>Team</li>
              <li>Reviews</li>
            </ul>
          </div>
        </div>
        <div className="flex items-start p-12 border-l border-b border-l-neutral-500 border-b-neutral-500 justify-between gap-12">
          <div className="w-sm space-y-4">
            <h1 className="text-[#abf007] font-semibold uppercase">Location</h1>
            <span className="text-white text-sm">
              6th Floor, office no. 657, Tower B1, Spaze I-Tech Park, Sector 49, Gurugram, Haryana 122018
            </span>
          </div>
          <div className="w-sm space-y-4">
            <h1 className="text-[#abf007] font-semibold uppercase">Contact</h1>
            <span className="text-white">
              contact@easy-appoint.in
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center py-6 justify-center">
        <h1 className="text-white text-[220px] tracking-tighter">Easy Appoint</h1>
      </div>
      <div className="flex justify-between w-full px-12 py-4 border-t border-t-neutral-500 items-center">
          <span className="text-white">Copyright © 2026 . Easy Appoint. Powered by Thumbpin.in</span>
          <ul className="text-white flex items-center justify-center gap-6">
            <li>Licences</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
    </main>
  );
}