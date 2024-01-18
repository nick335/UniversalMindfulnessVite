import useWindowDimensions from "../../hooks/UseWindowDimensions";
import { splitArray } from "../../utilsFunction/splitArray";
import AboutSwitchingAni from "./AboutSwitchingAni";

const AboutGallery = () => {
  const { width } = useWindowDimensions()
  const stringArray= [
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Ivy",
    "Jackfruit",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tomato",
    "Ugli fruit",
    "Vanilla",
    "Watermelon",
    "Xigua",
    "Yam",
    "Zucchini",
    "Apricot",
    "Blueberry",
    "Cantaloupe",
    "Dragonfruit",
  ];
  const result = width < 1024  ? splitArray(stringArray, 6) : splitArray(stringArray, 5)
  console.log(result)
  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 w-full overflow-x-hidden">
      {
        result.map((row, idx) => {
          const interval = 1000 * (idx + 5)
          return <AboutSwitchingAni interval={interval} key={idx} row={row} rowIndex={idx} />
        })
      }
    </div>
  )
}

export default AboutGallery
