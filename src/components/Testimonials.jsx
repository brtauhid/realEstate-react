import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
    return (
        <div className="w-[1200px] mt-10 bg-gray-300 mx-auto">
            <h1 className="text-center text-6xl">This is testimonail section</h1>

            <div className="flex justify-between px-10 mt-10">
                {testimonialsData.map((singleTestimonial, index) => (
                    <div className="" key={index}>
                        <img className="w-[300x] mx-auto" src={singleTestimonial.image} alt={singleTestimonial.alt} />
                        <div className="p-6 text-center">
                            <h3 className="text-[20px]">{singleTestimonial.name}</h3>
                            <h5>{singleTestimonial.title}</h5>
                            <p className="mt-4">{singleTestimonial.text}</p>
                            <div className="flex">{Array.from({length:singleTestimonial.rating}, (item, index)=>(
                                <img className="w-6 mt-6 mx-3" key={index} src={assets.star_icon} />
                            ))}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;