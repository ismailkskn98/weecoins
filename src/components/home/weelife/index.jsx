import Image from "next/image";
import React from "react";

export default function WeeLife() {
  const weeLifeItems = [
    {
      title: "Bir kurbanlık, sonsuz minnet!",
      content:
        "Sorumluluklarına önem veren kuruluşumuz, Kurban Bayramı’nda Burkina Faso’daki insanlara yardım elini uzatıyor. Bayramın neşesini ve mutluluğunu yerel halkla paylaşıyor, kurban bağışlarınızı ihtiyaç sahiplerine ulaştırıyoruz. Paylaşmanın verdiği huzuru birlikte yaşamak için siz de bize katılın.",
      classNames: "h-[55vh] md:h-[65vh] mt-6",
    },
    {
      title: "WeeCoins Bayramda Yanlarında",
      content:
        "WeeCoins ailesi olarak bu bayramda da Burkina Faso’dayız. Kurbanlar kesiyor, yerel halkla paylaşıyor ve çocuklara unutamayacakları bir bayram armağan ediyoruz. Bayramlar en çok çocuklara yakışır; onların yüzündeki bir tebessüm, bin teşekkürün yerini tutar. Birlikte umut oluyoruz, birlikte güçleniyoruz.",
      classNames: "h-[55vh] md:h-[65vh]",
    },
    {
      title: "Bir Bağış, Bir Gülümseme",
      content:
        "Kurbanınızı bağışlayarak bu büyük değişimin bir parçası olabilirsiniz. Bağışlarınızla sadece et değil, umut ve mutluluk da paylaşıyoruz. Her bir kurban, bir çocuğun hayatında unutulmaz bir bayram anısı demektir. Gelin, birlikte daha fazla yüz güldürelim.",
      classNames: "h-[55vh] md:h-[65vh]",
    },
    {
      title: "Umudu Paylaş, Geleceği Aydınlat",
      content:
        "Bu bayramda siz de katkıda bulunarak Burkina Faso’daki kardeşlerimizin hayatına dokunabilirsiniz. Kurban bağışlarınızla sadece bir ibadeti yerine getirmekle kalmayacak, aynı zamanda bir topluluğun geleceğine umut ışığı olacaksınız. Daha anlamlı bir bayram için bize katılın.",
      classNames: "h-[60vh] md:h-[50vh] 3xl:h-[40vh]",
    },
  ];

  return (
    <main className="relative w-full rounded-2xl fluid gridContainer text-main-white h-auto gap-y-[4vw] pt-20 md:pt-32">
      <article className="w-full flex items-center justify-center mb-16">
        <div className="flex flex-col items-center justify-center gap-3 max-w-3xl text-center">
          <h2 className="w-full capitalize text-main-white text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-semibold">Birlikte Daha Güçlüyüz</h2>
          <p className="w-full text-sm sm:text-base lg:text-lg text-main-white/80 font-medium">
            Kurban bağışınızı WeeCoins aracılığıyla Burkina Faso’daki kardeşlerimize ulaştırıyor, umut ve mutluluğu birlikte taşıyoruz.
          </p>
        </div>
      </article>
      <section className="w-full mx-auto max-w-full xl:max-w-11/12 2xl:max-w-10/12 3xl:max-w-9/12 flex md:flex-row flex-col items-start justify-between gap-6 md:gap-16">
        <main className="order-2 md:order-1 flex-1 flex flex-col items-start gap-16 max-w-2xl">
          {weeLifeItems.map((item, i) => (
            <article key={i} className={`w-full flex flex-col items-start gap-3 ${item.classNames}`}>
              <h3 className="text-4xl font-medium">{item.title}</h3>
              <p className="text-main-white/80 text-sm xl:text-base">{item.content}</p>
            </article>
          ))}
        </main>
        <div className="order-1 md:order-2 sticky top-28 md:top-32 w-full lg:w-[300px] 2xl:w-[450px] max-h-[250px] lg:max-h-[500px] 2xl:max-h-[500px] 3xl:max-h-[550px] overflow-hidden border-2 border-zinc-700 rounded-xl -mt-6">
          <Image src={"/images/bagiss.jpg"} alt="kurban bagisi" width={500} height={800} className="object-cover md:object-fill object-top md:object-center w-full h-full rounded-xl" />
        </div>
      </section>
    </main>
  );
}
