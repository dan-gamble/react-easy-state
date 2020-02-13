import React, { useRef } from "react";
import { Textarea, TextareaProps } from "baseui/textarea";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";
import { Select } from "baseui/select";
import { view } from "react-easy-state";
import { Input } from "baseui/input";

import { Issue, Priorities } from "../types";
import { useScrollHeight } from "../utils/hooks";

const priorities = [
  {
    label: "Very high",
    id: Priorities.VERY_HIGH
  },
  {
    label: "High",
    id: Priorities.HIGH
  },
  {
    label: "Medium",
    id: Priorities.MEDIUM
  },
  {
    label: "Low",
    id: Priorities.LOW
  }
];

const TextAreaWithAutoscaling: React.FC<TextareaProps> = (props, children) => {
  const textArea = useRef<HTMLElement>(null);
  const scrollHeight = useScrollHeight(200, 600, textArea, props.value);

  return (
    <Textarea
      overrides={{
        Input: {
          style: {
            height: `${scrollHeight}px`
          }
        }
      }}
      inputRef={textArea as any}
      {...props}
    >
      {children}
    </Textarea>
  );
};

export const ProblemStatement: React.FC<{
  item: Issue;
  onRemove: () => void;
}> = view(({ item, onRemove }) => {
  return (
    <Card>
      <StyledBody>
        <Input
          placeholder="Problem"
          value={item.problem}
          onChange={val => {
            item.problem = val.currentTarget.value;
          }}
        />
        <Input
          placeholder="Impacts"
          value={item.impacts}
          onChange={val => {
            item.impacts = val.currentTarget.value;
          }}
        />
        <Select
          placeholder="Priority"
          options={priorities}
          multi={false}
          value={
            item.priority !== undefined ? [{ id: item.priority }] : undefined
          }
          onChange={p => {
            item.priority = p.option?.id as Priorities;
          }}
        />
        <TextAreaWithAutoscaling
          placeholder="Description"
          value={item.description}
          onChange={(val: any) => {
            item.description = val.currentTarget.value;
          }}
        />
        <TextAreaWithAutoscaling
          placeholder="Proposed solution"
          value={item.proposedSolution}
          onChange={val => {
            item.proposedSolution = val.currentTarget.value;
          }}
        />
      </StyledBody>
      <StyledAction>
        <Button onClick={onRemove}>Remove</Button>
      </StyledAction>
    </Card>
  );
});
