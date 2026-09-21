// gallery.js - Dynamic gallery data structure

// Helper to distribute images across categories since we don't have metadata for each
const categories = ['Homams', 'Poojas', 'Kalyanams', 'Abhishekams', 'Temple Seva', 'Events'];
const getCategory = (index) => categories[index % categories.length];

// Generate the 41 items based on the copied images (image_24.png to image_65.png)
// Using 24 to 64 which is exactly 41 images.
export const galleryImages = Array.from({ length: 41 }, (_, i) => {
  const fileIndex = i + 24;
  return {
    id: `gallery-img-${fileIndex}`,
    src: `/assets/gallery/image_${fileIndex}.png`,
    thumbnail: `/assets/gallery/image_${fileIndex}.png`, // Using same for now
    alt: `Abhishek Vaidika Seva - Sacred Moment ${i + 1}`,
    category: getCategory(i),
    featured: i < 6 // First 6 are featured for the home page preview
  };
});
