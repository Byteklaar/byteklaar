import type { Schema, Attribute } from '@strapi/strapi';

export interface StappenStappen extends Schema.Component {
  collectionName: 'components_stappen_stappens';
  info: {
    displayName: 'stappen';
    icon: 'bulletList';
  };
  attributes: {
    stap_title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'stappen.stappen': StappenStappen;
    }
  }
}
