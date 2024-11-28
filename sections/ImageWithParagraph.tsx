import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
export interface Props {
  title?: string;
  subtitle?: string;
  /**
   * @title Description
   * @format rich-text
   */
  description?: string;
  // tagline?: string;
  image?: ImageWidget;
  id?: string;
}

export default function ImageWithParagraph({
  title = "Here's an intermediate size heading you can edit",
  subtitle = "Here's an intermediate size heading you can edit",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f",
  id = "#sobre",
}: Props) {
  return (
    <div class="container lg:mx-auto mx-4 text-sm mt-4" id={id}>
      <div
        class="flex flex-col md:flex-row text-left items-center justify-between gap-24"
      >
        <div class="flex flex-col max-w-xl pl-4 items-center md:items-start sm:pl-10 md:pl-20 py-20 sm:py-10 md:py-0">
          <p class="text-base font-extrabold text-primary">
            {title}
          </p>
          <p class="text-4xl font-bold leading-snug pb-4">
            {subtitle}
          </p>
          <p
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          >
          </p>
        </div>

        <div class="flex h-full rounded-lg overflow-hidden justify-end">
          <Image
            width={700}
            height={720}
            class="rounded-3xl"
            src={image}
            alt={image}
            decoding="async"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
