import Navigation from '@/components/layout/Navigation';
import PortfolioLearnMore from "@/components/projects/PortfolioLearnMore";

export const metadata = {
  title: "Portfolio Website · Learn more · Coco Shen",
  description: "Detailed overview of my portfolio website - modern web experience with smooth scrolling, page transitions, and interactive components.",
};

export default function PortfolioOverviewPage() {
  return (
    <>
      <Navigation />
      <PortfolioLearnMore />
    </>
  );
}
