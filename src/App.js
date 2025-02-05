import "./styles.css";
import { useState } from "react";

function TextExpander({ children, expandButtonText, collapseButtonText }) {
  const text = children;
  const [readMore, setReadMore] = useState(true);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div>
      <p>
        {readMore ? text.slice(0, 100) : text}
        <span
          onClick={toggleReadMore}
          style={{
            lineHeight: "1",
            margin: "0",
            color: "red",
            fontSize: "${size / 1.5}px",
            cursor: "pointer",
          }}
        >
          {readMore ? expandButtonText : collapseButtonText}
        </span>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <TextExpander
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
      >
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

// eslint-disable-next-line no-lone-blocks

/**oKAY SO IF i understand the task above correctly, the task
 * is about hiding portions of a text and creating a colored
 * or underlined section that users can click on to read
 * more or less about the paragraph. it sounds very easy
 * but i swear to god, coming up with the logic seems hard.
 * i think first we have to split the paragraph, say
 *   okay
 * we only want to show 10 words, and hide the rest.
 */
