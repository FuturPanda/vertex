import { useSession, signIn, signOut } from "next-auth/react";

const NavbarButtonLogin = () => {
  const { data: session } = useSession();
  const handleLogin = () => {
    if (session) {
      signOut();
    } else {
      signIn();
    }
  };
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={handleLogin}>Sign out</button>
        <button onClick={() => console.log(session)}>Session</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={handleLogin}>Sign in</button>
      <button onClick={handleLogin}>Session</button>
    </>
  );
};

export default NavbarButtonLogin;
