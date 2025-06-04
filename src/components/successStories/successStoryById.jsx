import React from "react";
import { getContactIcon } from "./getContactIcon";
import { Link } from "@/i18n/navgation";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { useLocale } from "next-intl";
import { BackgroundGradient } from "../ui/background-gradient";

// {
//   id: 93,
//   user_id: 44000,
//   name: 'Aytekin Mayilova',
//   surname: '',
//   image: 'https://backoffice.weecoins.org/user-image/profile-1724160697.jpg',
//   contact_type: 'no_contact',
//   contact: 'Bilgileriniz paylaşılmıyor.',
//   body: 'Biz bir yola çıxdıq.Bizimlə birlikdə olmaq istəyənlər ən yaxınınizdayiq 💎 Veecomi ailəsinin üzvü olsaz sizdə bizimlə dogmalarimiz kimi olacaqsınız.❤️ Birgə addımlasaq daha böyük uğurlar qazanacağıq.',
//   created_at: '2025-02-28 00:06:47',
//   updated_at: '2025-02-28 00:06:47',
//   is_approved: 1,
//   language: 'az'
// }

const getFlagUrlByLanguage = (langCode) => {
  const supported = ["az", "tr", "en", "ru"];
  return supported.includes(langCode) ? `https://flagcdn.com/24x18/${langCode}.png` : null;
};

export default function dataById({ data }) {
  const ContactIcon = getContactIcon(data.contact_type);
  const locale = useLocale();

  const getContactHref = () => {
    switch (data.contact_type) {
      case "phone":
        return "tel:";
      case "instagram":
        return "https://www.instagram.com/";
      case "facebook":
        return "https://www.facebook.com/public/";
      case "email":
        return "mailto:";
      default:
        return null;
    }
  };

  const contactHref = getContactHref();
  const flagUrl = getFlagUrlByLanguage(data.language);

  return (
    <section className="w-full fluid gridContainer pt-44 pb-10">
      <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <Link href="/success-stories" className="inline-flex items-center text-sm font-medium mb-8 text-theme-black hover:underline">
          <IoIosArrowBack className="mr-1" />
          Geri Dön
        </Link>

        <BackgroundGradient className="relative bg-zinc-900 rounded-3xl shadow-xl p-6 md:px-10 md:py-16 lg:flex gap-10 group">
          <span className="inline-block bg-main-black absolute left-1/2 -top-1.5 -translate-x-1/2 w-1/6 h-2 rounded-2xl"></span>
          <article className="flex-shrink-0 flex flex-col items-center gap-3">
            <BackgroundGradient className="relative w-40 h-40 md:w-52 md:h-52 rounded-3xl overflow-hidden">
              <Image src={data.image} alt={data.name} fill className="object-cover object-center rounded-3xl absolute w-full h-full inset-0 blur-sm" />
              <Image src={data.image} alt={data.name} fill className="object-contain rounded-3xl object-center w-full h-full" />
            </BackgroundGradient>

            {flagUrl && (
              <div className="flex items-center gap-2 mt-2">
                <Image src={flagUrl} alt={data.language} width={24} height={18} className="h-4 w-5 object-cover" />
                <span className="text-sm text-gray-600 dark:text-gray-300 uppercase">{data.language}</span>
              </div>
            )}
            {ContactIcon && contactHref && data.contact_type !== "no_contact" && (
              <Link href={`${contactHref}${data.contact}`} target="_blank" className="inline-flex items-center gap-2 text-theme-black text-sm sm:text-base font-medium hover:underline">
                <ContactIcon className="text-lg sm:text-xl" />
                <span>{data.contact}</span>
              </Link>
            )}
          </article>

          <article className="flex-1 mt-6 lg:mt-0">
            <h1 className="text-4xl md:text-5xl font-semibold text-black dark:text-white mb-2">
              {data.name} {data.surname}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 pl-1">
              {new Date(data.created_at).toLocaleDateString(locale, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-6">{data.body}</p>
          </article>
        </BackgroundGradient>
      </main>
    </section>
  );
}
