import Section from "../../components/organisms/Section";
import { Container } from "../../components/helper/Container";
import HeaderElement from "../../components/elements/HeaderElement";
import Dropdown from "../../components/organisms/Dropdown";
import GameWrapper from "../../components/organisms/GameWrapper";
import GamePlayWrapper from "../../components/organisms/GamePlayWrapper";
import {
  RETENTIVITYS,
  RETENTIVITY_INSTRUCTINS,
  OPEN_STATES,
  TOpenStatesProps
} from "../../utilities/retentivity";
import { useState } from "react";
import useToggle from "../../components/hooks/useToggle";

const Retentivity = () => {
  const GAME_TYPE_STARTER = RETENTIVITY_INSTRUCTINS.messages[0][0];
  const GAME_Name_STARTER = RETENTIVITY_INSTRUCTINS.messages[0][1];
  const GAME_Name_SECOND = RETENTIVITY_INSTRUCTINS.messages[1][1];
  const GAME_Name_THIRD = RETENTIVITY_INSTRUCTINS.messages[2][1];
  const title = RETENTIVITY_INSTRUCTINS.title;
  const [openRow, setOpenRow] = useState<TOpenStatesProps[]>(OPEN_STATES)
  console.log(openRow);

  const [isPlaying, toggleIsPlaying, setIsPlaying] = useToggle({
    initialState: false,
  });
  
  const handleOpen = () => {}
  const handleGameType = () => {}

  return (
    <Section
      sectionName="retentivity"
      classNames="games | text-center clr-secondary-3-300"
    >
      <Container>
        <GameWrapper>
          <HeaderElement
            title="Merkfähigkeit"
            subTitle="Silben, Zahlen oder Null und Einsen womit willst du spielen?"
            classNames=""
            isH1={true}
          />

          {/* <Dropdown
            handleOpen={handleOpen}
            handleGameType={handleGameType}
            gamesArray={RETENTIVITYS}
            instrucionsArray={RETENTIVITY_INSTRUCTINS}
            isPlaying={isPlaying}
            title={title}
            openRow={openRow}
          /> */}
          <GamePlayWrapper>
            here you are...
          </GamePlayWrapper>
        </GameWrapper>
      </Container>
    </Section>
  );
};

export default Retentivity;
