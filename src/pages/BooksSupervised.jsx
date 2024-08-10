import React from 'react';

const BookChapters = () => {
  const chapters = [
    {
      title: "Magnetorheological Nano Finishing Processes",
      bookTitle: "Introduction to Micromachining",
      editors: "Prof. V. K. Jain",
      publisher: "Narosa Publishing House Pvt. Ltd.",
      publicationYear: "2010",
      isbn: "978-81-7319-915-8",
      chapter: "Chapter 5"
    },
    {
      title: "Nanofinishing Techniques",
      authors: "Sunil Jha and V. K. Jain",
      bookTitle: "Micromanufacturing and Nanotechnology",
      editor: "Prof. (Dr.) N. P. Mahalik",
      pages: "171-195",
      publicationYear: "2006",
      isbn: "3-540-25377-7",
      publisher: "Springer-Verlag",
      chapter: "Chapter 8"
    },
    {
      title: "Nanofinishing of Free Form Surfaces using BEMRF",
      authors: "Faiz Iqbal and Sunil Jha",
      bookTitle: "Nanofinishing Science and Technology: Basic and Advanced Finishing and Polishing Processes",
      editor: "Prof. V. K. Jain",
      publicationYear: "2017",
      isbn: "9781498745949",
      publisher: "CRC Press",
      chapter: "Chapter 10"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-2xl font-bold mb-4">Book Chapters</h1>
      <ul className="list-disc list-inside">
        {chapters.map((chapter, index) => (
          <li key={index} className="mb-4">
            <p><strong>Chapter:</strong> {chapter.chapter}</p>
            <p><strong>Title:</strong> {chapter.title}</p>
            <p><strong>Book Title:</strong> {chapter.bookTitle}</p>
            <p><strong>Editors/Authors:</strong> {chapter.authors || chapter.editors}</p>
            <p><strong>Publisher:</strong> {chapter.publisher}</p>
            <p><strong>Publication Year:</strong> {chapter.publicationYear}</p>
            <p><strong>ISBN:</strong> {chapter.isbn}</p>
            <p><strong>Pages:</strong> {chapter.pages || 'N/A'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookChapters;
