import {
  Utensils, Home, Stethoscope, Trees, UserCheck,
  Coffee, Apple, Moon, Soup, Salad, Bed, ShowerHead, Wrench, Clock,
  HeartPulse, Ambulance, FlaskConical, Pill, AlertTriangle,
  Waves, Flower2, Landmark, Footprints, User, Users, LucideIcon
} from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  label: string;
  description: string;
}

export interface ServiceSection {
  slug: string;
  icon: LucideIcon;
  title: string;
  emoji: string;
  tagline: string;
  description: string;
  items: ServiceItem[];
}

export const serviceData: ServiceSection[] = [
  {
    slug: "fooding",
    icon: Utensils,
    emoji: "🍽️",
    title: "Fooding Services",
    tagline: "Nutritious meals tailored to every dietary need",
    description:
      "At Swasti Old Age Home, we believe nutrition is the foundation of well-being. Our experienced kitchen staff prepares fresh, wholesome meals daily using quality ingredients. Every meal is designed to meet the specific dietary requirements and preferences of our residents, ensuring they enjoy balanced, delicious food throughout the day.",
    items: [
      { icon: Coffee, label: "Breakfast", description: "Freshly prepared morning meals with tea, toast, fruits, and traditional options." },
      { icon: Soup, label: "Lunch", description: "Full balanced meals with dal, rice, vegetables, and protein-rich dishes." },
      { icon: Apple, label: "Fresh Fruits", description: "Seasonal fruits served daily to ensure proper vitamin and mineral intake." },
      { icon: Salad, label: "Evening Snacks", description: "Light healthy snacks with evening tea to keep energy levels balanced." },
      { icon: Moon, label: "Dinner", description: "Easily digestible, nutritious dinner served at a comfortable hour." },
      { icon: Utensils, label: "Special Diet", description: "Customized meals for diabetic, cardiac, and other special dietary needs." },
    ],
  },
  {
    slug: "lodging",
    icon: Home,
    emoji: "🏠",
    title: "Lodging & Accommodation",
    tagline: "Comfortable living spaces designed for seniors",
    description:
      "Our accommodation facilities are designed with senior-friendly features to ensure maximum comfort and safety. Each room is well-ventilated, naturally lit, and maintained to the highest hygiene standards. We provide 24×7 housekeeping and room service so our residents can focus on enjoying life.",
    items: [
      { icon: Bed, label: "Clean Rooms", description: "Spacious, well-ventilated rooms cleaned and sanitized daily." },
      { icon: Bed, label: "Comfortable Bedding", description: "Premium mattresses and bedding changed regularly for maximum comfort." },
      { icon: Clock, label: "24×7 Room Service", description: "Round-the-clock room service for any needs at any hour." },
      { icon: Home, label: "Housekeeping", description: "Professional housekeeping staff maintaining spotless living spaces." },
      { icon: Wrench, label: "Electrical Maintenance", description: "Prompt electrical and facility maintenance to ensure uninterrupted comfort." },
      { icon: UserCheck, label: "Aya Masi Support", description: "Dedicated support staff for daily personal assistance." },
      { icon: ShowerHead, label: "Washroom Assistance", description: "Accessible, senior-friendly washrooms with assistance available." },
    ],
  },
  {
    slug: "medical",
    icon: Stethoscope,
    emoji: "🏥",
    title: "Medical Services",
    tagline: "Comprehensive healthcare at your doorstep",
    description:
      "Health is our top priority. Swasti Old Age Home provides comprehensive medical services including round-the-clock nursing, regular health check-ups, emergency care, and specialized diagnostic services. Our qualified medical team ensures every resident receives timely, professional healthcare.",
    items: [
      { icon: HeartPulse, label: "24×7 Nurse", description: "Qualified nurses available around the clock for medical assistance." },
      { icon: Stethoscope, label: "Free Health Check-up (2 days/week)", description: "Regular health screenings by qualified physicians twice a week." },
      { icon: HeartPulse, label: "24×7 Doctor", description: "On-call doctors available at all times for medical consultations." },
      { icon: Ambulance, label: "Ambulance Service", description: "Dedicated ambulance service for emergency hospital transfers." },
      { icon: FlaskConical, label: "Diagnostic Services", description: "In-house diagnostic tests including blood work and imaging." },
      { icon: FlaskConical, label: "Laboratory Services", description: "Fully equipped laboratory for routine and specialized tests." },
      { icon: Stethoscope, label: "Nursing Home Support", description: "Partnerships with nearby nursing homes for advanced care." },
      { icon: Pill, label: "Medicine Management", description: "Systematic medicine dispensation and prescription management." },
      { icon: AlertTriangle, label: "Emergency Care", description: "Immediate response team for medical emergencies." },
    ],
  },
  {
    slug: "facilities",
    icon: Trees,
    emoji: "🌿",
    title: "Other Facilities",
    tagline: "Amenities for a fulfilling daily life",
    description:
      "Beyond care, we provide a range of recreational and spiritual facilities to enrich the lives of our residents. From lush gardens and walking tracks to a serene temple and swimming pool, Swasti offers a complete environment for physical, mental, and spiritual well-being.",
    items: [
      { icon: Waves, label: "Swimming Pool", description: "Well-maintained swimming pool for exercise and relaxation." },
      { icon: Trees, label: "Park Area", description: "Beautifully landscaped park for leisure walks and fresh air." },
      { icon: Flower2, label: "Garden Area", description: "Colorful gardens where residents can enjoy nature and gardening." },
      { icon: Landmark, label: "Mandir", description: "A peaceful temple for daily prayers and spiritual solace." },
      { icon: Footprints, label: "Walking Track", description: "Dedicated walking tracks for daily exercise in a safe environment." },
    ],
  },
  {
    slug: "aya-services",
    icon: UserCheck,
    emoji: "👩‍⚕️",
    title: "Aya Services",
    tagline: "Dedicated personal care assistants",
    description:
      "Our trained Aya staff provides compassionate personal assistance to residents who need extra support with daily activities. Whether it's personal care, mobility assistance, or companionship, our Aya services ensure every resident feels supported and cared for throughout the day.",
    items: [
      { icon: User, label: "Personal Aya", description: "One-on-one dedicated caregiver for personalized daily assistance." },
      { icon: Users, label: "General Aya", description: "Shared caregiving support for group activities and general needs." },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  serviceData.find((s) => s.slug === slug);
