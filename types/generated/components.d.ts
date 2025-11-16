import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsDiscoverProperties extends Struct.ComponentSchema {
  collectionName: 'components_sections_discover_properties';
  info: {
    displayName: 'Discover properties';
  };
  attributes: {
    background: Schema.Attribute.Media<'images' | 'files'>;
    button_all_properties: Schema.Attribute.Component<'ui.button', false>;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFeaturedPreview extends Struct.ComponentSchema {
  collectionName: 'components_sections_featured_previews';
  info: {
    displayName: 'Featured preview';
  };
  attributes: {
    button_featured: Schema.Attribute.Component<'ui.button', false>;
    featured_description: Schema.Attribute.Blocks;
    featured_headline: Schema.Attribute.Blocks;
    properties: Schema.Attribute.Relation<
      'oneToMany',
      'api::property.property'
    >;
  };
}

export interface SectionsOwnerPreview extends Struct.ComponentSchema {
  collectionName: 'components_sections_owner_previews';
  info: {
    displayName: 'Owner preview';
  };
  attributes: {
    background: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
    button_learn_more: Schema.Attribute.Component<'ui.button', false>;
    description: Schema.Attribute.Blocks;
    first_name: Schema.Attribute.String;
    headline: Schema.Attribute.String;
    images: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
    last_name: Schema.Attribute.String;
  };
}

export interface SectionsTestimonialPreview extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonial_previews';
  info: {
    displayName: 'Testimonial Preview';
  };
  attributes: {
    background: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    headline: Schema.Attribute.String;
    testimonial: Schema.Attribute.Component<'ui.testimonial', true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNavigationLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_links';
  info: {
    displayName: 'Navigation link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'info', 'warning', 'danger']
    >;
  };
}

export interface UiTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_ui_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.discover-properties': SectionsDiscoverProperties;
      'sections.featured-preview': SectionsFeaturedPreview;
      'sections.owner-preview': SectionsOwnerPreview;
      'sections.testimonial-preview': SectionsTestimonialPreview;
      'shared.media': SharedMedia;
      'shared.navigation-link': SharedNavigationLink;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'ui.button': UiButton;
      'ui.testimonial': UiTestimonial;
    }
  }
}
