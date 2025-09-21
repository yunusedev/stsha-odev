import { Icon } from "@iconify/react";
import HeroSection from "./HeroSection";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState<Record<string, boolean>>({});
  const items = [
    {
      icon: "accessibility",
      name: "Ailenin rehberlik işlevi",
      description:
        "Türk atasözleri sık sık aile içindeki öğüt ve rehberliği vurgular. Örneğin: “Ev alma, komşu al.” → Aile ve yakın çevrenin, bireyin sosyal hayatını ve değerlerini şekillendirmede ne kadar etkili olduğunu gösterir. “Çocuk başta iken eğitilir.” → Ailenin çocuk üzerindeki eğitici ve yönlendirici rolünü vurgular; değerlerin erken yaşta kazandırılması gerektiğini hatırlatır.",
    },
    {
      icon: "adhesive-plaster-2",
      name: "Ailenin karakter ve ahlak geliştirme işlevi",
      description:
        "Bazı atasözleri, ailenin bireyin karakterini ve ahlaki yapısını nasıl şekillendirdiğini gösterir. Örneğin: “İyi çocuk, iyi aileden olur.” → Ailenin değerli davranışları ve ahlakı çocuklara aktardığını anlatır. “Sakınan göze çöp batar, sakınmayanın gözüne taş.” → Aile içi öğütler ve tecrübeler, bireyi tehlikelerden ve hatalardan korur.",
    },
    {
      icon: "bacteria",
      name: "Ailenin sosyal ve duygusal işlevi",
      description:
        "Aile, sadece ahlak ve bilgi öğretmez, aynı zamanda sevgi, saygı ve dayanışma gibi duygusal değerleri de kazandırır. Örneğin: “Ayağını yorganına göre uzat.” → Bireyin ölçülü ve tasarruflu olmayı, aile içinde kaynakları doğru kullanmayı öğrenmesini sağlar. “Komşu komşunun külüne muhtaçtır.” → Dayanışma ve paylaşma kültürünü ailenin sosyal çevre aracılığıyla öğrettiğini gösterir.",
    },
    {
      icon: "bill",
      name: "Ailenin değerler eğitimi açısından önemi",
      description:
        "Türk atasözleri, aile kurumunun bireye değerleri kazandırmada hem rehber hem model hem de koruyucu işlev gördüğünü ortaya koyar. Aile, davranış modelleri sunar, ahlaki ve kültürel değerleri aktarır ve sosyal-duygusal becerileri geliştirir. Bu yüzden aile, değerler eğitiminin temel taşıdır.",
    },
    {
      icon: "users-group-rounded",
      name: "Ailenin sorumluluk bilinci kazandırması",
      description:
        "Atasözleri aile içinde sorumluluk bilincinin nasıl geliştiğini gösterir. Örneğin: “Her işin başı sağlık, ikinci başı ailedir.” → Aile, bireye görev ve sorumluluk bilincini kazandıran ilk eğitim ortamıdır.",
    },
    {
      icon: "heart",
      name: "Ailenin sevgi ve güven ortamı oluşturması",
      description:
        "Aile, bireylerin güven duygusunu geliştirdiği yerdir. Örneğin: “Evde huzur varsa, gönül rahat eder.” → Sevgi dolu aile ortamı, bireyin sağlıklı psikolojik ve duygusal gelişimini destekler.",
    },
    {
      icon: "buildings",
      name: "Ailenin öğrenme ve deneyim aktarma işlevi",
      description:
        "Aile, tecrübelerini ve bilgilerini yeni kuşaklara aktarır. Örneğin: “Taş yerinde ağırdır.” → Aile, deneyim ve öğütlerle bireyi hayata hazırlar.",
    },
    {
      icon: "chat-round",
      name: "Ailenin toplumsal değerleri kazandırması",
      description:
        "Aile, bireye toplumun değerlerini öğretir. Örneğin: “Komşu komşunun külüne muhtaçtır.” → Paylaşma, yardımlaşma ve toplumsal sorumluluk gibi değerler aile içinde öğrenilir.",
    },
  ];
  const ozluSozler = [
    {
      title: "Evlat başta eğitilir, aile rehberdir.",
      description: "Ailenin ilk öğretmen rolünü vurgular.",
    },
    {
      title: "İyi çocuk, iyi aileden olur.",
      description: "Karakter ve ahlakın aileden geldiğini hatırlatır.",
    },
    {
      title: "Ayağını yorganına göre uzat.",
      description: "Ölçülü ve sorumlu olmayı öğretir.",
    },
    {
      title: "Komşu komşunun külüne muhtaçtır.",
      description: "Dayanışma ve paylaşmayı öğretir.",
    },
  ];
  const sorular = [
    {
      question:
        "Hangi atasözü ailenin çocuk üzerindeki rehberlik rolünü vurgular?",
      options: {
        a: "Evlat başta eğitilir, aile rehberdir.",
        b: "Ayağını yorganına göre uzat.",
        c: "Komşu komşunun külüne muhtaçtır.",
        d: "İyi çocuk, iyi aileden olur.",
      },
      answer: "a",
    },
    {
      question: "Hangisi karakter ve ahlakın aileden geldiğini anlatır?",
      options: {
        a: "Komşu komşunun külüne muhtaçtır.",
        b: "Ayağını yorganına göre uzat.",
        c: "İyi çocuk, iyi aileden olur.",
        d: "Evlat başta eğitilir, aile rehberdir.",
      },
      answer: "c",
    },
    {
      question: "Hangisi bireye ölçülü ve sorumlu olmayı öğretir?",
      options: {
        a: "Ayağını yorganına göre uzat.",
        b: "İyi çocuk, iyi aileden olur.",
        c: "Evlat başta eğitilir, aile rehberdir.",
        d: "Komşu komşunun külüne muhtaçtır.",
      },
      answer: "a",
    },
    {
      question: "Hangisi paylaşma ve dayanışma değerini öğretir?",
      options: {
        a: "Ayağını yorganına göre uzat.",
        b: "Komşu komşunun külüne muhtaçtır.",
        c: "Evlat başta eğitilir, aile rehberdir.",
        d: "İyi çocuk, iyi aileden olur.",
      },
      answer: "b",
    },
  ];

  return (
    <main className="bg-background">
      <HeroSection />
      <div className="mt-4 px-4 mb-12 items-center relative flex flex-col gap-2 z-[1]">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 via-pink-400 mb-4">
          Özellikler
        </h1>
        <div className="grid grid-col lg:grid-cols-2 w-full gap-4">
          <div className="flex flex-col gap-4">
            {items.slice(0, 4).map((item, i) => (
              <div
                key={i}
                className="border border-border bg-secondary p-5 rounded-2xl"
              >
                <Icon
                  className="text-2xl mb-2 text-slate-300"
                  icon={"solar:" + item.icon + "-outline"}
                />
                <h2 className="font-bold text-lg text-foreground">
                  {item.name}
                </h2>
                <p className="text-muted">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {items.slice(4, 8).map((item, i) => (
              <div
                key={i}
                className="border border-border bg-secondary p-5 rounded-2xl"
              >
                <Icon
                  className="text-2xl mb-2 text-slate-300"
                  icon={"solar:" + item.icon + "-outline"}
                />
                <h2 className="font-bold text-lg text-foreground">
                  {item.name}
                </h2>
                <p className="text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-12 flex flex-col items-center gap-4 px-4">
        <h1 className="text-transparent text-center text-4xl font-bold bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 via-pink-400">
          Derlediğimiz özlü sözler
        </h1>
        <div className="flex flex-col gap-0 w-full items-center">
          {ozluSozler.map((item, i) => (
            <React.Fragment key={i}>
              <div>
                <p className="text-center font-semibold">{item.title}</p>
                <p className="text-center text-muted">{item.description}</p>
              </div>
              {ozluSozler.length != i + 1 && (
                <div className="my-2.5 h-px w-full bg-border" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="px-4 flex flex-col items-center gap-4 mb-12">
        <h1 className="text-transparent text-center text-4xl font-bold bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 via-pink-400">
          Soru & Cevap
        </h1>
        <div className="flex flex-col w-full gap-0">
          {sorular.map((item, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-center">{i + 1}. Soru</span>
                <div className="flex text-center flex-col gap-2">
                  <span>{item.question}</span>
                  <div className="flex items-center flex-wrap flex-row gap-3 justify-center">
                    {Object.entries(item.options).map(([key, val], a) => (
                      <div className="flex items-center gap-2" key={a}>
                        <button
                          onClick={() =>
                            setValue((prev) => ({
                              ...prev,
                              [`${i}-${key}`]: item.answer == key,
                            }))
                          }
                          className={`size-10 border border-border flex items-center justify-center rounded-full
                      ${
                        value[`${i}-${key}`] && value[`${i}-${key}`] == true
                          ? "bg-green-500"
                          : value[`${i}-${key}`] == false
                          ? "bg-red-500"
                          : ""
                      }
                    `}
                        >
                          <span className="font-semibold">
                            {key.toUpperCase()}
                          </span>
                        </button>
                        <span className="text-muted">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {sorular.length != i + 1 && (
                <div className="h-px my-3 w-full bg-border" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="mb-12 flex px-4 flex-col gap-4 items-center">
        <h1 className="text-transparent text-center text-4xl font-bold bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 via-pink-400">
          Bitiş
        </h1>
        <p className="text-muted text-center">Projenin sonuna gelmiş bulunmaktayız, emeği geçen herkese teşekkür ederim <span className="p-2 bg-secondary px-0">(!)</span> ~ yunusemre</p>
      </div>
    </main>
  );
}

export default App;
