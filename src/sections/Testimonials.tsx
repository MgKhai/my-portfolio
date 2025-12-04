import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionHeader } from "@/components/SectionHeader";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import backgroundimage from "../assets/images/pixeldot.jpeg";
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Alex",
    position: "Marketing Manager",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti explicabo quo exercitationem dicta molestiae in tempore saepe assumenda? Ducimus perspiciatis fugiat facere commodi omnis cum nemo nobis distinctio sunt eius.",
    avater: faCode,
  },
  {
    name: "R",
    position: "Marketing Manager",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti explicabo quo exercitationem dicta molestiae in tempore saepe assumenda? Ducimus perspiciatis fugiat facere commodi omnis cum nemo nobis distinctio sunt eius.",
    avater: faRocket,
  },
  {
    name: "VBB",
    position: "Marketing Manager",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti explicabo quo exercitationem dicta molestiae in tempore saepe assumenda? Ducimus perspiciatis fugiat facere commodi omnis cum nemo nobis distinctio sunt eius.",
    avater: faRocket,
  },
];
export const TestimonialSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
          description="Don't just take my word for it. See what my clients have to say about my word."
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none">
          {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="max-w-xs md:p-8 md:max-w-md">
                <div className="flex gap-4 items-center ">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={testimonial.avater} className="size-6 max-h-full" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">{testimonial.position}</div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
