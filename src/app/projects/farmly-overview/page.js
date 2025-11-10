import Navigation from '@/components/layout/Navigation';
import FarmlyLearnMore from "@/components/projects/FarmlyLearnMore";

export const metadata = {
  title: "Farmly · Learn more · Coco Shen",
  description: "Detailed overview of Farmly - a mobile marketplace connecting farmers and customers. Architecture, features, updates, and roadmap.",
};

export default function FarmlyOverviewPage() {
  return (
    <>
      <Navigation />
      <FarmlyLearnMore />
    </>
  );
}