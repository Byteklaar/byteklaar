import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    image: Attribute.Media;
    link: Attribute.Component<'components.link'>;
  };
}

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
      'components.link': ComponentsLink;
      'layout.hero-section': LayoutHeroSection;
      'stappen.stappen': StappenStappen;
    }
  }
}
