
import {
    Accordion as AccordionComponent,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"
import React, { useState, useEffect } from 'react';

export interface AccordionProps {
    /**
     * The title of the accordion header
     */
    title: string;
    /**
     * The content to display inside the accordion body
     */
    content: string;
    /**
     * What header background color to use
     */
    backgroundColor?: string;
    /**
     * What body background color to use
     */
    bodyBackgroundColor?: string;
    /**
     * Whether the accordion should be open initially
     */
    
    initiallyOpen?: boolean;
    /**
     * Whether the accordion should be animated
     */
    Animated?: boolean;
    /**
     * Border radius
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
    /**
     * Whether the accordion should have a divider
     */
    Divider?: boolean;
    /**
     * What divider color to use
     */
    dividerWidth?: 'divide-y' | 'divide-y-2' | 'divide-y-4' | 'divide-y-8';
    /**
     * The width of the divider
     */
    dividerColor?: string;
}

/**
 * Accordion component to show/hide content
 */
export const Accordion = ({ 
    title, 
    content, 
    backgroundColor,
    bodyBackgroundColor,
    Borderless,
    borderColor,
    Rounded = 'rounded-none',
    Animated = true,
    initiallyOpen = false,
    Divider = true,
    dividerColor,
    borderWidth,
    dividerWidth,
}: AccordionProps) => {

 const border = Borderless ? 'border-solid rounded border-2' : '';
 const divider = Divider ? 'divide-y' : '';
 const itemborder = Borderless ? 'border-none' : '';
 const [open, setOpen] = useState<string | undefined>(initiallyOpen ? "item-1" : undefined);
 useEffect(() => {
    if (initiallyOpen) {
      setOpen("item-1");
    }
  }, [initiallyOpen]);
  return (
    <AccordionComponent type="single" collapsible
    value={open} 
    onValueChange={(value) => setOpen(value)}
    className={`${border} ${Rounded} ${borderWidth}`}
    style={{overflow: 'hidden', borderColor: borderColor}}
    >
    
      <AccordionItem value="item-1"

      className={`${Rounded} ${itemborder} ${divider} ${dividerWidth}`}
      style={{borderColor: dividerColor}}
      >
        <AccordionTrigger 
        style={{ backgroundColor }} 
        >
          {title}
        </AccordionTrigger>
        <AccordionContent 
        style={{ backgroundColor: bodyBackgroundColor, borderColor: dividerColor}} 
        animated={Animated}
        >
          {content}
        </AccordionContent>
      </AccordionItem>
    </AccordionComponent>
  );
};
