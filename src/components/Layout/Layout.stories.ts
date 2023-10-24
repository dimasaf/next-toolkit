import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import { Layout } from "./Layout";

const meta = {
    title: 'Layout',
    component: Layout,
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const loginButton = await canvas.getByRole('button', {
          name: /Log in/i,
        });
        await userEvent.click(loginButton);
      },
}