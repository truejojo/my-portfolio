import { collection } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../firebase/config";
import Card from "../elements/Card";

type TCardWrapperProps = {
  path: string;
  bgName?: string;
};

const CardWrapper = ({ path, bgName = "" }: TCardWrapperProps) => {
  const query = collection(db, path);
  const [docs, loading, error] = useCollectionData(query);

  return (
    <>
      {loading && <p>Loading..</p>}

      {error && <p>Leider ist was schief gelaufen...</p>}

      {docs?.map((doc) => (
        <Card
          key={doc?.id}
          title={doc?.title}
          items={doc?.items}
          bgName={bgName}
        />
      ))}
    </>
  );
};

export default CardWrapper;
