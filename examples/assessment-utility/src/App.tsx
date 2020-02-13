import React from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { Grid, Cell, BEHAVIOR } from "baseui/layout-grid";
import { Input } from "baseui/input";
import { store, view } from "react-easy-state";
import { Header } from "./components/Header";
import { ProblemStatement } from "./components/ProblemStatement";
import { Issue } from "./types";
import { Button } from "baseui/button";

export type AssessmentForm = {
  companyName: string;
  items: Issue[];
};

const engine = new Styletron();

export const Application = view(() => {
  const assessmentForm = store<AssessmentForm>({
    companyName: "",
    items: [new Issue()]
  });

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Header />
        <Grid behavior={BEHAVIOR.fluid}>
          <Cell span={12}>
            <Input
              placeholder="Company name"
              value={assessmentForm.companyName}
              onChange={val => {
                assessmentForm.companyName = val.currentTarget.value;
              }}
            />
            {assessmentForm.items.map((assessmentItem, index) => (
              <ProblemStatement
                key={index}
                item={assessmentItem}
                onRemove={() => assessmentForm.items.splice(index, 1)}
              />
            ))}
            <Button
              overrides={{BaseButton: { style: {width: "100%"}}}}
              onClick={() => {
                assessmentForm.items.push(new Issue());
              }}
            >
              Add
            </Button>
          </Cell>
        </Grid>
      </BaseProvider>
    </StyletronProvider>
  );
});
