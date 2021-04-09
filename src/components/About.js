import profilePic from "../images/profilePic.png";

export default function About() {
  return (
    <div>
      <img className="profilePicture" src={profilePic} alt="Profile" />
      <h1>Hello, I'm Hugh..</h1>
      <p>
        Im currently learning to code with Neue Fische and today I learnt about
        Routers, loving this so far!
      </p>
    </div>
  );
}
