import logoImage from "../../assets/1763805206079.jpg-removebg-preview.png";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoImage}
      alt="Nexire"
      className={`block object-contain ${className ?? ''}`}
    />
  )
}

