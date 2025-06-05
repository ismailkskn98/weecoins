import { useTranslations } from 'next-intl'
import React from 'react'

export default function OurDonorsText() {
    const t = useTranslations("WeelifePage.right");
    return (
        <article className="w-full flex flex-col items-start gap-6">
            <h2 className="text-2xl font-bold text-main-white mb-4">{t("title")}</h2>
            <div className="w-full flex flex-col items-start gap-4 text-main-white/80 leading-relaxed">
                <p>{t("content")}</p>
                <p>{t("content2")}</p>
                <p>{t("content3")}</p>
                <p>{t("content4")}</p>
            </div>
        </article>
    )
}
