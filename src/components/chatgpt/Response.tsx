import React from "react";
import { Button } from "react-bootstrap";

interface ResponseProps {
  responseContent: string;
  setResponseContent: (message: string) => void;
}

function Response({ responseContent, setResponseContent }: ResponseProps) {
  return (
    <>
      <p>{responseContent}</p>
      <Button
        onClick={() => {
          setResponseContent("");
        }}
        disabled={responseContent ? false : true}
        size="sm"
        variant="primary"
        type="submit"
      >
        Ask again
      </Button>
    </>
  );
}

export default Response;
