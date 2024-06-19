import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @description The title of the alumni section.
   */
  title?: string;
  /**
   * @description The description or subtitle of the alumni section.
   * @format textarea
   */
  description?: string;
  /**
   * @description The list of alumni to display.
   */
  alumni?: {
    name: string;
    title: string;
    /**
     * @description The photo of the alumnus.
     * @widget ImageWidget
     */
    photo?: ImageWidget;
  }[];
  /**
   * @description The number of alumni to display per row.
   */
  alumniPerRow?: number;
  /**
   * @description The background color of the alumni section.
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @description The text color of the alumni section.
   * @format color-input
   */
  textColor?: string;
}

export default function AlumniSection({
  title = "Our Alumni",
  description = "Meet some of our successful graduates who have gone on to achieve great things.",
  alumni = [],
  alumniPerRow = 5,
  backgroundColor = "#f3f4f6",
  textColor = "#1f2937",
}: Props) {
  return (
    <section className={`py-12 bg-[${backgroundColor}]`}>
      <div className="container mx-auto">
        <h2 className={`text-3xl font-bold mb-4 text-center text-[${textColor}]`}>{title}</h2>
        <p className={`text-xl text-center mb-8 text-[${textColor}]`}>{description}</p>
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${alumniPerRow} gap-8`}>
          {alumni.map((alumnus, index) => (
            <div key={index} className={`bg-white rounded-3xl shadow-md p-6 text-[${textColor}]`}>
              {alumnus.photo && (
                <img
                  src={alumnus.photo}
                  alt={alumnus.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2 text-center">{alumnus.name}</h3>
              <p className="text-center">{alumnus.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}