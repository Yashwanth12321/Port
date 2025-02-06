import type { MouseEventHandler, ReactNode, RefObject } from "react";
import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";


export interface CoreComponentsProps {
    children: ReactNode;
    classNames?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    id?: string;
    elementRef?: RefObject<HTMLDivElement>;
  }
  export interface INavItem {
    name: string;
    link: string;
    icon: IconProp;
  }

  export interface ISkillListItem {
    title: string;
    items: ISkillItem[];
  }
  export interface ISkillItem {
    title: string;
    level?: SkillLevel;
    icon?: string;
  }
  export enum SkillLevel {
    Expert,
    Intermediate,
    Beginner,
  }
  
  export interface TimelineEntry {
    title: string;
    content: React.ReactNode;
  }
  export interface IExperienceItem {
    designation: string;
    company: string;
    startDate: string;
    endDate?: string;
    isCurrentJob: boolean;
    location: string;
    shortDescription?: string;
    description: string[];
  }
  export interface BulletedTextProps {
    children: ReactNode;
    classNames?: string;
    iconSize?: string | number;
    bulletColor?: string;
  }
  