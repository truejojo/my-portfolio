export const getProjects = () => {
  const projects = {
    headline: "Meine Projekte",
    subheadline: "Spiele für Kinder um das Erlenen von Buchstaben, Zahlen und Reihen zu unterstützen sowie die Merkfähigkeit",
    content: [
      {
        id: 1,
        title: "Zahlen",
        text: "Lerne die Zahlen und das Ein mal Eins inklusive Übungen",
        linkTo: "numbers",
      },
      {
        id: 2,
        title: "Buchstaben",
        text: "Lerne das Alphabet und jongliere mit den Buchstaben",
        linkTo: "letters",
      },
      {
        id: 3,
        title: "Merkfähigkeit",
        text: "Übungen für deine Kurz-Zeit-Merkfähigkeit",
        linkTo: "retentivity",
      },      
    ],
  };
  return projects;
};
