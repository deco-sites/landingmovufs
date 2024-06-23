import Icon from "site/components/ui/Icon.tsx";

export interface Question {
  question: string;
  /**
   * @format textarea
   */
  answer: string;
}

export function FaqItem({ question, answer }: Question) {
  return (
    <details class="home-faq">
      <summary class="border-[#272D2D] border rounded-2xl flex flex-row justify-between items-center px-[24px] py-[22.5px] gap-[16px] group cursor-pointer bg-[#0D1717] rounded-2xl">
        <p class="font-bold text-[18px] leading-[27px] text-white">
          {question}
        </p>
        <div class="flex-none">
          <Icon
            class="text-white"
            id="Plus"
            width={18}
            height={18}
            strokeWidth={"3"}
          />
        </div>
      </summary>
      <p class="border-[#272D2D] border rounded-t-none border-t-0 relative top-[-15px] pt-[5px] px-[24px] py-[22.5px] bg-[#0D1717] text-[#949E9E] text-[18px] leading-[27px] rounded-2xl">
        {answer}
      </p>
    </details>
  );
}

export interface Props {
  questions: Question[];
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title: string;
  description: string;
}

export default function Faq({
  title = "FAQs",
  description = "Esse é o FAQ",
  questions = [
    {
      "answer":
        "Deco.cx is the frontend platform that bridges the gap between basic no-code site builders and complex full-code setups, allowing businesses of all sizes to create high-performance, fully personalized and AI-native web experiences. Our open-source platform bundles the best-in-class of framework, hosting, CMS, visual editor and code editor. ",
      "question": "What is deco.cx?",
    },
    {
      "answer":
        "No, deco.cx acts as a complementary headless frontend layer for your existing commerce platform. It integrates seamlessly with any commerce platform that has open APIs, enhancing your store's development, performance and experience, without replacing your current system.",
      "question": "Does deco.cx replace my current commerce platform?",
    },
    {
      "answer":
        "Deco.cx uses Deno, Preact, Tailwind, and Fresh. Deno offers a secure runtime for JavaScript and TypeScript, while Preact is a lightweight, React-compatible framework. Tailwind facilitates optimized web styling, and Fresh is a modern server-side web framework designed for Deno.",
      "question": "What tech stack does deco.cx use?",
    },
  ],
}: Props) {
  return (
    <section class="max-w-[768px] z-10 text-white relative mx-auto py-12 px-6 lg:px-0 lg:py-40">
      <div class="flex flex-col gap-[20px] m-auto">
        <h2
          class="text-black text-4xl leading-snug lg:w-1/2"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        >
        </h2>
        <p class="text-lg text-black">
          {description}
        </p>
        <div class="flex flex-col gap-[16px]">
          {questions.map((item) => {
            return <FaqItem {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}
