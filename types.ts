export type Language = 'en' | 'ru' | 'hy';

export type Page = 'home' | 'services' | 'about' | 'contact';

export interface TranslationSchema {
  nav_home: string;
  nav_services: string;
  nav_about: string;
  nav_contact: string;
  hero_title: string;
  hero_sub: string;
  hero_dubai: string;
  hero_cta: string;
  hero_cta2: string;
  highlights_title: string;
  h1_deals: string;
  h1_text: string;
  h2_clients: string;
  h2_text: string;
  h3_years: string;
  h3_text: string;
  ad_here_title: string;
  ad_here_sub: string;
  ad_here_cta: string;
  ad_space_available: string;
  footer_rights: string;
  footer_desc: string;
  footer_privacy: string;
  footer_terms: string;
  // Services Section
  services_title: string;
  filter_all: string;
  filter_sale: string;
  filter_rent: string;
  filter_long: string;
  prop_beds: string;
  prop_baths: string;
  prop_sqft: string;
  btn_details: string;
  modal_desc: string;
  modal_features: string;
  modal_call_now: string;
  // About Section
  about_title: string;
  about_intro: string;
  story_title: string;
  story_text: string;
  values_title: string;
  val_1: string;
  val_2: string;
  val_3: string;
  val_4: string;
  dubai_title: string;
  dubai_text: string;
  // Contact Section
  contact_title: string;
  contact_phone: string;
  contact_email: string;
  contact_address: string;
  address_value: string;
  contact_follow: string;
  contact_whatsapp: string;
  contact_viber: string;
  footer_contacts: string;
  footer_follow: string;
}

export type Translations = Record<Language, TranslationSchema>;