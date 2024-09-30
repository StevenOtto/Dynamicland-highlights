// Styles
import "./tailwind.output.css";
import "./fonts.css";
import React, { useState } from "react";

const topics = [
  {
    id: "intro",
    title: "Website",
    url: "https://dynamicland.org",
    subtopics: [],
  },
  {
    id: "realtalk",
    title: "Realtalk OS",
    url: "https://www.youtube.com/embed/uI7J3II59lc?si=XlYjJmZB8NbCsqs5&amp;start=1885",
    subtopics: [
      {
        id: "dynamicland-principles",
        title: "Motivatie",
        url: "https://www.youtube.com/embed/cErKuEHWCpM?si=vtrCIrBU1yFP6aNP&amp;start=302",
      },
      {
        id: "realtalk-what",
        title: "Hoe werkt het?",
        url: "https://www.youtube.com/embed/cErKuEHWCpM?si=zUnc56T3xiewpH_P&amp;start=735",
      },
      {
        id: "realtalk-how",
        title: "Programma's schrijven",
        url: "https://www.youtube.com/embed/cErKuEHWCpM?si=RJZn2etOJCsGIqhP&amp;start=1666",
      },
    ],
  },
  {
    id: "demo",
    title: "Demo",
    url: "https://www.youtube.com/embed/5Q9r-AEzRMA?si=EZG_WFLEqPgIlHH9&amp;start=12",
    subtopics: [],
  },
  {
    id: "exammples",
    title: "Voorbeelden",
    url: "#",
    subtopics: [
      {
        id: "game-design",
        title: "Game design",
        url: "https://www.youtube.com/embed/eJm44LJDU44?si=FB1WvjQOp8ey6tAO&amp;start=1517",
      },
      {
        id: "bookcase",
        title: "Interactieve boekenkast",
        url: "https://www.youtube.com/embed/uI7J3II59lc?si=2kfAND6fQjvSYMBD&amp;start=360",
      },
      {
        id: "cellular-playgrounds",
        title: "Wetenschap: Cellular playgrounds",
        url: "https://www.youtube.com/embed/nT4E5HkpLjo?si=DlscFNK_CFVzqWla&amp;start=387",
      },
    ],
  },
  {
    id: "research",
    title: "Research",
    url: "https://dynamicland.org/2017/Zine/",
    subtopics: [
      {
        id: "dynamicland-concept",
        title: "Research agenda & visie (2014)",
        url: "https://dynamicland.org/2014/CDG_Research_Agenda_poster.pdf",
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
      className={`text-left py-1 px-2 rounded ${
        selectedTopic.id === topic.id
          ? "bg-purple text-black"
          : "text-white hover:bg-black"
      } ${
        isSubtopic
          ? "ml-4 text-sm subtopic-button"
          : "text-md font-semibold uppercase "
      }`}
    >
      {topic.title}
    </button>
  );
};

const DynamiclandPresentation = () => {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <div className="flex h-screen">
      <div className="w-1/4 sidebar p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-2 text-purple-norday uppercase">
          Dynamicland highlights
        </h2>
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
        <iframe
          src={selectedTopic.url}
          height={700}
          title={selectedTopic.title}
          className="w-full h-full border-2 border-gray-300 rounded"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DynamiclandPresentation;
