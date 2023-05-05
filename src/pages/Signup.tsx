import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../components/context/AuthProvider";
import Section from "../components/organisms/Section";
import { Container } from "../components/helper/Container";
import GameForm from "../components/assets/GameForm";
import HeaderElement from "../components/elements/HeaderElement";
import InputWrapper from "../components/organisms/InputWrapper";
import LoggingInput from "../components/assets/LoggingInput";
import GameInputButton from "../components/assets/GameInputButton";

const Signup = () => {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const inputPlayGameRef = useRef<HTMLInputElement>(null);

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signUp(email, password, location.state?.from);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Section sectionName="signup">
      <Container>
        <GameForm classNames="bg-primary-900 logging" onSubmit={handleSignUp}>
          <HeaderElement title="Registrieren" />

          <InputWrapper>
            <LoggingInput
              label="Bitte Email eingeben"
              type="email"
              idNumber="eamil"
              placeholder="Email..."
              value={email}
              ref={inputRef}
              onChange={(e) => setEmail(e.target.value)}
            />
            <LoggingInput
              label="Bitte Passwort eingeben"
              type="password"
              idNumber="password"
              placeholder="Passwort..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <GameInputButton value="Registrieren" ref={inputPlayGameRef} />
            <p>
              Schon einen Account?{" "}
              <Link to="/login" state={{ from: location.state?.from }}>
                Anmelden
              </Link>
            </p>
          </InputWrapper>
        </GameForm>
      </Container>
    </Section>
  );
};

export default Signup;
