"use client";
import React, { useTransition } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CiGlobe } from "react-icons/ci";
import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navgation";

export default function LanguageChange() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 uppercase cursor-pointer">
          <CiGlobe className="h-4 w-4" />
          {locale}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => startTransition(() => router.replace(pathname, { locale: "tr" }))}>
          <span className="flex cursor-pointer flex-nowrap items-center gap-2 text-sm">
            <Image src="https://flagcdn.com/24x18/tr.png" alt="Türkçe" width={24} height={18} className="h-4 w-5 object-cover" />
            <span className="text-sm">TR</span>
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => startTransition(() => router.replace(pathname, { locale: "en" }))}>
          <span className="flex cursor-pointer flex-nowrap items-center gap-2 text-sm">
            <Image src="https://flagcdn.com/24x18/us.png" alt="English" width={24} height={18} className="h-4 w-5 object-cover" />
            <span className="text-sm">EN</span>
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => startTransition(() => router.replace(pathname, { locale: "ru" }))}>
          <span className="flex cursor-pointer flex-nowrap items-center gap-2 text-sm">
            <Image src="https://flagcdn.com/24x18/ru.png" alt="Русский" width={24} height={18} className="h-4 w-5 object-cover" />
            <span className="text-sm">RU</span>
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => startTransition(() => router.replace(pathname, { locale: "az" }))}>
          <span className="flex cursor-pointer flex-nowrap items-center gap-2 text-sm">
            <Image src="https://flagcdn.com/24x18/az.png" alt="Azərbaycan" width={24} height={18} className="h-4 w-5 object-cover" />
            <span className="text-sm">AZ</span>
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
