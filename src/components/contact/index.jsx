import React from "react";
import ContactImage from "./ContactImage";
import ContactContent from "./ContactContent";

export default function ContactMain() {
  return (
    <section className="w-full fluid gridContainer pb-16 md:pt-36">
      <main className="mx-auto flex w-full flex-col items-center justify-center gap-y-6 rounded-2xl p-6 drop-shadow-xl sm:p-4 md:p-5 lg:flex-row xl:w-11/12 2xl:w-[1110px]">
        <ContactContent />
        <div className="relative h-[500px] flex-1 w-full">
          <ContactImage />
        </div>
      </main>
    </section>
  );
}
