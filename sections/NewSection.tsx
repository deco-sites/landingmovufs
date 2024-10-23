import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";
import { useSignal } from "@preact/signals";

export interface Banner {
  title?: string;
  description?: string;
  role?: string;
  image: ImageWidget;
}

export interface Props {
  title?: string;
  subtitle?: string;
  /**
   * @title Description
   * @format rich-text
   */
  description?: string;
  items: Banner[];
}

export default function ImageWithParagraph({
  title = "Here's an intermediate size heading you can edit",
  subtitle = "Here's an intermediate size heading you can edit",
  description =
  "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  items = [
    {
      title: "Mentorado",
      description: "Pessoas motivadas a ajudar compartilhando experiências ou se envolvendo na organização.",
      role: "",
      image: ""
    },
    {
      title: "Mentorado",
      description: "Pessoas motivadas a ajudar compartilhando experiências ou se envolvendo na organização.",
      role: "",
      image: ""
    },
  ], }: Props) {
  const count = useSignal(0);

  const prevSlide = () => {
    count.value = count.value === 0 ? items.length - 1 : count.value - 1
  };

  const nextSlide = () => {
    count.value = count.value === 0 ? items.length - 1 : count.value + 1
  };


  return (
    <div class="sm:r-2 sm:pt-2 flex flex-col bg-[#EFEFF080] border border-[#E1E1E4] rounded-3xl">
      <div
        class="flex flex-col md:flex-row text-left items-center md:items-start justify-between py-20 gap-x-6"
      >
        <div class="flex flex-col max-w-xl pl-4 items-center sm:items-start sm:pl-10 md:pl-20 gap-x-4">
          <p class="text-base font-extrabold text-primary">
            {title}
          </p>
          <p class="text-4xl font-bold leading-snug pb-4 ">
            {subtitle}
          </p>
        </div>

        <div class="flex flex-col max-w-xl items-center sm:items-start pr-4 sm:pr-10 md:pr-20 pl-4 sm:pl-10 md:pl-20 gap-4">
          <p
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          >
          </p>
        </div>
      </div>

      <div id="carousel" class="relative overflow-hidden">
        <div class="flex flex-col md:flex-row transition-transform duration-500 text-left items-center md:items-start pb-32 pr-4 sm:pr-10 md:pr-20 pl-4 sm:pl-10 md:pl-20 gap-4"
          style={{ transform: `translateX(-${count.value * 100}%)` }}
        >
          {count}
          {items.map((item, index) => (
            <div class={`flex flex-col md:flex-row gap-4 rounded-3xl border ${index % 2 === 0 ? 'border-[#FFBA00]' : 'border-[#8857C6]'} max-h-max`}>
              <Image
                class="rounded-3xl ml-4 my-4 max-w-56 max-h-96"
                src={item.image}
                alt={item.image}
                decoding="async"
                loading="lazy"
              />
              <div class="flex flex-col md:flex-row items-center">
                <div class="flex flex-col items-center sm:items-start px-2 gap-4" style={{ width: "300px" }}>
                  <div class="min-w-xl max-w-xl">
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.1606 8.14468C14.0286 10.076 11.8633 12.1017 8.33113 14.0133L7.92513 14.2385L7.53324 13.9883C4.12694 11.8592 2.09281 9.70182 1.08237 7.70338C0.0668784 5.68894 0.0858702 3.81793 0.840752 2.40619C1.588 1.01005 3.01033 0.166421 4.56105 0.135725C5.87142 0.105425 7.21572 0.663044 8.31275 1.84735C9.48101 0.734051 10.8576 0.261719 12.1627 0.374004C13.7085 0.501761 15.0752 1.43281 15.7335 2.87301C16.3985 4.32926 16.3003 6.19778 15.1606 8.14468Z" fill={index % 2 === 0 ? '#FFBA00' : '#8857C6'} />
                    </svg>
                  </div>
                  <div class="max-w-3xl">
                    <p
                      class="text-sm"
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    >
                    </p>
                  </div>
                  <div class="flex flex-col max-w-xl">
                    <p class="text-sm font-bold">
                      {item.title}
                    </p>
                    <p class="text-xs leading-snug pb-4">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          class="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2"
        >
          Prev
        </button>
        <button
          onClick={() => count.value++}
          class="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}