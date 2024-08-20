import React from 'react';
import './button.css';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Whether the button should be borderless
   */
  Rounded?: 'rounded-none' | 'rounded' | 'rounded-md' | 'rounded-xl' | 'rounded-full';
  /**
   * Whether the accordion should be borderless
   */
  Borderless?: boolean;
  /**
   * Whether the accordion should have a divider
   */
  borderWidth?: 'border' | 'border-2' | 'border-4' | 'border-8';
  /**
   * The width of the border
   */
  borderColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  Borderless = true,
  borderWidth = 'border-2',
  borderColor = 'black',
  Rounded = 'rounded-full',
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const border = Borderless ? 'border-solid rounded border-2' : '';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size} ${border} ${Rounded} ${borderWidth}`, mode].join(' ')}
      style={{ backgroundColor, borderColor: borderColor }}
      {...props}
    >
      {label}
    </button>
  );
};
