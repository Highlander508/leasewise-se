import { useEffect, useState } from "react";

interface PhoneLinkProps {
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

const PhoneLink = ({ className, showIcon = false, children }: PhoneLinkProps) => {
  const [phone, setPhone] = useState<string | null>(null);

  useEffect(() => {
    // Inject phone number via JavaScript to prevent indexing
    const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
    if (phoneNumber) {
      setPhone(phoneNumber);
    }
  }, []);

  if (!phone) {
    return null;
  }

  // Format for display: +46769454653 -> +46 76 945 46 53
  const formatPhone = (num: string) => {
    if (num.startsWith("+46")) {
      const rest = num.slice(3);
      return `+46 ${rest.slice(0, 2)} ${rest.slice(2, 5)} ${rest.slice(5, 7)} ${rest.slice(7)}`;
    }
    return num;
  };

  return (
    <a 
      href={`tel:${phone}`} 
      aria-label="Ring oss"
      className={className}
    >
      {showIcon && "📞 "}
      {children || formatPhone(phone)}
    </a>
  );
};

export default PhoneLink;
