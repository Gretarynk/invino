// JavaScript for Image Gallery Modal
const galleryItems = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

// Open modal and show clicked image
galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = item.src;
    currentIndex = index;
  });
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Navigate to previous image
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  modalImage.src = galleryItems[currentIndex].src;
});

// Navigate to next image
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  modalImage.src = galleryItems[currentIndex].src;
});

// Close modal when clicking outside the image
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
