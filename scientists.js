const scientists = [
    {
      name: "Albert Einstein",
      born: "1879",
      knownFor: "Theory of Relativity",
      laws: "E = mc², General and Special Relativity",
      bio: "Einstein developed the theories of special and general relativity, transforming theoretical physics and our understanding of space, time, and energy."
    },
    {
      name: "Isaac Newton",
      born: "1643",
      knownFor: "Classical Mechanics",
      laws: "Newton's Laws of Motion and Universal Gravitation",
      bio: "Newton laid the groundwork for classical mechanics, invented calculus, and revolutionized our understanding of light and gravity."
    },
    {
      name: "Marie Curie",
      born: "1867",
      knownFor: "Radioactivity",
      laws: "Theory of Radioactivity, discovery of Polonium & Radium",
      bio: "Curie was a pioneer in the study of radioactivity and the first person to win Nobel Prizes in two different scientific fields."
    },
    {
      name: "Nikola Tesla",
      born: "1856",
      knownFor: "Alternating Current (AC)",
      laws: "AC power system, Tesla Coil",
      bio: "Tesla's innovations in electrical engineering laid the foundation for modern AC electricity, wireless communication, and electromagnetism."
    },
    {
      name: "Galileo Galilei",
      born: "1564",
      knownFor: "Astronomical Discoveries",
      laws: "Law of Falling Bodies, support for Heliocentrism",
      bio: "Galileo used telescopic observations to support heliocentrism and discovered moons of Jupiter, laying the foundation of modern astronomy."
    }
  ];
  
  // Load them into the page
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof loadScientists === 'function') {
      loadScientists(scientists);
    }
  });
  