// Styles
import "./tailwind.output.css";
import React, { useState } from "react";

const topics = [
  {
    id: "intro",
    title: "Introduction",
    url: "https://dynamicland.org/",
    subtopics: [
      {
        id: "intro-overview",
        title: "Brief overview of Dynamicland and Realtalk",
        url: "https://dynamicland.org/about/",
      },
      {
        id: "intro-relevance",
        title: "Relevance to design and technology",
        url: "https://dynamicland.org/vision/",
      },
    ],
  },
  {
    id: "dynamicland",
    title: "Dynamicland",
    url: "https://dynamicland.org/about/",
    subtopics: [
      {
        id: "dynamicland-concept",
        title: "Concept and vision",
        url: "https://dynamicland.org/vision/",
      },
      {
        id: "dynamicland-principles",
        title: "Key principles",
        url: "https://dynamicland.org/principles/",
      },
      {
        id: "dynamicland-examples",
        title: "Examples of Dynamicland projects",
        url: "https://dynamicland.org/projects/",
      },
    ],
  },
  {
    id: "realtalk",
    title: "Realtalk",
    url: "https://www.youtube.com/embed/RhL34DP-2Ns",
    subtopics: [
      {
        id: "realtalk-what",
        title: "What is Realtalk?",
        url: "https://www.youtube.com/embed/RhL34DP-2Ns?start=60",
      },
      {
        id: "realtalk-differences",
        title: "How it differs from traditional programming",
        url: "https://www.youtube.com/embed/RhL34DP-2Ns?start=180",
      },
      {
        id: "realtalk-role",
        title: "Its role in Dynamicland's ecosystem",
        url: "https://www.youtube.com/embed/RhL34DP-2Ns?start=300",
      },
    ],
  },
  {
    id: "implications",
    title: "Implications for Design",
    url: "https://medium.com/@nolac/reflections-on-dynamicland-65158b06196",
    subtopics: [
      {
        id: "implications-ui",
        title: "New ways of thinking about user interfaces",
        url: "https://medium.com/@nolac/reflections-on-dynamicland-65158b06196#:~:text=New%20ways%20of%20thinking",
      },
      {
        id: "implications-bridge",
        title: "Bridging digital and physical worlds",
        url: "https://medium.com/@nolac/reflections-on-dynamicland-65158b06196#:~:text=Bridging%20digital%20and%20physical",
      },
      {
        id: "implications-collaborative",
        title: "Collaborative design possibilities",
        url: "https://medium.com/@nolac/reflections-on-dynamicland-65158b06196#:~:text=Collaborative%20design%20possibilities",
      },
    ],
  },
  {
    id: "applications",
    title: "Potential Applications",
    url: "https://www.youtube.com/embed/fsF7enQY8uI",
    subtopics: [
      {
        id: "applications-spaces",
        title: "Interactive spaces",
        url: "https://www.youtube.com/embed/fsF7enQY8uI?start=60",
      },
      {
        id: "applications-education",
        title: "Education and learning environments",
        url: "https://www.youtube.com/embed/fsF7enQY8uI?start=180",
      },
      {
        id: "applications-prototyping",
        title: "Prototyping and ideation tools",
        url: "https://www.youtube.com/embed/fsF7enQY8uI?start=300",
      },
    ],
  },
  {
    id: "challenges",
    title: "Challenges and Limitations",
    url: "https://breadboard.me/how-we-can-move-beyond-dynamicland/",
    subtopics: [
      {
        id: "challenges-technical",
        title: "Technical hurdles",
        url: "https://breadboard.me/how-we-can-move-beyond-dynamicland/#technical-hurdles",
      },
      {
        id: "challenges-adoption",
        title: "Adoption and scaling issues",
        url: "https://breadboard.me/how-we-can-move-beyond-dynamicland/#adoption-and-scaling",
      },
    ],
  },
  {
    id: "future",
    title: "Future Outlook",
    url: "https://www.youtube.com/embed/Njvf27R3XBU",
    subtopics: [
      {
        id: "future-impact",
        title: "Potential impact on design industry",
        url: "https://www.youtube.com/embed/Njvf27R3XBU?start=60",
      },
      {
        id: "future-influence",
        title: "Influence on future design tools",
        url: "https://www.youtube.com/embed/Njvf27R3XBU?start=180",
      },
    ],
  },
  {
    id: "conclusion",
    title: "Conclusion",
    url: "https://dynamicland.org/get-involved/",
    subtopics: [
      {
        id: "conclusion-takeaways",
        title: "Key takeaways for designers",
        url: "https://dynamicland.org/get-involved/#takeaways",
      },
      {
        id: "conclusion-qa",
        title: "Q&A session",
        url: "https://dynamicland.org/get-involved/#faq",
      },
    ],
  },
];

const TopicItem = ({
  topic,
  selectedTopic,
  setSelectedTopic,
  isSubtopic = false,
}) => {
  return (
    <button
      onClick={() => setSelectedTopic(topic)}
      className={`w-full text-left py-1 px-2 rounded text-sm ${
        selectedTopic.id === topic.id
          ? "bg-blue-500 text-white"
          : "hover:bg-gray-200"
      } ${isSubtopic ? "ml-4" : "font-semibold"}`}
    >
      {topic.title}
    </button>
  );
};

const DynamiclandPresentation = () => {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
        <h2 className="text-lg font-bold mb-2">Dynamicland Presentation</h2>
        <div className="space-y-1">
          {topics.map((topic) => (
            <div key={topic.id}>
              <TopicItem
                topic={topic}
                selectedTopic={selectedTopic}
                setSelectedTopic={setSelectedTopic}
              />
              {topic.subtopics.map((subtopic) => (
                <TopicItem
                  key={subtopic.id}
                  topic={subtopic}
                  selectedTopic={selectedTopic}
                  setSelectedTopic={setSelectedTopic}
                  isSubtopic
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-3/4 p-4">
        <h3 className="text-xl font-bold mb-4">{selectedTopic.title}</h3>
        <iframe
          src={selectedTopic.url}
          height={700}
          title={selectedTopic.title}
          className="w-full h-5/6 border-2 border-gray-300 rounded"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DynamiclandPresentation;
