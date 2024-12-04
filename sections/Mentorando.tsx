export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Banner {
  title?: string;
  description?: string;
  button?: CTA;
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
  id?: string;
}

export default function ImageWithParagraph({
  title = "Here's an intermediate size heading you can edit",
  subtitle = "Here's an intermediate size heading you can edit",
  description =
  "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  id = "participe",
  items = [
    {
      button: {
        id: '',
        href: '#',
        text: 'SEJA MENTORADO',
        outline: false
      },
      title: "Mentorado",
      description: "Pessoas motivadas a ajudar compartilhando experiências ou se envolvendo na organização.",
    },
    {
      button: {
        id: '',
        href: '#',
        text: 'SEJA MENTOR',
        outline: false
      },
      title: "Mentorias",
      description: "Pessoas que desejam aprender e se conectar com profissionais experientes através de palestras e mentorias.",
    },
  ], }: Props) {
  return (
    <div class="container lg:mx-auto mx-4 text-sm mt-4" id={id}>
      <div
        class="flex flex-col md:flex-row text-left items-center md:items-start justify-between py-20 gap-x-6 gap-y-2" id={id}
      >
        <div class="flex flex-col max-w-xl pl-4 items-center sm:items-start sm:pl-10 md:pl-20 gap-x-4">
          <p class="text-base font-extrabold text-primary">
            {title}
          </p>
          <p class="text-4xl font-bold leading-snug pb-4 ">
            {subtitle}
          </p>
          <p
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          >
          </p>
        </div>
        <div class="flex flex-col gap-4 px-4 sm:pl-0 sm:pr-8">
          {items.map((item, index) => (
            <div class={`flex flex-col lg:flex-row px-6 py-6 justify-center items-center rounded-3xl gap-x-8 max-w-50% ${item.button.outline ? 'bg-primary' : 'bg-[#EFEFF0] border border-[#E1E1E4]'}`}>
              <div class="flex justify-start items-start">
                <div class="min-w-6 max-w-6">
                  {item.button.outline ?
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.2467 1.19242L20.4702 0.96892C20.6384 0.800795 20.8381 0.667451 21.0579 0.5765C21.2777 0.485549 21.5132 0.438773 21.751 0.438843C21.9888 0.438912 22.2243 0.485826 22.444 0.576906C22.6637 0.667985 22.8633 0.801447 23.0315 0.96967C23.1996 1.13789 23.3329 1.33758 23.4239 1.55734C23.5148 1.7771 23.5616 2.01262 23.5616 2.25045C23.5615 2.48828 23.5146 2.72378 23.4235 2.94348C23.3324 3.16318 23.1989 3.3628 23.0307 3.53092L22.8072 3.75292C23.1896 4.18171 23.3934 4.74051 23.3769 5.31476C23.3605 5.88902 23.125 6.43522 22.7187 6.84142L7.28072 22.2809C7.18422 22.3769 7.0634 22.4448 6.93122 22.4774L0.931224 23.9774C0.805663 24.0087 0.674148 24.0069 0.549463 23.9723C0.424779 23.9377 0.311167 23.8715 0.21967 23.78C0.128173 23.6885 0.0619052 23.5749 0.0273071 23.4502C-0.00729101 23.3255 -0.0090421 23.194 0.022224 23.0684L1.52222 17.0684C1.55504 16.9368 1.62296 16.8165 1.71872 16.7204L16.1817 2.25742C16.0371 2.15561 15.8611 2.10821 15.6849 2.12358C15.5087 2.13895 15.3436 2.21611 15.2187 2.34142L10.2807 7.28092C10.211 7.35065 10.1282 7.40597 10.0371 7.44371C9.94599 7.48144 9.84834 7.50087 9.74972 7.50087C9.65111 7.50087 9.55346 7.48144 9.46235 7.44371C9.37124 7.40597 9.28846 7.35065 9.21872 7.28092C9.14899 7.21119 9.09368 7.1284 9.05594 7.0373C9.0182 6.94619 8.99878 6.84854 8.99878 6.74992C8.99878 6.6513 9.0182 6.55365 9.05594 6.46254C9.09368 6.37144 9.14899 6.28865 9.21872 6.21892L14.1597 1.28092C14.5662 0.874443 15.1128 0.638951 15.6874 0.622773C16.262 0.606595 16.821 0.810957 17.2497 1.19392C17.6619 0.825578 18.1952 0.621838 18.7479 0.621561C19.3007 0.621285 19.8342 0.824491 20.2467 1.19242Z" fill="#F6F6F7" />
                    </svg> : <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 3V3.5115C5.505 4.7475 3 8.082 3 12V13.7865L1.245 14.664C0.87095 14.8507 0.556326 15.138 0.336417 15.4936C0.116509 15.8491 1.41225e-05 16.2589 0 16.677L0 20.25C0 20.8467 0.237053 21.419 0.65901 21.841C1.08097 22.2629 1.65326 22.5 2.25 22.5H3.75C4.434 23.4105 5.523 24 6.75 24H17.25C18.477 24 19.566 23.4105 20.25 22.5H21.75C22.3467 22.5 22.919 22.2629 23.341 21.841C23.7629 21.419 24 20.8467 24 20.25V16.677C24 16.2589 23.8835 15.8491 23.6636 15.4936C23.4437 15.138 23.129 14.8507 22.755 14.664L21 13.7865V12C21.0007 10.1383 20.424 8.32221 19.3494 6.80194C18.2748 5.28168 16.7552 4.13207 15 3.5115V3C15 2.20435 14.6839 1.44129 14.1213 0.87868C13.5587 0.316071 12.7956 0 12 0C11.2044 0 10.4413 0.316071 9.87868 0.87868C9.31607 1.44129 9 2.20435 9 3ZM12 1.5C12.3978 1.5 12.7794 1.65804 13.0607 1.93934C13.342 2.22064 13.5 2.60218 13.5 3V3.1245C12.507 2.95666 11.493 2.95666 10.5 3.1245V3C10.5 2.60218 10.658 2.22064 10.9393 1.93934C11.2206 1.65804 11.6022 1.5 12 1.5ZM12 6C13.4434 5.9997 14.8385 6.51973 15.9295 7.46473C17.0205 8.40973 17.7343 9.71635 17.94 11.145C17.9557 11.2433 17.9516 11.3438 17.928 11.4406C17.9044 11.5373 17.8617 11.6284 17.8026 11.7085C17.7434 11.7886 17.6689 11.8561 17.5833 11.9071C17.4978 11.9581 17.4029 11.9915 17.3043 12.0055C17.2057 12.0194 17.1053 12.0136 17.009 11.9883C16.9127 11.963 16.8224 11.9188 16.7433 11.8583C16.6642 11.7977 16.598 11.7221 16.5485 11.6356C16.499 11.5492 16.4672 11.4538 16.455 11.355C16.3022 10.2823 15.7674 9.30084 14.949 8.59079C14.1306 7.88073 13.0835 7.4898 12 7.4898C10.9165 7.4898 9.86939 7.88073 9.05098 8.59079C8.23258 9.30084 7.69785 10.2823 7.545 11.355C7.53277 11.4538 7.50097 11.5492 7.45147 11.6356C7.40198 11.7221 7.33576 11.7977 7.2567 11.8583C7.17764 11.9188 7.08731 11.963 6.99099 11.9883C6.89466 12.0136 6.79427 12.0194 6.69567 12.0055C6.59706 11.9915 6.50222 11.9581 6.41668 11.9071C6.33114 11.8561 6.25661 11.7886 6.19744 11.7085C6.13826 11.6284 6.09564 11.5373 6.07204 11.4406C6.04844 11.3438 6.04435 11.2433 6.06 11.145C6.26568 9.71635 6.97948 8.40973 8.07049 7.46473C9.16151 6.51973 10.5566 5.9997 12 6ZM6.75 13.5H17.25C17.4489 13.5 17.6397 13.579 17.7803 13.7197C17.921 13.8603 18 14.0511 18 14.25V20.25C18 20.4489 17.921 20.6397 17.7803 20.7803C17.6397 20.921 17.4489 21 17.25 21H6.75C6.55109 21 6.36032 20.921 6.21967 20.7803C6.07902 20.6397 6 20.4489 6 20.25V14.25C6 14.0511 6.07902 13.8603 6.21967 13.7197C6.36032 13.579 6.55109 13.5 6.75 13.5Z" fill="#333234" />
                    </svg>
                  }
                </div>

                <div class="flex flex-col max-w-xl items-start sm:items-start pl-4">
                  <p class={`text-base font-extrabold ${item.button.outline ? 'text-[#F6F6F7]' : ''}`}>
                    {item.title}
                  </p>
                  <p class={`leading-snug pb-4 ${item.button.outline ? 'text-[#F6F6F7]' : ''}`}>
                    {item.description}
                  </p>
                </div>
              </div>
              <a
                key={item.button.id}
                id={item.button.id}
                href={item.button.href}
                target={item.button.href.includes("http") ? "_blank" : "_self"}
                class={`font-bold btn btn-sm px-12 py-5 content-center text-[#FAF7FD] ${item.button.outline ? 'btn-accent' : 'btn-primary'} ${item.button.outline && "btn-outline"
                  }`}
              >
                {item?.button.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}