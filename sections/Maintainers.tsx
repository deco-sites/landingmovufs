import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Section {
  title?: string;
  images?: ImageWidget[];
}

export interface Props {
  sections?: Section[];
}

export default function Sponsors({ sections = [
  {
    title: "Mantenedores",
    images: []
  }
] }: Props) {
  return (
    <div class="flex flex-col sm:flex-row py-32 justify-center items-center">
      {sections.map((section, index) => (
        <div class="flex flex-col sm:flex-row gap-x-8 pl-8">
          <div class={`border-4 border-primary ${index !== 0 ? 'hidden sm:flex' : 'hidden'}`}></div>
          <div class="mx-auto">
            <p class="text-center text-3xl font-bold mx-auto">
              {section.title}
            </p>
            <div class="flex flex-col sm:flex-row items-center align-center py-9">
              <div class="flex mx-auto justify-center items-center">
                <div class="flex flex-row items-center justify-center flex-wrap gap-16">
                  {section.images && section.images.map((image) => (
                    <Image
                      src={image}
                      alt={image}
                      decoding="async"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, 30vw"
                      class="mx-auto max-w-[198px]"
                      style={{ objectFit: "contain" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};