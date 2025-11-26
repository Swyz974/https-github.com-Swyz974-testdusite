import React from 'react'; // Fix: Import React to resolve namespace 'React'

export enum BodyPart {
  NECK = 'Nuque',
  BACK = 'Dos',
  ARMS = 'Bras',
  GLUTES = 'Fessiers',
  KNEES = 'Genoux'
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export type ViewMode = 'enterprise' | 'individual' | 'contact' | 'quote' | 'legal';