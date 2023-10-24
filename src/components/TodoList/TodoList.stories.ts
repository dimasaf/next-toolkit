import { Meta, StoryObj } from "@storybook/react";
import TodoList from './TodoList'

const meta = {
    title: 'Components/TodoList',
    component: TodoList,
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
} satisfies Meta<typeof TodoList>;

export default meta;
type Story = StoryObj<typeof TodoList>;

export const CardList: Story = {
    args: {
        todo: {
            id: 2,
            text: "testing"
        }
    }
}