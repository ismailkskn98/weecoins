import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import CopyClipboard from "./copyClipboard";
import { useTranslations } from "next-intl";

export default function SuccessModal({ formValues, openModal, setOpenModal }) {
    const t = useTranslations("WeelifePage.modal");
    return (
        <Dialog open={openModal} onOpenChange={setOpenModal}>
            <DialogContent className="bg-white rounded-lg text-text-black p-6 sm:p-8 shadow-lg h-full max-h-[45vh] w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[50vw] overflow-hidden">
                <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-10 bg-main-black rounded-xl z-50"></span>
                <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-10 bg-main-black rounded-xl z-50"></span>
                <span className="absolute left-1/2 -top-1.5 -translate-x-1/2 w-10 h-3 bg-main-black rounded-xl z-50"></span>
                <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-10 h-3 bg-main-black rounded-xl z-50"></span>

                <DialogHeader className="space-y-1">
                    <DialogTitle className="text-xl sm:text-2xl font-semibold">
                        {t("hello")} <span className="text-primary">{formValues.name}</span>!
                    </DialogTitle>
                    <DialogDescription className="text-sm text-gray-700">
                        {t("nameWallet")}
                    </DialogDescription>
                    <p className="text-sm text-gray-700">
                        {t("afterDonation")}
                    </p>
                </DialogHeader>
                <div className="w-full flex flex-col items-start gap-1">
                    <p className="text-sm font-medium">{t("nameWalletAddress")}:</p>
                    <CopyClipboard text={formValues.wallet} />
                </div>
                <p className="text-sm text-red-600">*{t("note")}</p>
                <div className="mt-6 w-full flex justify-center">
                    <button
                        onClick={() => setOpenModal(false)}
                        className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition text-sm cursor-pointer mb-2"
                    >
                        {t("close")}
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
