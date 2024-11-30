import React, { useRef, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Import the Quill snow theme

const WysiwygEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    // Initialize Quill editor
    quillRef.current = new Quill(editorRef.current, {
      theme: "snow", // Use the 'snow' theme
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image", "blockquote"],
          ["clean"], // Remove formatting
        ],
      },
    });

    // Handle changes
    quillRef.current.on("text-change", () => {
      const html = editorRef.current.querySelector(".ql-editor").innerHTML;
      onChange(html); // Pass the content to the parent component
    });

    // Set the initial value
    if (value) {
      quillRef.current.clipboard.dangerouslyPasteHTML(value);
    }

    return () => {
      quillRef.current.off("text-change");
    };
  }, [value, onChange]);

  return <div ref={editorRef} />;
};

export default WysiwygEditor;
