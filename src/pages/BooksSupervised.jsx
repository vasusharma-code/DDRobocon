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
    <div className="container mx-auto px-4 py-8 mt-10 min-h-screen overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Book Chapters</h1>
      
      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md divide-y divide-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Chapter</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Title</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Book Title</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Editors/Authors</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Publisher</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Publication Year</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">ISBN</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Pages</th>
            </tr>
          </thead>
          <tbody>
            {chapters.map((chapter, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300">{chapter.chapter}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">{chapter.title}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">{chapter.bookTitle}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">{chapter.authors || chapter.editors}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">{chapter.publisher}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">{chapter.publicationYear}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">{chapter.isbn}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">{chapter.pages || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookChapters;
