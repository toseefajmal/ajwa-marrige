
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Camera,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Crown,
} from "lucide-react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    "All",
    "Wedding",
    "Mehndi",
    "Barat",
    "Reception",
    "Decoration",
  ];

  const galleryImages = [
    {
      id: 1,
      title: "Elegant Wedding Stage",
      category: "Wedding",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
    },
    {
      id: 2,
      title: "Beautiful Mehndi Setup",
      category: "Mehndi",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900",
    },
    {
      id: 3,
      title: "Royal Wedding Decoration",
      category: "Decoration",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900",
    },
    {
      id: 4,
      title: "Grand Barat Celebration",
      category: "Barat",
      image:
        "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=900",
    },
    {
      id: 5,
      title: "Reception Event",
      category: "Reception",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900",
    },
    {
      id: 6,
      title: "Luxury Floral Decoration",
      category: "Decoration",
      image:
        "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=900",
    },
    {
      id: 7,
      title: "Wedding Moments",
      category: "Wedding",
      image:
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900",
    },
    {
      id: 8,
      title: "Mehndi Night",
      category: "Mehndi",
      image:
        "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=900",
    },
    {
      id: 9,
      title: "Beautiful Reception",
      category: "Reception",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900",
    },
  ];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  const showNext = () => {
    const currentIndex = galleryImages.findIndex(
      (item) => item.id === selectedImage.id
    );

    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const showPrevious = () => {
    const currentIndex = galleryImages.findIndex(
      (item) => item.id === selectedImage.id
    );

    const previousIndex =
      (currentIndex - 1 + galleryImages.length) %
      galleryImages.length;

    setSelectedImage(galleryImages[previousIndex]);
  };

  return (
    <div className="bg-[#faf8f3] text-[#252019]">

      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[540px] flex items-center justify-center">

        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1800"
          alt="Wedding gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#120e09]/75" />

        <div className="relative text-center px-6 max-w-3xl">

          <div className="flex justify-center items-center gap-3">
            <span className="w-10 h-px bg-[#d5b36a]" />
            <Camera size={17} className="text-[#e3c581]" />
            <span className="w-10 h-px bg-[#d5b36a]" />
          </div>

          <p className="text-[#e3c581] uppercase tracking-[5px] text-xs mt-6">
            Our Beautiful Memories
          </p>

          <h1 className="text-5xl md:text-7xl font-serif text-white mt-6">
            Our <span className="text-[#e3c581] italic">Gallery</span>
          </h1>

          <p className="text-gray-300 mt-6 leading-8 max-w-xl mx-auto">
            Explore beautiful celebrations, elegant decorations
            and unforgettable wedding moments at Ajwa Marriage Hall.
          </p>

          <div className="flex justify-center items-center gap-3 mt-7 text-sm text-gray-300">
            <Link to="/" className="hover:text-[#e3c581]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#e3c581]">Gallery</span>
          </div>

        </div>
      </section>

      {/* Gallery Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">

          <Crown size={35} className="text-[#b99753] mx-auto" />

          <p className="text-[#aa8542] uppercase tracking-[4px] text-xs mt-6">
            Moments Worth Remembering
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mt-5 leading-tight">
            Every Picture Tells
            <span className="block text-[#b99753] italic">
              A Beautiful Story
            </span>
          </h2>

          <p className="text-gray-500 leading-8 mt-6">
            From stunning wedding stages to beautiful Mehndi
            celebrations, discover the elegance and atmosphere
            of special occasions through our gallery.
          </p>

        </div>
      </section>

      {/* Gallery Section */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-sm transition duration-300 border ${
                  activeCategory === category
                    ? "bg-[#17140f] text-[#e3c581] border-[#17140f]"
                    : "bg-white text-gray-600 border-[#e5dfd2] hover:border-[#b99753] hover:text-[#a27d3b]"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

          {/* Images Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredImages.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative h-[300px] md:h-[360px] overflow-hidden cursor-pointer bg-[#e8dfce]"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition" />

                <div className="absolute top-5 left-5">
                  <span className="bg-[#b99753] text-white text-xs uppercase tracking-wider px-4 py-2">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 translate-y-3 group-hover:translate-y-0 transition duration-500">
                  <h3 className="text-white text-2xl font-serif">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-[#e3c581] text-sm mt-3 opacity-0 group-hover:opacity-100 transition">
                    View Image <ArrowRight size={16} />
                  </div>
                </div>

              </div>
            ))}

          </div>

          {filteredImages.length === 0 && (
            <p className="text-center text-gray-500 py-16">
              No images available in this category.
            </p>
          )}

        </div>
      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-5"
          onClick={() => setSelectedImage(null)}
        >

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-[#d5b36a]"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 md:left-8 text-white hover:text-[#d5b36a]"
          >
            <ChevronLeft size={38} />
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[75vh] object-contain"
            />

            <div className="text-center mt-5">
              <h3 className="text-white text-2xl font-serif">
                {selectedImage.title}
              </h3>

              <p className="text-[#d5b36a] text-sm mt-2">
                {selectedImage.category}
              </p>
            </div>

          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-3 md:right-8 text-white hover:text-[#d5b36a]"
          >
            <ChevronRight size={38} />
          </button>

        </div>
      )}

      {/* CTA Section */}
      <section className="bg-[#17140f] py-24 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <Camera size={40} className="text-[#d5b36a] mx-auto" />

          <p className="text-[#d5b36a] uppercase tracking-[4px] text-xs mt-7">
            Create Your Own Memories
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-white mt-5">
            Your Special Day Deserves
            <span className="block text-[#e3c581] italic mt-2">
              A Beautiful Venue
            </span>
          </h2>

          <p className="text-gray-400 leading-8 mt-6 max-w-2xl mx-auto">
            Let Ajwa Marriage Hall be part of your unforgettable
            celebration. Explore our venue and plan your event with us.
          </p>

          <Link
            to="/booking"
            className="inline-flex items-center gap-3 bg-[#c7a45b] hover:bg-[#dfbf79] text-[#17140f] px-9 py-4 font-semibold mt-9 transition"
          >
            Book Your Event <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Gallery;
