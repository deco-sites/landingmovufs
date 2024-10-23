import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Events {
  title?: string;
  description?: string;
  date?: string;
  image?: ImageWidget;
  cta?: CTA;
}

export interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  items?: Events[];
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function BlogPosts({
  title = "Here's a component for you to showcase your blogposts",
  description = "This subheading is fully editable, remember?",
  subtitle = 'JDSAODSJODSJODSJO',
  items = [
    {
      title: "Mentorado",
      description: "Pessoas motivadas a ajudar compartilhando experiências ou se envolvendo na organização.",
      date: "16/10",
      image: "",
      cta: { id: "change-me-1", href: "/", text: "Change me", outline: false }
    },
  ]
}: Props) {
  return (
    <div class="sm:r-2 sm:pt-2 rounded-3xl overflow-x-hidden">
      <div class="flex flex-col text-left items-center justify-center py-20 gap-x-6">
        <div class="pl-4 flex flex-col items-center">
          <p class="text-primary font-bold text-lg leading-snug">
            {subtitle}
          </p>
          <p class="text-4xl font-bold leading-snug">
            {title}
          </p>
          <p class="text-md pt-8">
            {description}
          </p>
        </div>
        <div class="flex flex-col gap-8 px-4 pb-4 pt-12">
          {items.map((item, index) => (
            <div class="flex flex-col bg-secondary md:flex-row gap-4 rounded-3xl border p-4">
              <Image
                class="flex rounded-3xl max-w-[380px] max-h-96"
                src={item.image}
                alt={item.image}
                decoding="async"
                loading="lazy"
              />
              <div class="flex flex-col md:flex-row items-center">
                <div class="flex flex-col items-center sm:items-start px-2 gap-4">
                  <div class="flex flex-col">
                    <p class="flex mb-3 border w-fit px-3 py-1 items-center border-black rounded-3xl">
                      {item.date}
                    </p>
                    <p class="text-3xl font-bold pb-3 max-w-md">
                      {item.title}
                    </p>
                    <p
                      class="text-sm pb-4 max-w-md"
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    >
                    </p>
                    <a
                      key={item.cta.id}
                      id={item.cta.id}
                      href={item.cta.href}
                      target={item.cta.href.includes("http") ? "_blank" : "_self"}
                      class={`font-bold btn w-fit px-8 btn-md content-center text-[#341952] btn-[#FAF7FD] ${item.cta.outline && "btn-outline"
                        }`}
                    >
                      {item?.cta.text}
                      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7806 8.05649L11.0306 14.8065C10.8899 14.9472 10.699 15.0263 10.5 15.0263C10.301 15.0263 10.1101 14.9472 9.96937 14.8065C9.82864 14.6658 9.74958 14.4749 9.74958 14.2759C9.74958 14.0768 9.82864 13.886 9.96937 13.7452L15.4397 8.27587H0.75C0.551088 8.27587 0.360322 8.19685 0.21967 8.0562C0.0790178 7.91555 0 7.72478 0 7.52587C0 7.32696 0.0790178 7.13619 0.21967 6.99554C0.360322 6.85489 0.551088 6.77587 0.75 6.77587H15.4397L9.96937 1.30649C9.82864 1.16576 9.74958 0.974892 9.74958 0.775869C9.74958 0.576846 9.82864 0.385974 9.96937 0.245244C10.1101 0.104513 10.301 0.0254517 10.5 0.0254517C10.699 0.0254517 10.8899 0.104513 11.0306 0.245244L17.7806 6.99524C17.8504 7.0649 17.9057 7.14761 17.9434 7.23866C17.9812 7.32971 18.0006 7.42731 18.0006 7.52587C18.0006 7.62443 17.9812 7.72203 17.9434 7.81307C17.9057 7.90412 17.8504 7.98684 17.7806 8.05649Z" fill="#341952" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
