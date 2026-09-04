import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsContactPreview extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_previews';
  info: {
    displayName: 'Contact Preview';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

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

export interface SectionsLegacyPreview extends Struct.ComponentSchema {
  collectionName: 'components_sections_legacy_previews';
  info: {
    displayName: 'Legacy Preview';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    features: Schema.Attribute.Component<'ui.service-card', true>;
    image: Schema.Attribute.Media<'images'>;
    stat_label: Schema.Attribute.String;
    stat_number: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface SectionsServicesPreview extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_previews';
  info: {
    displayName: 'Services preview';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    service_card: Schema.Attribute.Component<'ui.service-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsServicesType extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_types';
  info: {
    displayName: 'Services Type';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images' | 'videos', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    features: Schema.Attribute.Component<'ui.icon-with-text', true>;
    icon: Schema.Attribute.Component<'ui.icons', false>;
    image_alignment: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    title: Schema.Attribute.String;
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

export interface SharedFooterCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_cta_s';
  info: {
    displayName: 'Footer CTA ';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images' | 'videos'>;
    button: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images' | 'videos'>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface SharedSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_medias';
  info: {
    displayName: 'Social Media';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiAmenities extends Struct.ComponentSchema {
  collectionName: 'components_ui_amenities';
  info: {
    displayName: 'Amenities';
  };
  attributes: {
    name: Schema.Attribute.String;
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

export interface UiIconWithText extends Struct.ComponentSchema {
  collectionName: 'components_ui_icon_with_texts';
  info: {
    displayName: 'Icon with Text';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Component<'ui.icons', false>;
  };
}

export interface UiIcons extends Struct.ComponentSchema {
  collectionName: 'components_ui_icons';
  info: {
    displayName: 'Icons';
  };
  attributes: {
    code: Schema.Attribute.Enumeration<
      [
        'Accessibility',
        'Activity',
        'AirVent',
        'Armchair',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowUpDown',
        'Award',
        'BadgeCheck',
        'BadgeDollarSign',
        'Banknote',
        'Bath',
        'BatteryCharging',
        'Bed',
        'BedDouble',
        'BellRing',
        'Bike',
        'BriefcaseBusiness',
        'Building',
        'Building2',
        'Cable',
        'Calendar',
        'CalendarDays',
        'Camera',
        'Car',
        'CarFront',
        'ChartColumn',
        'ChartNoAxesCombined',
        'ChartPie',
        'Check',
        'CheckCheck',
        'ChefHat',
        'ChevronDown',
        'ChevronLeft',
        'ChevronRight',
        'ChevronUp',
        'CircleAlert',
        'CircleCheck',
        'CircleDollarSign',
        'CircleGauge',
        'CircleHelp',
        'CircleParking',
        'CircleUserRound',
        'ClipboardCheck',
        'Clock',
        'Cctv',
        'Coffee',
        'Compass',
        'ConciergeBell',
        'Contact',
        'CookingPot',
        'Crown',
        'DollarSign',
        'DoorClosed',
        'DoorOpen',
        'Download',
        'Droplets',
        'Dumbbell',
        'ExternalLink',
        'Eye',
        'Fan',
        'Fence',
        'FileText',
        'Filter',
        'Flame',
        'Gem',
        'Globe2',
        'Hammer',
        'Handshake',
        'HardHat',
        'Headphones',
        'Heart',
        'Home',
        'Hotel',
        'House',
        'HouseCheck',
        'HouseKey',
        'HousePlus',
        'Image',
        'Images',
        'Info',
        'Key',
        'KeyRound',
        'LampFloor',
        'Landmark',
        'LandPlot',
        'Layers',
        'ListChecks',
        'ListFilter',
        'LocateFixed',
        'LockKeyhole',
        'Mail',
        'Map',
        'MapPin',
        'MapPinned',
        'MapPinHouse',
        'Maximize',
        'Maximize2',
        'MessageCircle',
        'MessageSquareText',
        'Minus',
        'Mountain',
        'MoveUpRight',
        'Navigation',
        'NotebookText',
        'Paintbrush',
        'PanelsTopLeft',
        'PenLine',
        'PersonStanding',
        'Phone',
        'Plane',
        'Play',
        'PlugZap',
        'Plus',
        'ReceiptText',
        'Refrigerator',
        'Ruler',
        'Sailboat',
        'Satellite',
        'Search',
        'Send',
        'Settings',
        'Share',
        'Share2',
        'Shield',
        'ShieldCheck',
        'Ship',
        'ShowerHead',
        'Signature',
        'SlidersHorizontal',
        'Snowflake',
        'Sofa',
        'Sparkles',
        'SquareCheck',
        'SquareStack',
        'Star',
        'Sun',
        'Target',
        'TreePalm',
        'Trees',
        'TrendingUp',
        'Trophy',
        'Umbrella',
        'User',
        'UserRound',
        'Users',
        'Utensils',
        'Video',
        'WalletCards',
        'Warehouse',
        'Waves',
        'Wifi',
        'Wine',
        'Wrench',
        'X',
        'Zap',
      ]
    >;
  };
}

export interface UiServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_service_cards';
  info: {
    displayName: 'Service Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
      'sections.contact-preview': SectionsContactPreview;
      'sections.discover-properties': SectionsDiscoverProperties;
      'sections.featured-preview': SectionsFeaturedPreview;
      'sections.legacy-preview': SectionsLegacyPreview;
      'sections.owner-preview': SectionsOwnerPreview;
      'sections.services-preview': SectionsServicesPreview;
      'sections.services-type': SectionsServicesType;
      'sections.testimonial-preview': SectionsTestimonialPreview;
      'shared.footer-cta': SharedFooterCta;
      'shared.hero': SharedHero;
      'shared.media': SharedMedia;
      'shared.navigation-link': SharedNavigationLink;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social-media': SharedSocialMedia;
      'ui.amenities': UiAmenities;
      'ui.button': UiButton;
      'ui.icon-with-text': UiIconWithText;
      'ui.icons': UiIcons;
      'ui.service-card': UiServiceCard;
      'ui.testimonial': UiTestimonial;
    }
  }
}
