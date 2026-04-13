import "./App.css";
import Body from "./Component/Body";
import CartHeader from "./Component/CartHeader";
import Navbar from "./Component/Navbar";
import Pricing from "./Component/Pricing";
import ShowNumber from "./Component/ShowNumber";
import StartThreeStep from "./Component/StartThreeStep";
const products = [
  {
    id: 1,
    name: "AI Content Pro",
    description:
      "Generate high-converting blog posts and social media copy in seconds using GPT-4o.",
    price: 29.99,
    period: "monthly",
    tag: "Popular",
    tagType: "popular",
    features: [
      "Unlimited generations",
      "Plagiarism checker",
      "SEO optimization",
      "20+ Languages",
    ],
    icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
  },
  {
    id: 2,
    name: "SaaS UI Kit",
    description:
      "A comprehensive library of React + Tailwind components for lightning-fast development.",
    price: 89.0,
    period: "one-time",
    tag: "Best Seller",
    tagType: "best seller",
    features: [
      "500+ Components",
      "Figma files included",
      "Lifetime updates",
      "Commercial license",
    ],
    icon: "https://cdn-icons-png.flaticon.com/512/1157/1157109.png",
  },
  {
    id: 3,
    name: "Cloud Hosting Elite",
    description:
      "Deploy your MERN stack applications with 99.9% uptime and automatic scaling.",
    price: 199.99,
    period: "yearly",
    tag: "New",
    tagType: "new",
    features: [
      "Global CDN",
      "DDoS Protection",
      "Free SSL Certificate",
      "24/7 Priority Support",
    ],
    icon: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png",
  },
  {
    id: 4,
    name: "Data Visualizer",
    description:
      "Transform complex JSON data into beautiful, interactive charts and dashboards.",
    price: 15.0,
    period: "monthly",
    tag: "New",
    tagType: "new",
    features: [
      "Drag & Drop builder",
      "Real-time updates",
      "Export as SVG/PNG",
      "API integration",
    ],
    icon: "https://cdn-icons-png.flaticon.com/512/422/422961.png",
  },
  {
    id: 5,
    name: "Video Editor Pro",
    description:
      "Professional grade browser-based video editing for content creators.",
    price: 49.0,
    period: "monthly",
    tag: "Popular",
    tagType: "popular",
    features: [
      "4K Export support",
      "Stock music library",
      "AI Voiceovers",
      "Cloud storage",
    ],
    icon: "https://cdn-icons-png.flaticon.com/512/3074/3074767.png",
  },
  {
    id: 6,
    name: "Icon Library Plus",
    description:
      "A massive collection of 5,000+ custom vector icons for any niche.",
    price: 35.0,
    period: "one-time",
    tag: "Best Seller",
    tagType: "best seller",
    features: [
      "SVG & WebFont",
      "Animated icons",
      "Free updates",
      "React component support",
    ],
    icon: "https://cdn-icons-png.flaticon.com/512/1265/1265775.png",
  },
  {
    id: 7,
    name: "SEO Auditor",
    description:
      "Analyze your website and get actionable steps to rank #1 on Google.",
    price: 120.0,
    period: "yearly",
    tag: "Popular",
    tagType: "popular",
    features: [
      "Backlink analysis",
      "Keyword tracking",
      "Competitor research",
      "PDF Reporting",
    ],
    icon: "https://cdn-icons-png.flaticon.com/512/3144/3144860.png",
  },
  {
    id: 8,
    name: "Code Snippet Manager",
    description:
      "Save, organize, and share your most used code blocks across all your devices.",
    price: 5.99,
    period: "monthly",
    tag: "Free Trial",
    tagType: "new",
    features: [
      "VS Code Extension",
      "Syntax highlighting",
      "Cloud sync",
      "Team folders",
    ],
    icon: "https://cdn-icons-png.flaticon.com/512/1157/1157104.png",
  },
  {
    id: 9,
    name: "Design Feedback Pro",
    description:
      "Get instant, actionable feedback on your UI/UX designs using advanced heatmaps and user testing.",
    price: 39.0,
    period: "monthly",
    tag: "Trending",
    tagType: "popular",
    features: [
      "AI Heatmaps",
      "User session recording",
      "Live collaboration",
      "Sketch & Adobe XD plugin",
    ],
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055644.png",
  },
];
function App() {
  return (
    <div>
      <div className="w-[85%] mx-auto">
        <div></div>
        <Navbar />
        <Body />
      </div>
      <ShowNumber />
      <div className="w-[85%] mx-auto">
        <CartHeader products={products} />
         <StartThreeStep/>
         <Pricing/>
      </div>
    </div>
  );
}

export default App;
