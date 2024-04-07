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

export interface ComponentsStappen extends Schema.Component {
  collectionName: 'components_stappen_stappens';
  info: {
    displayName: 'stap';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface LayoutFooterCta extends Schema.Component {
  collectionName: 'components_layout_footer_ctas';
  info: {
    displayName: 'FooterCTA';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    titel: Attribute.String;
    link: Attribute.Component<'components.link'>;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    socialLink: Attribute.Component<'components.link', true>;
    menuLink: Attribute.Component<'components.link', true>;
    mail: Attribute.Component<'components.link'>;
    telefoon: Attribute.Component<'components.link'>;
    algemeneVoorwaarden: Attribute.Component<'components.link'>;
    privacyBeleid: Attribute.Component<'components.link'>;
    adres: Attribute.Component<'components.link'>;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    menuLink: Attribute.Component<'components.link', true>;
    logoImage: Attribute.Media;
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

export interface LayoutIntroSection extends Schema.Component {
  collectionName: 'components_components_intro_sections';
  info: {
    displayName: 'Intro Section';
    description: '';
  };
  attributes: {
    titel: Attribute.String;
    beschrijving: Attribute.Blocks;
  };
}

export interface LayoutStappenSection extends Schema.Component {
  collectionName: 'components_layout_stappen_sections';
  info: {
    displayName: 'Stappen Section';
    description: '';
  };
  attributes: {
    titel: Attribute.String;
    beschrijving: Attribute.Text;
    stap: Attribute.Component<'components.stappen', true>;
    link: Attribute.Component<'components.link'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.link': ComponentsLink;
      'components.stappen': ComponentsStappen;
      'layout.footer-cta': LayoutFooterCta;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
      'layout.intro-section': LayoutIntroSection;
      'layout.stappen-section': LayoutStappenSection;
    }
  }
}
