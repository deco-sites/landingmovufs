import { Collapse } from "./Collapse.tsx";

/** @titleBy title */
export interface Question {
  title: string;
  /** @format html */
  answer: string;
}

export interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
}

export interface Props {
  title?: string;
  titlePosition: "aside" | "column";
  description?: string;
  cta?: CTA;
  questions: Question[];
}

function Faq({ questions, title, titlePosition, description, cta }: Props) {
  return (
    <div class="container mx-auto px-8 flex flex-col items-center gap-4 py-8">
        <p class="text-4xl leading-snug">
        {title}
        </p>
        <p class="text-lg">
        {description}
        </p>
      <div class={`flex ${titlePosition === "aside"
        ? "flex-row justify-between items-start max-lg:flex-wrap"
        : "flex-col items-center justify-center"
        } w-full max-w-3xl`}>
        <div class="flex flex-col w-full gap-3">
          {questions.map(({ title, answer }, index) => (
            <div 
              key={index} 
              class="border-2 border-transparent transition-all duration-300">
              <Collapse title={title}>
                <div
                  class="mt-2 text-gray-800 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              </Collapse>
            </div>
          ))}
        </div>
      </div>
      <a
            key={cta?.id}
            id={cta?.id}
            href={cta?.href}
            target={cta?.href.includes("http") ? "_blank" : "_self"}
            class={`font-normal btn btn-primary ${
              cta?.outline && "btn-outline"
            }`}
          >
            {cta?.text}
          </a>
    </div>
  );
}

export default Faq;