"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuesPage = () => {
  return (
    <div className="max-w-xl space-y-3">
      {/* <TextField.Root> */}
      <TextField.Root placeholder="Title" />
      <TextArea size="3" placeholder="Description" />
      <Button>Submit New Issue</Button>

      {/* </TextField.Root> */}
    </div>
  );
};

export default NewIssuesPage;
