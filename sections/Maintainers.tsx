import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /** @format textarea */
  title?: string;
  images?: ImageWidget[];
}

export default function Sponsors({ images, title }: Props) {
  return (
    <section class="pt-4 pb-32 max-w-6xl mx-auto">
      <div class="mx-auto">
        <h3 class="text-center mb-12 text-3xl font-bold mx-auto">
          {title}
        </h3>
        <div class="flex items-center align-center">
          <div class="mx-auto w-1/2 flex">
            <div class="w-full ">
              <div class="py-6 lg:px-4 lg:pb-4 lg:pr-0 bg-white rounded flex flex-row items-center justify-center flex-wrap">
              {images && images.map((image) => (
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
    </section>
  );
}