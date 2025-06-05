"use client";
import React from "react";
import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";
import CustomTextarea from "./CustomTextarea";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import * as Yup from "yup";
import { BsSendFill } from "react-icons/bs";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const t = useTranslations("ContactPage");

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, t("form.name.validation.minLength", { min: 3 }))
      .required(t("form.name.validation.required")),
    email: Yup.string()
      .email(t("form.email.validation.email"))
      .matches(/^[^@]+@[^@]+\.[^@]+$/, t("form.email.validation.email"))
      .required(t("form.email.validation.required")),
    message: Yup.string()
      .min(10, t("form.message.validation.minLength", { min: 10 }))
      .required(t("form.message.validation.required")),
  });

  const handleSubmit = async (values, actions) => {
    try {
      const baseURL = window.location.origin;
      const apiURL = `${baseURL}/api/contact-form`;
      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(t("form.error.submission"));
      }
      const data = await response.json();

      if (!data.status) {
        throw new Error(t("form.error.submission"));
      }
      actions.resetForm();
      toast.success(t("form.success"));
    } catch (error) {
      console.log(error.stack);
      toast.error(t("form.error.server"));
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactSchema}>
      {({ isSubmitting }) => (
        <Form className="flex w-full flex-col gap-y-8 md:gap-y-10">
          <CustomInput name="name" type="text" id="name" label={t("form.name.label")} />
          <CustomInput name="email" label={t("form.email.label")} type="email" id="email" />
          <CustomTextarea name="message" label={t("form.message.label")} id="message" />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`relative group overflow-hidden flex items-center gap-1 px-3 py-2 text-sm xl:text-base rounded-sm w-min text-nowrap self-center cursor-pointer ${isSubmitting ? "cursor-not-allowed bg-gray-400 text-gray-700" : "bg-[#FDC739] text-text-black"
              }`}
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-12 group-hover:-translate-y-1/2 transition-all duration-300 pointer-events-none">{t("form.button")}</span>

            <span className="inline-block bg-main-black absolute -left-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-2xl"></span>
            <span className="inline-block bg-main-black absolute -right-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-2xl"></span>
            <span className="inline-block bg-main-black absolute left-1/2 top-[-1.5px] -translate-x-1/2 w-4 h-[3px] rounded-2xl"></span>
            <span className="inline-block bg-main-black absolute left-1/2 bottom-[-1.5px] -translate-x-1/2 w-4 h-[3px] rounded-2xl"></span>

            <span className="translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform capitalize">{isSubmitting ? t("form.isSummitting") : t("form.button")}</span>
          </button>
        </Form>
      )}
    </Formik>
  );
}
