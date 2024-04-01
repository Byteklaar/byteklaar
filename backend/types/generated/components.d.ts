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

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    logoTekst: Attribute.Component<'components.link'>;
    socialLink: Attribute.Component<'components.link', true>;
    menuLink: Attribute.Component<'components.link', true>;
    mail: Attribute.Component<'components.link'>;
    telefoon: Attribute.Component<'components.link'>;
    adres: Attribute.Component<'components.link'>;
    algemeneVoorwaarden: Attribute.Component<'components.link'>;
    privacyBeleid: Attribute.Component<'components.link'>;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    logoTekst: Attribute.Component<'components.link', true>;
    menuLink: Attribute.Component<'components.link', true>;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero section';
    description: '';
  };
  attributes: {
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
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
      'stappen.stappen': StappenStappen;
    }
  }
}
