"use client";

import { useState } from "react";

/* ─── Types ───────────────────────────────────────────────────────────── */

type CompanyName =
  | "Google"
  | "Microsoft"
  | "Goldman Sachs"
  | "Amazon"
  | "Deloitte"
  | "JP Morgan"
  | "Infosys"
  | "McKinsey";

type Sector = "Tech" | "Finance" | "Consulting";

type CalendarColor =
  | "blue"
  | "green"
  | "orange"
  | "purple"
  | "red"
  | "gray";

type QuestionTag =
  | "System Design"
  | "Distributed"
  | "Algorithms"
  | "Heaps"
  | "Trees"
  | "BFS"
  | "Behavioral"
  | "Leadership"
  | "Finance"
  | "Valuation"
  | "Case Study"
  | "Strategy"
  | "CAP Theorem"
  | "M&A"
  | "Profitability";

type Tab = "stats" | "questions" | "calendar";

/* ─── Data ───────────────────────────────────────────────────────────── */

const stats = [
  { label: "Students Placed", value: "847", sub: "Class of 2024" },
  { label: "Avg. Package", value: "₹12.4L", sub: "Per annum" },
  { label: "Highest Package", value: "₹48L", sub: "Google — 2024" },
  { label: "Companies Visited", value: "134", sub: "This year" },
];

const companies: {
  name: CompanyName;
  sector: Sector;
  placed: number;
  avg: string;
  high: string;
  logo: string;
}[] = [
  {
    name: "Google",
    sector: "Tech",
    placed: 12,
    avg: "₹42L",
    high: "₹48L",
    logo: "G",
  },
  {
    name: "Microsoft",
    sector: "Tech",
    placed: 18,
    avg: "₹32L",
    high: "₹38L",
    logo: "Ms",
  },
  {
    name: "Goldman Sachs",
    sector: "Finance",
    placed: 9,
    avg: "₹28L",
    high: "₹34L",
    logo: "GS",
  },
  {
    name: "Amazon",
    sector: "Tech",
    placed: 24,
    avg: "₹24L",
    high: "₹30L",
    logo: "Az",
  },
  {
    name: "Deloitte",
    sector: "Consulting",
    placed: 31,
    avg: "₹10L",
    high: "₹14L",
    logo: "D",
  },
  {
    name: "JP Morgan",
    sector: "Finance",
    placed: 11,
    avg: "₹22L",
    high: "₹26L",
    logo: "JP",
  },
  {
    name: "Infosys",
    sector: "Tech",
    placed: 45,
    avg: "₹7L",
    high: "₹9L",
    logo: "In",
  },
  {
    name: "McKinsey",
    sector: "Consulting",
    placed: 5,
    avg: "₹35L",
    high: "₹40L",
    logo: "Mc",
  },
];

const questions: {
  company: CompanyName;
  role: string;
  round: string;
  q: string;
  tags: QuestionTag[];
}[] = [
  {
    company: "Google",
    role: "SWE",
    round: "Technical",
    q: "Design a distributed key-value store that supports 1M reads/sec.",
    tags: ["System Design", "Distributed"],
  },
  {
    company: "Google",
    role: "SWE",
    round: "Technical",
    q: "Given a stream of integers, find the median at every step in O(log n).",
    tags: ["Algorithms", "Heaps"],
  },
  {
    company: "Microsoft",
    role: "SDE-2",
    round: "Technical",
    q: "Serialize and deserialize a binary tree.",
    tags: ["Trees", "BFS"],
  },
  {
    company: "Microsoft",
    role: "SDE-2",
    round: "HR",
    q: "Tell me about a time you disagreed with your manager and how you handled it.",
    tags: ["Behavioral", "Leadership"],
  },
  {
    company: "Goldman Sachs",
    role: "Analyst",
    round: "Technical",
    q: "Walk me through a DCF model for a SaaS company. What discount rate would you use?",
    tags: ["Finance", "Valuation"],
  },
  {
    company: "Goldman Sachs",
    role: "Analyst",
    round: "Case",
    q: "A retail client wants to expand to Southeast Asia. How would you advise them?",
    tags: ["Case Study", "Strategy"],
  },
  {
    company: "Amazon",
    role: "SDE",
    round: "Technical",
    q: "Design Amazon's shopping cart system — focus on consistency vs availability tradeoffs.",
    tags: ["System Design", "CAP Theorem"],
  },
  {
    company: "Amazon",
    role: "SDE",
    round: "Behavioral",
    q: "Describe a project where you had to deliver under extreme time pressure.",
    tags: ["Behavioral", "Leadership"],
  },
  {
    company: "Deloitte",
    role: "Analyst",
    round: "Case",
    q: "Your client's operating margins dropped 8% YoY. Walk through your diagnostic framework.",
    tags: ["Case Study", "Profitability"],
  },
  {
    company: "McKinsey",
    role: "BA",
    round: "Case",
    q: "A hospital chain is considering acquiring a diagnostics startup.",
    tags: ["Case Study", "M&A"],
  },
];

const calendar: {
  date: string;
  day: string;
  company: CompanyName;
  role: string;
  type: string;
  color: CalendarColor;
}[] = [
  {
    date: "2 Jun",
    day: "Mon",
    company: "Google",
    role: "SWE Intern & FTE",
    type: "PPT + Test",
    color: "blue",
  },
  {
    date: "5 Jun",
    day: "Thu",
    company: "Goldman Sachs",
    role: "Analyst",
    type: "Shortlist Release",
    color: "green",
  },
  {
    date: "9 Jun",
    day: "Mon",
    company: "Microsoft",
    role: "SDE",
    type: "Technical Interviews",
    color: "blue",
  },
  {
    date: "11 Jun",
    day: "Wed",
    company: "Amazon",
    role: "SDE / BIE",
    type: "Online Assessment",
    color: "orange",
  },
  {
    date: "14 Jun",
    day: "Sat",
    company: "Deloitte",
    role: "Analyst",
    type: "PPT + GD",
    color: "purple",
  },
  {
    date: "17 Jun",
    day: "Tue",
    company: "JP Morgan",
    role: "Analyst",
    type: "HireVue Round",
    color: "green",
  },
  {
    date: "20 Jun",
    day: "Fri",
    company: "McKinsey",
    role: "Business Analyst",
    type: "Case Interviews",
    color: "red",
  },
  {
    date: "23 Jun",
    day: "Mon",
    company: "Infosys",
    role: "Systems Engineer",
    type: "Mass Drive",
    color: "gray",
  },
];

const sectors: ("All" | Sector)[] = [
  "All",
  "Tech",
  "Finance",
  "Consulting",
];

const tagColors: Record<QuestionTag, string> = {
  "System Design": "bg-blue-50 text-blue-600",
  Distributed: "bg-indigo-50 text-indigo-600",
  Algorithms: "bg-purple-50 text-purple-600",
  Heaps: "bg-purple-50 text-purple-600",
  Trees: "bg-green-50 text-green-600",
  BFS: "bg-green-50 text-green-600",
  Behavioral: "bg-yellow-50 text-yellow-700",
  Leadership: "bg-yellow-50 text-yellow-700",
  Finance: "bg-emerald-50 text-emerald-600",
  Valuation: "bg-emerald-50 text-emerald-600",
  "Case Study": "bg-orange-50 text-orange-600",
  Strategy: "bg-orange-50 text-orange-600",
  "CAP Theorem": "bg-blue-50 text-blue-600",
  "M&A": "bg-rose-50 text-rose-600",
  Profitability: "bg-orange-50 text-orange-600",
};

const calColors: Record<CalendarColor, string> = {
  blue: "bg-blue-50 border-blue-200 text-blue-700",
  green: "bg-green-50 border-green-200 text-green-700",
  orange: "bg-orange-50 border-orange-200 text-orange-700",
  purple: "bg-purple-50 border-purple-200 text-purple-700",
  red: "bg-red-50 border-red-200 text-red-700",
  gray: "bg-gray-50 border-gray-200 text-gray-600",
};

const logoColors: Record<CompanyName, string> = {
  Google: "bg-blue-100 text-blue-700",
  Microsoft: "bg-indigo-100 text-indigo-700",
  "Goldman Sachs": "bg-emerald-100 text-emerald-700",
  Amazon: "bg-orange-100 text-orange-700",
  Deloitte: "bg-green-100 text-green-700",
  "JP Morgan": "bg-sky-100 text-sky-700",
  Infosys: "bg-purple-100 text-purple-700",
  McKinsey: "bg-rose-100 text-rose-700",
};

/* ─── Component ───────────────────────────────────────────────────────── */

export default function PlacementHub() {
  const [activeTab, setActiveTab] = useState<Tab>("stats");
  const [sectorFilter, setSectorFilter] = useState<"All" | Sector>("All");
  const [companyFilter, setCompanyFilter] = useState<
    "All" | CompanyName
  >("All");
  const [search, setSearch] = useState("");

  const filteredCompanies = companies.filter(
    (c) => sectorFilter === "All" || c.sector === sectorFilter
  );

  const filteredQuestions = questions.filter((q) => {
    const matchCompany =
      companyFilter === "All" || q.company === companyFilter;

    const matchSearch =
      q.q.toLowerCase().includes(search.toLowerCase()) ||
      q.company.toLowerCase().includes(search.toLowerCase()) ||
      q.tags.some((t) =>
        t.toLowerCase().includes(search.toLowerCase())
      );

    return matchCompany && matchSearch;
  });

  return (
    <main className="flex-1 flex flex-col h-full bg-white overflow-hidden">
      <div className="px-8 pt-7 pb-0 shrink-0">
        <div className="flex items-center justify-between mb-1">
          <div>
            <h1
              className="text-2xl font-semibold text-gray-900"
              style={{ letterSpacing: "-0.02em" }}
            >
              Placement Hub
            </h1>

            <p className="text-xs text-gray-400 mt-0.5">
              Live data · Class of 2024–25 · Manipal Institute of
              Technology
            </p>
          </div>

          <span className="text-xs bg-green-50 border border-green-200 text-green-600 font-medium px-3 py-1 rounded-full">
            Season Active
          </span>
        </div>

        <div className="flex gap-1 mt-5 border-b border-gray-100">
          {(["stats", "questions", "calendar"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-xs font-medium capitalize rounded-t-lg transition-colors border-b-2 -mb-px ${
                activeTab === tab
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab === "stats"
                ? "Companies & Stats"
                : tab === "questions"
                ? "Question Bank"
                : "Company Calendar"}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="grid grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm"
            >
              <p className="text-xs text-gray-400 mb-1">{s.label}</p>

              <p
                className="text-2xl font-semibold text-gray-900"
                style={{ letterSpacing: "-0.02em" }}
              >
                {s.value}
              </p>

              <p className="text-[10px] text-gray-400 mt-0.5">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}