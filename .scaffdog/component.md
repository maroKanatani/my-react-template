---
name: "component"
description: "Generate standard React component."
root: "src"
output: "**/*"
ignore: []
questions:
  name: "enter component name"
---

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```tsx
type Props = {};

export function {{ inputs.name | pascal }}({}: Props) {
  return <></>;
}

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```tsx
import type { Meta, StoryObj } from "@storybook/react";

import { {{ inputs.name | pascal }} } from "./{{ inputs.name | pascal }}";

const meta: Meta<typeof {{ inputs.name | pascal }}> = {
  component: {{ inputs.name | pascal }},
};
export default meta;

type Story = StoryObj<typeof {{ inputs.name | pascal }}>;

export const Primary: Story = {
  // args: {}
};

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.css`

```css
.module {
}
```

# `{{ inputs.name | pascal }}/index.tsx`

```tsx
export { {{ inputs.name | pascal }} } from "./{{ inputs.name | pascal }}";
```
