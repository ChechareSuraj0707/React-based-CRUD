export default function LogoHeader() {
  return (
    <a
      href="https://www.deltasigmaventures.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4"
    >
      {/* Logo */}
      <img
        src="https://static.wixstatic.com/media/8d182a_7cb967bf000e4747815d216aee777c51~mv2.jpg/v1/fill/w_174,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSV%20Logo.jpg"
        alt="Delta Sigma Ventures Logo"
        className="w-[60px] h-auto object-contain"
      />

      {/* Text */}
      <div className="leading-tight">
        <h1 className="text-xl font-bold text-white tracking-wide">
          DELTA SIGMA VENTURES
        </h1>

        <p className="text-sm text-gray-400">Together we will win</p>
      </div>
    </a>
  );
}
