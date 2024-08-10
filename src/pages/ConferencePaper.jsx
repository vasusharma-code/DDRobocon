import React from 'react';

const ConferencePapers = () => {
  const papers = [
    {
      number: 1,
      authors: "Z. Alam, D.A. Khan, F. Iqbal, S. Jha",
      title: "Analysis of forces in ball end magnetorheological finishing process",
      event: "Presented at 39th International MATADOR Conference on Advanced Manufacturing",
      date: "5th - 7th July 2017",
      location: "University of Manchester, U.K."
    },
    {
      number: 2,
      authors: "F Iqbal, S Jha",
      title: "Nanofinishing of freeform surfaces using BEMRF",
      event: "In Nanofinishing Science and Technology: Basic and Advanced Finishing and Polishing Processes",
      date: "2017 Jan 7",
      pages: "pp. 235-264",
      publisher: "CRC Press",
      status: "Published"
    },
    {
      number: 3,
      authors: "D.A. Khan, Z. Alam, F. Iqbal, S. Jha",
      title: "A study on the effect of polishing fluid composition in ball end magnetorheological finishing of aluminum",
      event: "Presented at 39th International MATADOR Conference on Advanced Manufacturing",
      date: "5th - 7th July 2017",
      location: "University of Manchester, U.K."
    },
    {
      number: 4,
      authors: "F. Iqbal, Z. Alam, D.A. Khan, S. Jha",
      title: "Localized finishing by ball end magnetorheological finishing process using integrated confocal sensor for in-situ surface roughness measurement",
      event: "Presented at 39th International MATADOR Conference on Advanced Manufacturing",
      date: "5th - 7th July 2017",
      location: "University of Manchester, U.K."
    },
    {
      number: 5,
      authors: "D.A. Khan, Z. Alam, F. Iqbal, S. Jha",
      title: "Experimental investigations on the effect of relative particle sizes of abrasive and iron powder in polishing fluid composition for ball end MR finishing of copper",
      event: "Accepted for oral presentation in International conference COPEN 2017",
      date: "December 2017"
    },
    {
      number: 6,
      authors: "Z. Alam, D.A. Khan, F. Iqbal, S. Jha",
      title: "Effect of Polishing Fluid Composition on Forces in Ball End Magnetorheological Finishing Process",
      event: "Accepted for oral presentation in International conference COPEN 2017",
      date: "December 2017"
    },
    {
      number: 7,
      authors: "F. Iqbal, Z. Alam, D.A. Khan, S. Jha",
      title: "Constant work gap perpetuation in ball end magnetorheological finishing process",
      event: "Accepted for oral presentation in International conference COPEN 2017",
      date: "December 2017"
    },
    {
      number: 8,
      authors: "A.K. Sahu, F Iqbal, S. Jha",
      title: "Insitu geometrical measurements of microchannel on EN 31 steel by laser micromachining using confocal sensor",
      event: "Accepted for oral presentation in International conference COPEN 2017",
      date: "December 2017"
    },
    {
      number: 9,
      authors: "A. Kumar, F. Iqbal, S. Jha",
      title: "Non-Contact measurement in plate bending using Confocal Microscopy",
      event: "Accepted for oral presentation in International conference COPEN 2017",
      date: "December 2017"
    },
    {
      number: 10,
      authors: "F. Iqbal, R. Rammohan, H. Patel, S. Jha",
      title: "Design and development of automated workpiece cleaning system for ball end magneto-rheological finishing process",
      event: "International Conference on Advances in Materials & Manufacturing, ICAMM 2016",
      location: "PSG Tech Coimbatore, India",
      volume: "Vol. 1",
      pages: "pp. 289-295"
    },
    {
      number: 11,
      authors: "D.A. Khan, Z. Alam, S. Jha",
      title: "Nanofinishing of copper using ball end magnetorheological finishing (BEMRF) process",
      event: "ASME 2016",
      volume: "V002T02A002",
      doi: "V002T02A002"
    },
    {
      number: 12,
      authors: "D.A. Khan, S Jha",
      title: "Selection of optimum polishing fluid composition for Ball end magnetorheological finishing (BEMRF) of copper",
      event: "6th International AIMTDR conference 2016",
      location: "COE Pune"
    },
    {
      number: 13,
      authors: "A.K. Singh, S. Jha, P.M. Pandey",
      title: "A novel ball end magnetorheological finishing process",
      event: "ASME International Mechanical Engineering Congress and Exposition",
      date: "2014",
      volume: "V02BT02A032",
      doi: "V02BT02A032"
    },
    {
      number: 14,
      authors: "A.K. Singh, S. Jha, P.M. Pandey",
      title: "Rheological Behavior of MR polishing fluid In Ball End Magnetorheological Finishing Process",
      journal: "Magnetohydrodynamics",
      volume: "49/3-4",
      pages: "512-515",
      year: "2013"
    },
    {
      number: 15,
      authors: "A. K. Singh, S. Jha, P. M. Pandey",
      title: "Nanofinishing process for 3D freeform surfaces using ball end MR finishing tool",
      event: "MATADOR 2010",
      date: "July 14-16, 2010",
      location: "Manchester University, UK"
    },
    {
      number: 16,
      authors: "A. K. Singh, S. Jha, P. M. Pandey",
      title: "A process of generating magnetically controlled ball end smart abrasive laden shape for nanofinishing of 3D intricate shaped surfaces",
      event: "2nd International Conference on Production and Industrial Engineering CPIE-2010",
      location: "NIT Jalandhar"
    },
    {
      number: 17,
      authors: "R. Sagar, P.M. Pandey, S. Nenavath, S. Jha, A. K. Darpe",
      title: "Drilling of small transverse holes in the wire (SMA) by EDM",
      event: "The International Conference on Shape Memory and Superelastic Technologies",
      date: "2010"
    },
    {
      number: 18,
      authors: "S. Jha",
      title: "Magnetorheological abrasive flow finishing process optimization using genetic algorithm",
      event: "2nd International All India Manufacturing Technology, Design and Research (AIMTDR 2008) Conference",
      location: "IIT Madras, Chennai"
    },
    {
      number: 19,
      authors: "R.S. Nair, G. Karthikeyan, J. Ramkumar, S. Jha, Anil Varghese",
      title: "Development of MAF setup for finishing of ultra high speed shafts",
      event: "2nd International All India Manufacturing Technology, Design and Research (AIMTDR 2008) Conference",
      location: "IIT Madras, Chennai"
    },
    {
      number: 20,
      authors: "S. Jha, V.K. Jain, S.K. Choudhury",
      title: "On the performance of abrasive flow finishing process",
      journal: "Proceedings of Precision Engineering",
      volume: "2004",
      pages: "216-223"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-2xl font-bold mb-4">Conference Papers</h1>
      <ol className="list-decimal list-inside">
        {papers.map((paper) => (
          <li key={paper.number} className="mb-4">
            <p><strong>Authors:</strong> {paper.authors}</p>
            <p><strong>Title:</strong> {paper.title}</p>
            <p><strong>Event:</strong> {paper.event}</p>
            {paper.date && <p><strong>Date:</strong> {paper.date}</p>}
            {paper.location && <p><strong>Location:</strong> {paper.location}</p>}
            {paper.pages && <p><strong>Pages:</strong> {paper.pages}</p>}
            {paper.publisher && <p><strong>Publisher:</strong> {paper.publisher}</p>}
            {paper.status && <p><strong>Status:</strong> {paper.status}</p>}
            {paper.volume && <p><strong>Volume:</strong> {paper.volume}</p>}
            {paper.doi && <p><strong>DOI:</strong> <a href={paper.doi} className="text-blue-600" target="_blank" rel="noopener noreferrer">{paper.doi}</a></p>}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ConferencePapers;
