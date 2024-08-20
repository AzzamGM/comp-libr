import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta = {
  title: 'Example/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    bodyBackgroundColor: { control: 'color' },
    initiallyOpen: { control: 'boolean' },
    Borderless: { control: 'boolean'},
    borderColor: { control: 'color'},
    Divider: { control: 'boolean'},
    dividerColor: { control: 'color'},
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClosedByDefault: Story = {
  args: {
    title: 'Accordion Header',
    content: 'Accordion Content',
    initiallyOpen: false,
  },
};

export const OpenByDefault: Story = {
  args: {
    title: 'Accordion Header',
    content: 'Accordion Content',
    initiallyOpen: true,
  },
};

export const CustomColors: Story = {
  args: {
    title: 'Custom Colors Header',
    content: 'Custom Colors Content',
    initiallyOpen: false,
    backgroundColor: '#1ea7fd', 
    bodyBackgroundColor: '#f0f0f0', 
    Borderless: true,
  },
};
