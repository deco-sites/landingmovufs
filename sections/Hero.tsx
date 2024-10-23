// import type { ImageWidget } from "apps/admin/widgets.ts";
// import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  description?: string;
  // image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description =
    "This text is fully editable and ready for your personal touch.",
  // image,
  placement = "left",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
}: Props) {
  return (
    <div
      style={{
        backgroundImage:
          `url("data:image/svg+xml, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201512%20758%22%20style%3D%22background-color%3A%20%238856c6%3B%22%3E%0A%3Cg%20opacity%3D%220.3%22%3E%0A%3Cg%20opacity%3D%220.09%22%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221632.5%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(1%200%200%20-1%20-13.9995%20281.104)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221632.5%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(1%200%200%20-1%20-13.9995%20629.661)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221632.5%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(1%200%200%20-1%20-13.9995%20455.384)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221632.5%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(1%200%200%20-1%20-13.9995%20106.826)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221632.5%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(1%200%200%20-1%20-13.9995%20368.244)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221632.5%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(1%200%200%20-1%20-13.9995%2019.6868)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221632.5%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(1%200%200%20-1%20-13.9995%20716.801)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221632.5%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(1%200%200%20-1%20-13.9995%20542.524)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221632.5%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(1%200%200%20-1%20-13.9995%20193.964)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%2036.377%201009.53)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20733.497%201009.53)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20384.937%201009.53)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%201082.05%201009.53)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%201430.61%201009.53)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20210.657%201009.53)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20907.771%201009.53)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20559.216%201009.53)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%201256.33%201009.53)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20123.519%201009.53)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20820.634%201009.54)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20472.074%201009.53)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%201169.19%201009.53)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20297.799%201009.53)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20994.914%201009.53)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%20646.354%201009.53)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3Cline%20y1%3D%22-0.680777%22%20x2%3D%221260.8%22%20y2%3D%22-0.680777%22%20transform%3D%22matrix(-4.37114e-08%20-1%20-1%204.37114e-08%201343.47%201009.53)%22%20stroke%3D%22%23341952%22%20stroke-width%3D%221.36155%22%2F%3E%0A%3C%2Fg%3E%0A%3Cg%20opacity%3D%220.5%22%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2286.6443%22%20transform%3D%22matrix(1%200%200%20-1%20908.516%20107.568)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.5%22%2F%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2286.6443%22%20transform%3D%22matrix(1%200%200%20-1%20472.819%20107.568)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.2%22%2F%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2285.4065%22%20transform%3D%22matrix(1%200%200%20-1%201257.57%20716.554)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.25%22%2F%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2285.4065%22%20transform%3D%22matrix(1%200%200%20-1%20559.464%20455.438)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.15%22%2F%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2285.4065%22%20transform%3D%22matrix(1%200%200%20-1%201169.69%20629.91)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.25%22%2F%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2285.4065%22%20transform%3D%22matrix(1%200%200%20-1%20472.661%20716.554)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.15%22%2F%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2285.4065%22%20transform%3D%22matrix(1%200%200%20-1%201169.69%20716.554)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.25%22%2F%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2285.4065%22%20transform%3D%22matrix(1%200%200%20-1%20472.661%20455.438)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.15%22%2F%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2286.6443%22%20transform%3D%22matrix(1%200%200%20-1%20386.174%20107.568)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.2%22%2F%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2287.8821%22%20transform%3D%22matrix(1%200%200%20-1%20386.174%2020.9241)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.2%22%2F%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2286.6443%22%20transform%3D%22matrix(1%200%200%20-1%20211.648%20194.213)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.2%22%2F%3E%0A%3Crect%20width%3D%2287.8821%22%20height%3D%2289.1199%22%20transform%3D%22matrix(1%200%200%20-1%20211.648%20805.674)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.2%22%2F%3E%0A%3Crect%20width%3D%2287.8821%22%20height%3D%2289.1199%22%20transform%3D%22matrix(1%200%200%20-1%20123.766%20805.674)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.2%22%2F%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2287.8821%22%20transform%3D%22matrix(1%200%200%20-1%20211.648%20631.147)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.2%22%2F%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2286.6443%22%20transform%3D%22matrix(1%200%200%20-1%201257.57%20194.212)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.15%22%2F%3E%0A%3Crect%20width%3D%2286.6443%22%20height%3D%2286.6443%22%20transform%3D%22matrix(1%200%200%20-1%201344.21%20107.568)%22%20fill%3D%22%23FAF7FD%22%20fill-opacity%3D%220.15%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E")`,
        backgroundRepeat: "round",
      }}
    >
      <nav class="container mx-auto mx-4">
        <div class="flex flex-col items-center gap-8">
          <div
            class="text-center py-36 md:pt-20 md:pb-28"
          >
            <div
              class={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 flex flex-col items-center justify-center lg:max-w-3xl`}
            >
              <div
                class="inline-block text-[32px] md:text-[64px] lg:text-[80px] text-[#FAF7FD] font-semibold"
                style={{
                  lineHeight: 0.9
                }}
                dangerouslySetInnerHTML={{
                  __html: title,
                }}
              >
              </div>
              <p class="leading-[150%] text-[#FAF7FD]">
                {description}
              </p>
              <div class="flex items-center gap-3">
                {cta?.map((item) => (
                  <a
                    key={item?.id}
                    id={item?.id}
                    href={item?.href}
                    target={item?.href.includes("http") ? "_blank" : "_self"}
                    class={`font-bold btn btn-sm btn-accent px-12 py-5 content-center ${
                      item.outline && "btn-outline"
                    }`}
                  >
                    {item?.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
