import { useEffect, useState } from "react";

export function useScrollHeight(
    minHeight: number,
    maxHeight: number,
    ref?: React.Ref<HTMLElement>,
    value?: string,
  ) {
    const { current: node } = ref as any;
    const [height, setHeight] = useState(minHeight);
    useEffect(() => {
      if (node) {
        setHeight(
          value
            ? Math.max(Math.min(node.scrollHeight, maxHeight), minHeight)
            : minHeight
        );
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, minHeight, maxHeight]);
    return height;
  }