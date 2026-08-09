export default function Footer(){
  return(
    <main className="bg-[#1b3a52]">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex items-start p-6 sm:p-12 border-b border-b-neutral-500 sm:border-r sm:border-r-neutral-500 justify-between gap-6 sm:gap-12">
          <div className="w-full sm:w-sm space-y-4">
            <h1 className="text-[#00C2FF] font-semibold uppercase">Services</h1>
            <ul className="text-white text-sm sm:text-base space-y-2">
              <li>Full-time on your payroll</li>
              <li>Remote on third-party payroll</li>
              <li>Freelance + project delivery</li>
            </ul>
          </div>
          <div className="w-full sm:w-sm space-y-4">
            <h1 className="text-[#00C2FF] font-semibold uppercase">Company</h1>
            <ul className="text-white text-sm sm:text-base space-y-2">
              <li>About us</li>
              <li>Team</li>
              <li>Reviews</li>
            </ul>
          </div>
        </div>
        <div className="flex items-start p-6 sm:p-12 border-b border-b-neutral-500 sm:border-l sm:border-l-neutral-500 justify-between gap-6 sm:gap-12">
          <div className="w-full sm:w-sm space-y-4">
            <h1 className="text-[#00C2FF] font-semibold uppercase">Location</h1>
            <span className="text-white text-sm">
              6th Floor, office no. 657, Tower B1, Spaze I-Tech Park, Sector 49, Gurugram, Haryana 122018
            </span>
          </div>
          <div className="w-full sm:w-sm space-y-4">
            <h1 className="text-[#00C2FF] font-semibold uppercase">Contact</h1>
            <span className="text-white text-sm sm:text-base break-all">
              contact@easy-appoint.in
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center py-6 justify-center">
        {/* Scales with the screen so it still spans edge to edge on a phone */}
        <h1 className="text-white text-[13vw] sm:text-[220px] whitespace-nowrap tracking-tighter">Easy Appoint</h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between w-full px-6 sm:px-12 py-4 border-t border-t-neutral-500 items-center">
          <span className="text-white text-sm sm:text-base text-center sm:text-left">Copyright © 2026 . Easy Appoint. Powered by Thumbpin.in</span>
          <ul className="text-white text-sm sm:text-base flex items-center justify-center gap-6">
            <li>Licences</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
    </main>
  );
}
