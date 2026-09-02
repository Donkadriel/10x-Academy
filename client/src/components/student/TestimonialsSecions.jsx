import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const TestimonialsSection = () => {
  const { allTestimonials } = useContext(AppContext);

  return (
    <div className="pb-14 px-8 md:px-40 ">
      <h2 className="text-heading text-3xl font-medium">Testimonials</h2>
      <p className="text-body md:text-base mt-3">
        Hear from our learners as they share their journeys of transformation,
        success, and how our <br />
        platform has made a difference in their lives.
      </p>

      <div className="grid gridTemplateColumns  px-4 md:px-0 md:my-16 my-10 gap-8 ">
        {allTestimonials.map((testimonial, index) => (
          <div key={index} className="text-sm text-left border border-border/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/10 overflow-hidden">
            <div className="flex items-center gap-4 px-5 py-4 bg-border/10">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h1 className="lg:text-lg md:text-[17px] font-medium text-heading">{testimonial.name}</h1>
                <p className="text-heading/80">{testimonial.role}</p>
              </div>

              
            </div>
            <div className="p-5 pb-7">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    
                      <img
                        key={i}
                        src={
                          i < Math.floor(testimonial.rating)
                            ? assets.star
                            : assets.star_blank
                        }
                        alt={i}
                        className="w-3.5 h-3.5"
                      />
                  ))}
                </div>
                <p className="text-body mt-5">{testimonial.feedback}</p>
                
              </div>
              <a href="#" className="underline text-blue-500 px-5 ">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
