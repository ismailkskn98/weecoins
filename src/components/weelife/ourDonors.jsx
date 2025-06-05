"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SuccessModal from "./successModal";
import OurDonorsText from "./ourDonorsText";
import { useTranslations } from "next-intl";

const initialValues = {
  name: "",
  phone: "",
  amount: "",
  customAmount: "",
  showInfo: false
}

export default function Component() {
  const t = useTranslations("WeelifePage");
  const [openModal, setOpenModal] = useState(false);
  const [formValues, setFormValues] = useState({ name: "", wallet: "" });
  const presetAmounts = ["500", "250", "100", "50", "25"];
  const [wallet, setWallet] = useState("325şlk32şkl3kweyşkj32tşl23");

  const DonationSchema = Yup.object().shape({
    name: Yup.string().min(3, t("form.name.validation.min")).required(t("form.name.validation.required")),
    phone: Yup.string().min(6, t("form.phone.validation.min")).required(t("form.phone.validation.required")),
    amount: Yup.number().min(1, t("form.amount.validation.min")).required(t("form.amount.validation.required")),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form values:", values);
    setSubmitting(false);
    setFormValues({ name: values.name, wallet, amount: values.amount });
    resetForm();
    setOpenModal(true);
  };

  return (
    <main className="w-full grid lg:grid-cols-2 gap-8">
      <Card className="h-fit">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl font-semibold text-gray-800">{t("totalDonation")}: 1,799.07$</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Formik
            initialValues={initialValues}
            validationSchema={DonationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, setFieldValue, isSubmitting }) => (
              <Form className="space-y-4">
                <article>
                  <Field as={Input} name="name" placeholder={t("form.name.placeholder")} className={`w-full ${errors.name && touched.name ? "border-red-500" : ""}`} />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1" />
                </article>

                <article>
                  <PhoneInput
                    country={"az"}
                    value={values.phone}
                    onChange={(phone) => setFieldValue("phone", phone)}
                    inputProps={{
                      name: "phone",
                      required: true,
                      className: `w-full py-2 pl-12 pr-3 border rounded-md bg-[#f7f7f7] ${errors.phone && touched.phone ? "border-red-500" : ""}`,
                    }}
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-xs mt-1" />
                </article>

                <article className="grid grid-cols-5 gap-2">
                  {presetAmounts.map((amount) => (
                    <Button
                      key={amount}
                      type="button"
                      variant={values.amount === amount ? "default" : "outline"}
                      className="h-12 text-sm"
                      onClick={() => {
                        setFieldValue("amount", amount);
                        setFieldValue("customAmount", "");
                      }}
                    >
                      {amount}$
                    </Button>
                  ))}
                </article>

                <article className="relative">
                  <Input
                    placeholder={t("form.amount.placeholder")}
                    value={values.customAmount}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFieldValue("customAmount", value);
                      if (value) {
                        setFieldValue("amount", value);
                      } else {
                        setFieldValue("amount", "");
                      }
                    }}
                    className={`w-full pr-8 ${errors.amount && touched.amount && !(values.amount > 0) ? "border-red-500" : ""}`}
                  />
                  {!(values.amount > 0) && <ErrorMessage name="amount" component="div" className="text-red-500 text-xs mt-1" />}
                </article>

                <article className="flex items-center space-x-2">
                  <label className="flex items-center space-x-2 mt-4">
                    <Field
                      type="checkbox"
                      name="showInfo"
                      className="form-checkbox"
                    />
                    <span className="text-sm">{t("infoShow")}</span>
                    <p className="text-xs text-red-600 -ml-1">{t("infoShowDesc")}</p>
                  </label>
                  <ErrorMessage name="showInfo" component="div" className="text-red-500 text-xs mt-1" />
                </article>
                <SuccessModal formValues={formValues} openModal={openModal} setOpenModal={setOpenModal} />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative group overflow-hidden flex items-center gap-1 px-6 py-2 text-sm xl:text-base mt-2 rounded-sm w-min mx-auto text-nowrap self-center cursor-pointer ${isSubmitting ? "cursor-not-allowed bg-gray-400 text-gray-700" : "bg-[#FDC739] text-text-black"
                    }`}
                >
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-12 group-hover:-translate-y-1/2 transition-all duration-300 pointer-events-none">{t("donate")}</span>

                  <span className="inline-block bg-main-black absolute -left-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-2xl"></span>
                  <span className="inline-block bg-main-black absolute -right-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-2xl"></span>
                  <span className="inline-block bg-main-black absolute left-1/2 top-[-1.5px] -translate-x-1/2 w-4 h-[3px] rounded-2xl"></span>
                  <span className="inline-block bg-main-black absolute left-1/2 bottom-[-1.5px] -translate-x-1/2 w-4 h-[3px] rounded-2xl"></span>

                  <span className="translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform capitalize">{isSubmitting ? `${t("proccessing")}...` : t("donate")}</span>
                </button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
      <OurDonorsText />
    </main>
  );
}
