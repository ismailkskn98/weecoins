import { FaPhone, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

export function getContactIcon(type) {
  switch (type) {
    case "phone":
      return FaPhone;
    case "instagram":
      return FaInstagram;
    case "facebook":
      return FaFacebook;
    case "email":
      return FaEnvelope;
    default:
      return null;
  }
}
