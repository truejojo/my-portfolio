import { useEffect, useState } from "react";
import { DocumentData, collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../firebase/config";
import Headline2 from "../assets/Headline2";

type TTextWithLinksWrapperProps = {
  path: string;
};

const TextWithLinksWrapper = ({ path }: TTextWithLinksWrapperProps) => {
  const query = collection(db, path);
  const [docs, loading, error] = useCollectionData(query);
  const [person, setPerson] = useState<DocumentData>();
  const [bodyText, setBodyText] = useState<DocumentData>();
  console.log(bodyText);

  useEffect(() => {
    docs?.map((doc) => {
      return (
        doc.name === "person" && setPerson(doc),
        doc.name === "body-text" && setBodyText(doc)
      );
    });
  }, [docs]);

  return (
    <>
      {loading && <p>Loading..</p>}

      {error && <p>Leider ist was schief gelaufen...</p>}

      <div className="person">
        <Headline2>{person?.title}</Headline2>
        <p className="text">{person?.text}</p>
        <span className="img">{person?.img}</span>
      </div>

      <div className="body-text | flow">
        {bodyText?.text.map((text: string, index: number) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </>
  );
};

export default TextWithLinksWrapper;
