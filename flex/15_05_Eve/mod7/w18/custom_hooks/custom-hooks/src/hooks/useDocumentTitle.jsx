import { useEffect } from "react"

const DocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title])
};

export default DocumentTitle;