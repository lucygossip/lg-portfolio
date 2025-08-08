import Project from "../Project";
import diceRollingLogo from "../../images/dice-rolling-logo.png";

function FlagshipInformation() {
  return (
    <>
    <style type="text/css">
    {`
        .flagship-link {
            color: #cdf;
            font-weight: 700;
        }
        .flagship-link:hover {
            color: #fff;
        }
        .flagship-ul {
            background: navy;
            border-radius: 15px;
            margin: 0 auto;
            max-width: 50ch;
            padding: 1rem 2rem;
        }
        .flagship-ul li {
            margin-bottom: 10px;
        }
    `}
    </style>
      <p>
        This project is a third party app created for use on a website called{" "}
        <a className="flagship-link" target="_blank" href="https://worldoflegend.eu">
          World of Legends
        </a>
        {" "}(WoL).
      </p>
      <p>
        A key activity on WoL is player vs player duelling, in a text-based
        format that utilises dice rolling to decide the outcomes of turns. To
        help facilitate this, I designed a tool to perform a variety of
        calculations to speed up the moderation process.
      </p>
      <p>
        This tool helps both users and moderators to understand what's happening.
        A user can select their rank, weapons, armour, spells, and so on, to see 
        the potential outcomes of their intended move. Moderators can use the 
        tools to speed up calculations, removing the need to trawl through
        numerous spreadsheets.
      </p>
      <p>This third party app includes:</p>
      <ul className="flagship-ul">
        <li>General rules, including basic stats for each rank, and acceptable weapon and armour loadouts</li>
        <li>A tool that displays weapons, their stats and effects, and potential damage outcomes for different ranks</li>
        <li>A tool that displays spells, their chance of success, and potential damage outcomes</li>
        <li>A list of statuses and Divine Favours, which provide additional effects</li>
        <li>(Coming Soon) Information on the use of animals in a duel.</li>
      </ul>
      <h4>Key Features:</h4>
      <ul>
        <li>
            Mobile responsive
        </li>
        <li>Toggleable dark mode</li>
        <li>Vanilla JavaScript</li>
        <li>Interactive</li>
      </ul>
    </>
  );
}

export default function Flagship() {
  return (
    <Project
      projectName={"Dice Rolling System"}
      projectImage={diceRollingLogo}
      projectStack={["HTML", "CSS", "JavaScript"]}
      projectDescription={<FlagshipInformation />}
      projectLink={
        "https://lucygossip.github.io/wol-dice-rolling-system/index.html"
      }
      projectRepo={"https://github.com/lucygossip/wol-dice-rolling-system"}
      flagship={true}
    />
  );
}
