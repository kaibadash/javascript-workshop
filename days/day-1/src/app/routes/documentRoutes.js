import React from "react";

import Extractor from "./utils/Extractor";
import Markdown from "./components/Markdown";

const titleExtractor = new Extractor()
  .addRule(/([^\/]+)\/README\.md$/, (_, title) => title)
  .addRule(/\/docs\/(.+)\.md$/, (_, title) => title);

export default __DOCUMENTS__.map(function({ filename, content }) {
  const title = titleExtractor.execute(filename);

  return {
    title,
    path: `/${title}`,
    component: (_props) => <Markdown content={content} />
  };
});
