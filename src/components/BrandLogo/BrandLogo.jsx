export function BrandLogo({ titleClassName = '', subtitleClassName = '' }) {
  return (
    <>
      <img
        src="/img/logo-resgate-verde-sem-Texto-removebg.png"
        alt="logo da empresa"
        className="img-fluid"
        style={{ width: 60 }}
      />
      <div className="ms-2">
        <h1 className={titleClassName}>𝑅𝑒𝑠𝑔𝑎𝑡𝑒 𝑉𝑒𝑟𝑑𝑒</h1>
        <h6 className={subtitleClassName}>Resgate, Reparta, Renove</h6>
      </div>
    </>
  );
}
