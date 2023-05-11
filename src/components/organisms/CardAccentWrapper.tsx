import { collection } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../firebase/config";
import CardAccent from "../elements/CardAccent";

type TCardAccentWrapperProps = {
  path: string;
};

const CardAccentWrapper = ({ path }: TCardAccentWrapperProps) => {
  const query = collection(db, path);
  const [docs, loading, error] = useCollectionData(query);

  return (
    <>
      {loading && <p>Loading..</p>}

      {error && <p>Leider ist was schief gelaufen...</p>}

      {docs?.map((doc, index) => (
        <CardAccent
          key={doc.id}
          // {...cardAccent}
          title={doc.title}
          text={doc.text}
          linkTo={doc.linkTo}
          titleColor={`clr-secondary-${index + 1}-500`}
          dataType={`index-${index + 1}`}
        />
      ))}
    </>
  );
};

export default CardAccentWrapper;
