import Project from "../Project";
import diceRollingLogo from "../../images/dice-rolling-logo.png"

const description = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec magna felis. Donec nec felis finibus libero vulputate laoreet. Morbi vulputate neque a tincidunt tristique. Cras semper metus sollicitudin, dictum sem et, finibus metus. Vestibulum accumsan nisi eu gravida rutrum. Vestibulum quis risus quis arcu lobortis venenatis. Nunc nulla lorem, posuere ac eros nec, consectetur consectetur odio. Morbi odio mauris, pellentesque quis blandit non, cursus non ligula. Sed sapien odio, rhoncus vehicula egestas vitae, ultrices a lectus.

Phasellus tempor sollicitudin neque ut bibendum. Nullam euismod diam erat, vitae suscipit nisl efficitur ac. Integer placerat cursus mauris vestibulum facilisis. Quisque malesuada lacus est, in luctus arcu euismod eget. Pellentesque interdum purus ac diam ultricies, ac faucibus neque molestie. Donec fringilla vel dui id malesuada. Donec vitae lectus vitae ante mollis consectetur. Proin sodales porttitor tellus eu euismod. Integer non mollis leo, sit amet posuere erat. Aliquam erat volutpat. Curabitur tristique finibus diam, non pellentesque massa ultrices et. Etiam sit amet nisl lorem.

Nunc nec ullamcorper felis. Nullam nec quam rhoncus, accumsan dui id, tincidunt urna. Aenean ullamcorper sem sit amet maximus sollicitudin. Curabitur porttitor vehicula dolor id ultricies. Aenean efficitur urna lacinia rhoncus ornare. Phasellus in ante et tortor elementum gravida. Nullam in erat rutrum, semper eros quis, ullamcorper dolor. Aenean ultricies eros nec metus fermentum, ornare sagittis odio laoreet. Integer tincidunt neque vitae risus ultrices, vel consequat libero mattis.

Nulla facilisi. Morbi in nibh quis ante feugiat molestie ut in enim. Nullam luctus eros ut augue tempus commodo eget sit amet quam. Etiam non sodales lectus, quis ultricies quam. Sed commodo commodo malesuada. Suspendisse id justo et odio pulvinar tempus. Proin vel dictum lectus, quis dapibus nisi. Pellentesque lacinia ornare viverra. Vestibulum purus urna, pharetra eu metus tempus, maximus facilisis ipsum. Donec felis justo, venenatis ut consequat vitae, sollicitudin ac quam. Vestibulum vitae mattis quam. Aliquam erat volutpat. Quisque maximus leo egestas massa posuere, eget tempus ligula gravida. Nunc tincidunt tellus metus, eu mollis libero pulvinar ac. Vivamus est lectus, bibendum non ullamcorper id, porttitor id dolor.`;

export default function Flagship() {
  return (
    <Project
      projectName={"Dice Rolling System"}
      projectImage={diceRollingLogo}
      projectStack={["HTML", "CSS", "JavaScript"]}
      projectDescription={description}
      projectLink={"https://lucygossip.github.io/wol-dice-rolling-system/index.html"}
      projectRepo={"https://github.com/lucygossip/wol-dice-rolling-system"}
      flagship={true}
    />
  );
}
