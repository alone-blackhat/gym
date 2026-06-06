export interface MembershipPlan {
  id: string;
  duration: string;
  name: string;
  originalPrice: number;
  discountPrice: number;
  badgeText?: string;
  features: string[];
  popular?: boolean;
}

export interface ComboPackage {
  id: string;
  name: string;
  tagline: string;
  price: number;
  savings: number;
  features: string[];
  popular?: boolean;
}

export interface OfferPromo {
  id: string;
  title: string;
  discountText: string;
  description: string;
  expiryText: string;
  code: string;
  gradient: string;
}

export interface GymFeature {
  id: string;
  title: string;
  description: string;
  metric: string;
  iconName: string;
}
