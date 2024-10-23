import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @description The title of the alumni section.
   */
  title?: string;
  subtitle?:string;
  description?: string;
  /**
   * @description The list of alumni to display.
   */
  alumni?: {
    name: string;
    title: string;
    subtitle: string;
    /**
     * @description The photo of the alumnus.
     * @widget ImageWidget
     */
    photo?: ImageWidget;
    /**
 * @description The background color of the alumni section.
 * @format color-input
 */
    backgroundColor?: string;
  /**
     * @description The text color of the alumni section.
     * @format color-input
     */
  }[];
  /**
   * @description The number of alumni to display per row.
   */
  alumniPerRow?: number;
  /**
   * @description The background color of the alumni section.
   * @format color-input
   */

  textColor?: string;
  id?: string;
}

export default function AlumniSection({
  title = "Our Alumni",
  description =
    "Meet some of our successful graduates who have gone on to achieve great things.",
  alumni = [],
  alumniPerRow = 5,
  subtitle = "ASDSADDSADSADSA",
  textColor = "#1f2937",
  id,
}: Props) {
  return (
    <section className={`py-12 `} id={id}>
      <div className="lg:container md:max-w-6xl lg:mx-auto mx-4 py-12 lg:py-28">
        <div class="flex flex-col items-center">
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
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${alumniPerRow} gap-8 pt-8`}
        >
          {alumni.map((alumnus, index) => (
            <div
              key={index}
              className={`flex flex-col bg-white rounded-3xl shadow-md items-center text-[${textColor}] bg-[${alumnus.backgroundColor}]`}
            >
              {alumnus.photo && (
                <img
                  src={alumnus.photo}
                  alt={alumnus.name}
                  className="flex object-cover content-center rounded-3xl w-80 h-80 pt-3"
                />
              )}
              <div class="flex flex-col items-start m-4">
                <p className="text-xl font-semibold text-left pb-4">
                  {alumnus.name}
                </p>
                <p className="text-left">{alumnus.title}</p>
                <p className="text-left">{alumnus.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
