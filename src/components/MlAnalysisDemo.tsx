import React, { useState, useRef, useEffect } from 'react';
import { Upload, FileCode, Activity, ShieldAlert, CheckCircle, AlertTriangle, ShieldCheck, Database, BrainCircuit, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type AnalysisState = 'idle' | 'analyzing' | 'complete';

export const MlAnalysisDemo: React.FC = () => {
  const [state, setState] = useState<AnalysisState>('idle');
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const mockLogs = [
    "[SYSTEM] Initiating PCAP parsing engine...",
    "[IPSEC] Identifying ISAKMP Phase 1 headers...",
    "[ESP] Extracting Encapsulating Security Payload SPIs...",
    "[ML_ENGINE] Vectorizing packet timing & sizes...",
    "[ML_ENGINE] Running Anomaly Detection Model (v4.2)...",
    "[SECURITY] Analyzing cryptographic suites...",
    "[SECURITY] Detecting weak DH groups...",
    "[SYSTEM] Finalizing threat score calculation...",
    "[SYSTEM] Analysis complete."
  ];

  useEffect(() => {
    if (state === 'analyzing') {
      let currentLogIndex = 0;
      const totalTime = 4000; // 4 seconds of fake analysis
      const logInterval = totalTime / mockLogs.length;

      const logTimer = setInterval(() => {
        if (currentLogIndex < mockLogs.length) {
          setLogs(prev => [...prev, mockLogs[currentLogIndex]]);
          currentLogIndex++;
        }
      }, logInterval);

      const progressTimer = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            clearInterval(progressTimer);
            setTimeout(() => setState('complete'), 500); // Wait a bit at 100%
            return 100;
          }
          return p + 2; // Increments to reach 100 in ~4s
        });
      }, totalTime / 50);

      return () => {
        clearInterval(logTimer);
        clearInterval(progressTimer);
      };
    }
  }, [state]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setState('analyzing');
      setLogs([]);
      setProgress(0);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      setFile(droppedFile);
      setState('analyzing');
      setLogs([]);
      setProgress(0);
    }
  };

  const resetAnalysis = () => {
    setState('idle');
    setFile(null);
    setLogs([]);
    setProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="ml-demo" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#030912] border-t border-cyan-500/15 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#030912] to-[#030912] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-950/80 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-mono font-semibold mb-4">
            <BrainCircuit className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>AI-POWERED ANALYSIS (BETA)</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-100 mb-4">
            Test the ML Engine in your Browser
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Upload a <code className="text-cyan-400 bg-cyan-950/50 px-1.5 py-0.5 rounded font-mono text-sm">.pcap</code> or <code className="text-cyan-400 bg-cyan-950/50 px-1.5 py-0.5 rounded font-mono text-sm">.pcapng</code> file to see our Machine Learning anomaly detection in action. (Simulation for demo purposes).
          </p>
        </div>

        <div className="glass-card rounded-2xl border border-cyan-500/30 bg-slate-900/50 backdrop-blur-xl overflow-hidden relative shadow-[0_0_40px_rgba(0,240,255,0.05)]">
          
          <AnimatePresence mode="wait">
            {/* STATE 1: IDLE / UPLOAD */}
            {state === 'idle' && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-12 text-center"
              >
                <div 
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className="max-w-xl mx-auto border-2 border-dashed border-cyan-500/30 hover:border-cyan-400/60 rounded-xl p-12 transition-colors cursor-pointer bg-cyan-950/10 group"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input 
                    type="file" 
                    className="hidden" 
                    ref={fileInputRef} 
                    accept=".pcap,.pcapng"
                    onChange={handleFileChange}
                  />
                  <div className="w-16 h-16 mx-auto bg-cyan-950/80 border border-cyan-500/40 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                    <Upload className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-slate-200 mb-2">
                    Drag & Drop your PCAP file here
                  </h3>
                  <p className="text-sm text-slate-400 mb-6">
                    or click to browse your computer
                  </p>
                  <div className="flex items-center justify-center gap-4 text-xs font-mono text-cyan-500/70">
                    <span className="flex items-center gap-1.5"><FileCode className="w-3.5 h-3.5" /> .pcap</span>
                    <span className="flex items-center gap-1.5"><FileCode className="w-3.5 h-3.5" /> .pcapng</span>
                    <span>Max 50MB</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STATE 2: ANALYZING */}
            {state === 'analyzing' && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8 sm:p-12"
              >
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-cyan-950/80 border border-cyan-500/40 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                        <Activity className="w-6 h-6 text-cyan-400 animate-pulse" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-slate-100">Analyzing Traffic Patterns</h3>
                        <p className="text-xs font-mono text-cyan-400/80">{file?.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-display font-bold text-2xl text-cyan-300">{progress}%</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden mb-8 border border-slate-700">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: "linear", duration: 0.1 }}
                    />
                  </div>

                  {/* Terminal Output */}
                  <div className="bg-[#0a0f18] rounded-xl border border-slate-800 p-4 font-mono text-[11px] sm:text-xs h-[180px] overflow-y-auto flex flex-col justify-end">
                    {logs.map((log, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`mb-1.5 ${log.includes('[SECURITY]') ? 'text-amber-400' : log.includes('[ML_ENGINE]') ? 'text-fuchsia-400' : 'text-cyan-500/70'}`}
                      >
                        <span className="opacity-50 mr-2 text-slate-500">&gt;</span>
                        {log}
                      </motion.div>
                    ))}
                    {progress < 100 && (
                      <div className="animate-pulse text-cyan-400/50 mt-1">
                        <span className="opacity-50 mr-2 text-slate-500">&gt;</span>_
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STATE 3: COMPLETE */}
            {state === 'complete' && (
              <motion.div
                key="complete"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 sm:p-10"
              >
                <div className="flex justify-between items-center mb-8 border-b border-cyan-500/15 pb-6">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-slate-100 flex items-center gap-3">
                      Analysis Report
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 uppercase">Completed</span>
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">File: {file?.name}</p>
                  </div>
                  <button 
                    onClick={resetAnalysis}
                    className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 transition-colors"
                    title="Close and upload new file"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Metric 1 */}
                  <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3 text-slate-400">
                      <Database className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Packets Processed</span>
                    </div>
                    <div className="font-display font-bold text-3xl text-slate-100">12,458</div>
                    <div className="text-xs text-emerald-400 mt-1">100% parsed successfully</div>
                  </div>

                  {/* Metric 2 */}
                  <div className="bg-fuchsia-950/20 border border-fuchsia-500/20 rounded-xl p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl" />
                    <div className="flex items-center gap-2 mb-3 text-fuchsia-400">
                      <BrainCircuit className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">ML Threat Score</span>
                    </div>
                    <div className="font-display font-bold text-3xl text-fuchsia-100 flex items-baseline gap-1">
                      78<span className="text-lg text-fuchsia-400/60">/100</span>
                    </div>
                    <div className="text-xs text-fuchsia-300 mt-1">Elevated risk detected</div>
                  </div>

                  {/* Metric 3 */}
                  <div className="bg-amber-950/20 border border-amber-500/20 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3 text-amber-400">
                      <AlertTriangle className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Anomalies Found</span>
                    </div>
                    <div className="font-display font-bold text-3xl text-amber-100">3</div>
                    <div className="text-xs text-amber-300/80 mt-1">Requires review</div>
                  </div>
                </div>

                {/* Detailed Findings */}
                <div>
                  <h4 className="text-sm font-bold text-slate-300 mb-4 uppercase tracking-wider">Key Findings</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-emerald-950/20 border border-emerald-500/15">
                      <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-bold text-slate-200">Strong Encryption Validated</h5>
                        <p className="text-xs text-slate-400 mt-1">ESP packets are utilizing AES-GCM-256 which meets high security standards.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-amber-950/20 border border-amber-500/30 shadow-[0_0_15px_rgba(251,191,36,0.05)]">
                      <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-bold text-amber-100">Weak Diffie-Hellman Group Detected</h5>
                        <p className="text-xs text-amber-200/70 mt-1">IKEv2 SA Initialization used DH Group 2 (1024-bit MODP), which is vulnerable to Logjam attacks. Upgrade to Group 14 or higher.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 border border-slate-700">
                      <Activity className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-bold text-slate-200">Traffic Volume Anomaly</h5>
                        <p className="text-xs text-slate-400 mt-1">ML model detected a 400% spike in small ESP packets resembling a covert timing channel.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
