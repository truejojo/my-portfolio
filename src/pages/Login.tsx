import { useState, useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useAuth } from "../components/context/AuthProvider";
import { Container } from "../components/helper/Container";
import HeaderElement from "../components/elements/HeaderElement";
import Section from "../components/organisms/Section";
import GameForm from "../components/assets/GameForm";
import LoggingInput from "../components/assets/LoggingInput";
import InputWrapper from "../components/organisms/InputWrapper";
import GameInputButton from "../components/assets/GameInputButton";

const Login = () => {
  const { logIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const inputPlayGameRef = useRef<HTMLInputElement>(null);

  const handleLogIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    logIn(email, password, location.state?.from);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Section sectionName="login">
      <Container>
        <GameForm classNames="bg-primary-900 logging" onSubmit={handleLogIn}>
          <HeaderElement
            title="Anmelden"
            subTitle={location.state?.message && location.state.message}
          />

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
            <GameInputButton value="Anmelden" ref={inputPlayGameRef} />
            <p>
              Noch keinen Account?{" "}
              <Link to="/signup" state={{ from: location.state?.from }}>
                Registrieren
              </Link>
            </p>
          </InputWrapper>
        </GameForm>
      </Container>
    </Section>
  );
};

export default Login;
