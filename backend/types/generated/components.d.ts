import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsFieldDropdown extends Schema.Component {
  collectionName: 'components_components_field_dropdowns';
  info: {
    displayName: 'fieldDropdown';
    description: '';
  };
  attributes: {
    titel: Attribute.String;
  };
}

export interface ComponentsField extends Schema.Component {
  collectionName: 'components_components_fields';
  info: {
    displayName: 'field';
    description: '';
  };
  attributes: {
    naam: Attribute.String;
    type: Attribute.String;
    verplicht: Attribute.Boolean;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'link';
    description: '';
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
    afbeelding: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    beschrijving: Attribute.Blocks;
  };
}

export interface LayoutFooterCta extends Schema.Component {
  collectionName: 'components_layout_footer_ctas';
  info: {
    displayName: 'FooterCTA';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface LayoutForm extends Schema.Component {
  collectionName: 'components_layout_forms';
  info: {
    displayName: 'Form';
    description: '';
  };
  attributes: {
    titel: Attribute.String;
    field: Attribute.Component<'components.field', true>;
    dropdown: Attribute.Component<'components.field-dropdown', true>;
    dropdownVerplicht: Attribute.Boolean;
    dropdownDefault: Attribute.String;
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
    logoImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero section';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    link: Attribute.Component<'components.link'>;
  };
}

export interface LayoutHomeIntro extends Schema.Component {
  collectionName: 'components_layout_home_intros';
  info: {
    displayName: 'Home Intro';
    description: '';
  };
  attributes: {
    LogoAnimation: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LayoutIntroImageSection extends Schema.Component {
  collectionName: 'components_layout_intro_image_sections';
  info: {
    displayName: 'Image section';
    description: '';
  };
  attributes: {
    afbeelding: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tekst: Attribute.Text;
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

export interface LayoutTextPage extends Schema.Component {
  collectionName: 'components_layout_text_pages';
  info: {
    displayName: 'Text page';
    description: '';
  };
  attributes: {
    titel: Attribute.String;
    tekst: Attribute.Blocks;
    download: Attribute.Component<'components.link'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.field-dropdown': ComponentsFieldDropdown;
      'components.field': ComponentsField;
      'components.link': ComponentsLink;
      'components.stappen': ComponentsStappen;
      'layout.footer-cta': LayoutFooterCta;
      'layout.footer': LayoutFooter;
      'layout.form': LayoutForm;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
      'layout.home-intro': LayoutHomeIntro;
      'layout.intro-image-section': LayoutIntroImageSection;
      'layout.intro-section': LayoutIntroSection;
      'layout.stappen-section': LayoutStappenSection;
      'layout.text-page': LayoutTextPage;
    }
  }
}
