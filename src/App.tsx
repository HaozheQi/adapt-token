/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  FileText, 
  Github, 
  Database, 
  Clock, 
  Zap, 
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Layers
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

const authors = [
  { name: "Haozhe Qi", affiliation: "1,2*", link: "https://scholar.google.com/citations?user=BajLgxUAAAAJ&hl=en" },
  { name: "Kevin Qu", affiliation: "3", link: "https://kevinqu7.github.io/" },
  { name: "Mahdi Rad", affiliation: "1", link: "https://radmahdi.github.io/Home.html" },
  { name: "Rui Wang", affiliation: "1", link: "https://rui2016.github.io/" },
  { name: "Alexander Mathis", affiliation: "2", link: "https://people.epfl.ch/alexander.mathis?lang=en" },
  { name: "Marc Pollefeys", affiliation: "1,3", link: "https://people.inf.ethz.ch/pomarc/" },
];

const affiliations = [
  { id: "1", name: "Microsoft Spatial AI Lab" },
  { id: "2", name: "EPFL" },
  { id: "3", name: "ETH Zurich" },
];

const stats = [
  { label: "Accuracy Gain", value: "+6.7", sub: "on Qwen2.5-VL 7B", icon: Zap },
  { label: "Inference Time", value: "-50%", sub: "with AdaptToken-Lite", icon: Clock },
  { label: "Scalability", value: "10K+ Frames", sub: "Continuous Performance Gain", icon: Database },
];

const bibtex = `@article{qi2026adapttoken,
  title={AdaptToken: Entropy-based Adaptive Token Selection for MLLM Long Video Understanding},
  author={Qi, Haozhe and Qu, Kevin and Rad, Mahdi and Wang, Rui and Mathis, Alexander and Pollefeys, Marc},
  journal={arXiv preprint arXiv:26XX.XXXXX},
  year={2026}
}`;

const efficiencyData = [
  { name: "VideoMME", liteAcc: 69.8, fullAcc: 70.5, liteTime: 8.6, fullTime: 17.8 },
  { name: "LongVideoBench", liteAcc: 65.1, fullAcc: 65.2, liteTime: 11.0, fullTime: 18.2 },
  { name: "MLVU", liteAcc: 76.3, fullAcc: 76.8, liteTime: 10.1, fullTime: 21.5 },
  { name: "LVBench", liteAcc: 53.3, fullAcc: 54.8, liteTime: 19.3, fullTime: 32.8 },
];

const scalingData = [
  { frames: "4096", VideoMME: 70.5, MLVU: 76.8, LongVideoBench: 65.2, LVBench: 54.8 },
  { frames: "8192", VideoMME: 70.2, MLVU: 77.1, LongVideoBench: 65.5, LVBench: 54.9 },
  { frames: "10000", VideoMME: 70.1, MLVU: 77.1, LongVideoBench: 65.8, LVBench: 55.6 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#333] font-sans selection:bg-blue-100">
      {/* Hero Section */}
      <header className="pt-20 pb-16 px-4 max-w-5xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-[#AA74FF] to-[#2DB14A] bg-clip-text text-transparent">AdaptToken</span>: Entropy-based Adaptive Token Selection for MLLM Long Video Understanding
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8 text-lg"
        >
          {authors.map((author, idx) => (
            <span key={idx} className="whitespace-nowrap">
              <a href={author.link} className="text-blue-600 hover:underline">{author.name}</a>
              <sup>{author.affiliation}</sup>
              {idx < authors.length - 1 && ","}
            </span>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-4 text-gray-600 italic"
        >
          {affiliations.map((aff) => (
            <span key={aff.id}>
              <sup>{aff.id}</sup> {aff.name}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-gray-500 text-sm mb-10"
        >
          *Work done during an internship at Microsoft
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#" className="flex items-center gap-2 px-6 py-2.5 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
            <FileText size={18} />
            Paper
          </a>
          <a href="https://github.com/HaozheQi/AdaptToken" className="flex items-center gap-2 px-6 py-2.5 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
            <Github size={18} />
            Code
          </a>
        </motion.div>
      </header>

      {/* Stats Bar */}
      <section className="bg-white border-y border-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
              <div className="text-xs text-gray-400 mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Abstract */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Abstract</h2>
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 leading-relaxed text-gray-700 text-lg">
          <p className="mb-6">
            Long video understanding remains challenging for Multi-modal Large Language Models (MLLMs) due to high memory costs and context-length limits. Prior approaches mitigate this by scoring and selecting frames/tokens within short clips, but they lack a principled mechanism to compare relevance across distant video clips and stop processing once sufficient evidence has been gathered.
          </p>
          <p>
            We propose <strong>AdaptToken</strong>, a training-free framework that turns an MLLM's self-uncertainty into a global control signal for long-video token selection. AdaptToken splits a video into groups, extracts cross-modal attention to rank tokens within each group, and uses the model's response entropy to estimate each group's prompt relevance. This entropy signal enables a global token budget allocation across groups and further supports early stopping (<strong>AdaptToken-Lite</strong>), skipping the remaining groups when the model becomes sufficiently certain. Across four long-video benchmarks, AdaptToken consistently improves accuracy and continues to benefit from extremely long inputs (up to 10K frames).
          </p>
        </div>
      </section>

      {/* Overall Pipeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">Overall Pipeline</h2>
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="text-gray-600 leading-relaxed">
              AdaptToken processes long videos by dividing them into frame groups and selecting informative tokens within each group based on group relevance estimated from response entropy. It progressively gathers evidence across groups and stops processing once sufficient information has been collected.
            </p>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-3xl shadow-xl border border-gray-100">
            <img 
              src={`${import.meta.env.BASE_URL}fig2.png`}
              alt="AdaptToken Pipeline" 
              className="rounded-xl w-full"
              referrerPolicy="no-referrer"
            />
            <p className="text-xs text-gray-400 mt-4 text-center italic">Figure 2: Overall pipeline of AdaptToken.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Group-wise processing to avoid memory bottlenecks",
              "Cross-modal attention for intra-group ranking",
              "Response entropy for global budget allocation",
              "Location-aware removal of redundant tokens"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entropy Analysis Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">Entropy-based Relevance Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
              <img 
                src={`${import.meta.env.BASE_URL}fig3.png`}
                alt="Needle-in-a-Haystack Entropy" 
                className="w-full rounded-lg mb-4"
                referrerPolicy="no-referrer"
              />
              <p className="text-xs text-gray-400 text-center italic">Figure 3: Needle-in-a-Haystack experiments based on InternVL2.5 7B.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
              <img 
                src={`${import.meta.env.BASE_URL}fig4.png`}
                alt="Real-data Entropy" 
                className="w-full rounded-lg mb-4"
                referrerPolicy="no-referrer"
              />
              <p className="text-xs text-gray-400 text-center italic">Figure 4: Real-data entropy experiments on VideoMME and MLVU.</p>
            </div>
          </div>
          <p className="text-gray-600 mt-8 text-center max-w-3xl mx-auto leading-relaxed">
            Our analysis shows that higher response certainty (lower entropy) strongly correlates with correct predictions, providing a robust, training-free signal for estimating group-level relevance.
          </p>
          <div className="mt-12 text-center">
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 inline-block">
              <p className="text-blue-800 font-medium italic">"Higher response certainty indicates that the model has observed more prompt-relevant evidence."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Selection Visualization */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">Token Selection Visualization</h2>
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="text-gray-600 leading-relaxed mb-6">
              We use the model's response entropy as a group-level uncertainty signal. Groups that yield more confident (lower-entropy) responses are treated as more prompt-relevant and receive a larger share of the overall token budget.
            </p>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-3xl shadow-xl border border-gray-100">
            <img 
              src={`${import.meta.env.BASE_URL}fig5.png`}
              alt="Entropy-guided Selection" 
              className="rounded-xl w-full"
              referrerPolicy="no-referrer"
            />
            <p className="text-xs text-gray-400 mt-4 text-center italic">Figure 5: Visualization of AdaptToken token selection.</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">Experimental Results</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-stretch">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
            <h4 className="text-xl font-bold mb-6">SOTA Performance</h4>
            <div className="flex-grow flex flex-col justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}fig1.png`}
                alt="Radar Chart Results" 
                className="w-full h-auto mb-6"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              AdaptToken consistently delivers improved performance across VideoMME, LongVideoBench, LVBench, and MLVU compared to state-of-the-art methods.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
            <h4 className="text-xl font-bold mb-6">Efficiency (AdaptToken-Lite)</h4>
            <div className="space-y-4 flex-grow flex flex-col justify-center">
              {efficiencyData.filter(d => d.name === "VideoMME" || d.name === "MLVU").map((item, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-gray-900 text-sm">{item.name}</span>
                    <div className="flex gap-3 text-[10px] font-bold uppercase tracking-wider">
                      <span className="text-blue-600">Lite</span>
                      <span className="text-gray-400">Full</span>
                    </div>
                  </div>
                  
                  {/* Accuracy Comparison */}
                  <div className="mb-3">
                    <div className="flex justify-between text-[10px] text-gray-500 mb-1">
                      <span>Accuracy</span>
                      <span>{item.liteAcc}% vs {item.fullAcc}%</span>
                    </div>
                    <div className="flex gap-1 h-1.5">
                      <div className="bg-blue-600 rounded-full h-full" style={{ width: `${item.liteAcc}%` }}></div>
                      <div className="bg-gray-200 rounded-full h-full" style={{ width: `${item.fullAcc - item.liteAcc}%` }}></div>
                    </div>
                  </div>

                  {/* Time Comparison */}
                  <div>
                    <div className="flex justify-between text-[10px] text-gray-500 mb-1">
                      <span>Inference Time</span>
                      <span>{item.liteTime}s vs {item.fullTime}s</span>
                    </div>
                    <div className="relative h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="absolute left-0 top-0 h-full bg-blue-400 rounded-full transition-all" style={{ width: `${(item.liteTime / 35) * 100}%` }}></div>
                      <div className="absolute left-0 top-0 h-full bg-gray-200 rounded-full opacity-30" style={{ width: `${(item.fullTime / 35) * 100}%` }}></div>
                    </div>
                    <div className="mt-1.5 text-[10px] text-blue-600 font-bold flex items-center gap-1">
                      <Zap size={10} />
                      {Math.round((1 - item.liteTime / item.fullTime) * 100)}% faster
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-xs leading-relaxed mt-6 bg-blue-50 p-3 rounded-xl border border-blue-100 italic">
              AdaptToken-Lite achieves comparable accuracy while reducing average inference time by approximately <strong>50%</strong>.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-3">
            <TrendingUp className="text-blue-600" />
            Scaling to 10K Frames
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { key: "LongVideoBench", color: "#059669", title: "LongVideoBench", domain: [65.0, 66.0], dashed: false },
              { key: "LVBench", color: "#ea580c", title: "LVBench", domain: [54.5, 56.0], dashed: false },
            ].map((chart, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="text-sm font-bold mb-4 text-gray-700 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: chart.color }}></div>
                  {chart.title}
                </h4>
                <div className="h-[200px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={scalingData}
                      margin={{ top: 10, right: 10, left: -12, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id={`color${chart.key}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={chart.color} stopOpacity={0.1}/>
                          <stop offset="95%" stopColor={chart.color} stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="frames" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10 }}
                        label={{ value: 'Number of Frames', position: 'insideBottom', offset: 0, fontSize: 10, fill: '#6b7280', fontWeight: 500 }}
                      />
                      <YAxis 
                        domain={chart.domain}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10 }}
                        label={{ value: 'Accuracy (%)', angle: -90, position: 'insideLeft', offset: 18, fontSize: 10, fill: '#6b7280', fontWeight: 500 }}
                      />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey={chart.key} 
                        stroke={chart.color} 
                        fillOpacity={1} 
                        fill={`url(#color${chart.key})`}
                        strokeWidth={3}
                        strokeDasharray={chart.dashed ? "5 5" : "0"}
                        dot={{ r: 4, fill: chart.color, strokeWidth: 2, stroke: "#fff" }}
                        activeDot={{ r: 6 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-center text-gray-600 font-medium">
              AdaptToken scales to extremely long inputs and continues to improve performance even with 10K frames.
            </p>
            <p className="text-center text-gray-400 text-xs mt-2">
              *Experiments conducted using Qwen2.5-VL 7B as the base MLLM.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-white rounded-3xl shadow-sm border border-gray-100 p-6 overflow-hidden">
          <img 
            src={`${import.meta.env.BASE_URL}tab1.png`}
            alt="Table 1: Performance Comparison" 
            className="w-full h-auto rounded-xl"
            referrerPolicy="no-referrer"
          />
          <p className="text-center text-gray-500 text-xs mt-4">
            Table 1: Comparison with state-of-the-art methods on long video understanding benchmarks.
          </p>
        </div>
      </div>
    </section>

      {/* BibTeX */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">BibTeX</h2>
        <div className="bg-gray-900 text-gray-300 p-8 rounded-3xl font-mono text-sm overflow-x-auto relative group">
          <button 
            onClick={() => {
              navigator.clipboard.writeText(bibtex);
            }}
            className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs transition-colors opacity-0 group-hover:opacity-100"
          >
            Copy
          </button>
          <pre className="whitespace-pre-wrap">
            {bibtex}
          </pre>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 text-center text-gray-400 text-sm">
        <p>© 2026 AdaptToken Team. All rights reserved.</p>
        <p className="mt-2">Website template inspired by academic project pages.</p>
      </footer>
    </div>
  );
}
