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

        <div class="flex flex-wrap justify-center items-center">
          <div class="w-full">
            <div class="py-6 lg:px-4 lg:pb-4 bg-white rounded flex flex-wrap flex-col items-center gap-8 pt-6 sm:flex-row">
              {images && images.map((image) => (
                <Image
                  src={image}
                  alt={image}
                  width={640}
                  height={640}
                  decoding="async"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 30vw"
                  class="rounded-3xl mx-auto max-w-[198px]"
                  style={{ objectFit: "contain" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
