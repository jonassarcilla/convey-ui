import type { StoryObj } from '@storybook/react';
import Page from './Page';
declare const meta: {
    title: string;
    component: typeof Page;
    parameters: {
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LoggedOut: Story;
export declare const LoggedIn: Story;
