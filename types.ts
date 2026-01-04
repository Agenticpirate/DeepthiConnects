import React from 'react';

export interface ExperienceItem {
  role: string;
  company: string;
  period?: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
}

export interface ServiceItem {
  title: string;
  features: string[];
  microLine: string;
  icon?: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SkillItem {
  name: string;
  percentage: number;
}