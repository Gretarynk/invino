const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const photoTitle = document.getElementById("photoTitle");
const closeModal = document.getElementById("closeModal");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

// Render gallery items dynamically
gallery.innerHTML = window.photos
  .map(
    (photo, index) => `
    <img
      src="${photo.src}"
      alt="${photo.title}"
      class="gallery-item"
      data-index="${index}"
    />
  `
  )
  .join("");

// Open modal and set the content
function openModal(index) {
  currentIndex = index;
  modal.classList.add("active");
  updateModalContent();
}

// Update modal content
function updateModalContent() {
  const { src, title } = window.photos[currentIndex];
  modalImage.src = src;
  photoTitle.textContent = title;
}

// Close modal
function closeModalHandler() {
  modal.classList.remove("active");
}

// Close modal when clicking outside the content
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModalHandler();
  }
});

// Navigate to the previous photo
prevBtn.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent event bubbling
  currentIndex = (currentIndex - 1 + window.photos.length) % window.photos.length;
  updateModalContent();
});

// Navigate to the next photo
nextBtn.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent event bubbling
  currentIndex = (currentIndex + 1) % window.photos.length;
  updateModalContent();
});

// Navigate to the next photo by clicking on the large photo
modalImage.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent closing the modal
  currentIndex = (currentIndex + 1) % window.photos.length;
  updateModalContent();
});

// Handle gallery click
gallery.addEventListener("click", (event) => {
  if (event.target.classList.contains("gallery-item")) {
    openModal(Number(event.target.dataset.index));
  }
});

closeModal.addEventListener("click", closeModalHandler);
