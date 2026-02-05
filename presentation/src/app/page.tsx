"use client";

import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { AnimatedList } from "@/components/AnimatedList";
import { BudgetPieChart } from "@/components/BudgetPieChart";
import { ComparisonGraphic } from "@/components/ComparisonGraphic";
import { EcosystemDiagram } from "@/components/EcosystemDiagram";
import { ProblemDiagram } from "@/components/ProblemDiagram";
import { RoadmapTimeline } from "@/components/RoadmapTimeline";
import { SlideShell } from "@/components/SlideShell";
import { SystemArchitectureDiagram } from "@/components/SystemArchitectureDiagram";

type Slide = {
  key: string;
  view: ReactNode;
};

export default function Home() {
  const slides = useMemo<Slide[]>(
    () => [
      {
        key: "title",
        view: (
          <SlideShell
            title="Smart Closed-Loop High-Intensity Focused Ultrasound (HIFU) Monitoring & Acoustic Response Therapy for Tumor Ablation"
            subtitle="Translational research proposal advancing safe, adaptive, and personalized ablation for solid tumors."
            footerNote="Prepared for competitive funding submission | Clinical collaborators: Tata Memorial Centre, AIIMS Oncology"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "26px",
                textAlign: "center",
              }}
            >
              <div
                className="fade-intro"
                data-delay="1"
                style={{
                  fontSize: "16pt",
                  fontWeight: 700,
                  color: "rgba(13,107,168,0.9)",
                  letterSpacing: "0.08em",
                }}
              >
                Precision Oncology Innovation
              </div>
              <div
                className="fade-intro"
                data-delay="2"
                style={{
                  fontSize: "12pt",
                  maxWidth: "62ch",
                }}
              >
                Integrating AI-augmented sensing, real-time acoustic intelligence,
                and adaptive control to mitigate cavitation risk while elevating
                therapeutic efficacy.
              </div>
              <div
                className="fade-intro"
                data-delay="3"
                style={{
                  display: "grid",
                  gap: "10px",
                  fontSize: "11pt",
                  color: "rgba(15,26,42,0.7)",
                }}
              >
                <span>Principal Investigator: Dr. Ananya Rao, MD PhD</span>
                <span>Lead Engineering Partner: MedSono Labs Pvt Ltd.</span>
              </div>
            </div>
          </SlideShell>
        ),
      },
      {
        key: "problem",
        view: (
          <SlideShell
            title="Problem Statement"
            subtitle="Current HIFU systems operate with minimal sensing, leading to unpredictable acoustic cavitation, collateral damage, and variability in tumor endpoint control."
          >
            <div className="slide-columns">
              <div className="slide-card">
                <AnimatedList
                  items={[
                    "Open-loop energy delivery lacks actionable feedback during ablation.",
                    "Acoustic cavitation causes microvascular rupture and tissue charring.",
                    "Delayed signal processing prevents responsive adjustment to thermal hotspots.",
                    "Heterogeneous tumor perfusion undermines consistent dosing.",
                  ]}
                />
              </div>
              <ProblemDiagram />
            </div>
          </SlideShell>
        ),
      },
      {
        key: "solution",
        view: (
          <SlideShell
            title="Proposed Solution: Closed-Loop Adaptive HIFU"
            subtitle="A multi-sensor acoustic response therapy platform that couples intelligent control algorithms with real-time physiologic feedback."
          >
            <div className="slide-columns">
              <div className="slide-card">
                <AnimatedList
                  items={[
                    "Embedded acoustic backscatter sensors capture cavitation onset in milliseconds.",
                    "Hybrid thermal-Doppler imaging fuses perfusion and temperature signatures.",
                    "Reinforcement learning controller modulates duty cycle, focal depth, and beam shape.",
                    "Digital twin simulations tune patient-specific treatment envelopes pre-procedure.",
                  ]}
                />
              </div>
              <SystemArchitectureDiagram />
            </div>
          </SlideShell>
        ),
      },
      {
        key: "novelty",
        view: (
          <SlideShell
            title="Novelty & Opportunity"
            subtitle="Positioned to unlock adaptive oncology ablation with AI-rich feedback loops and patient-specific therapy intelligence."
          >
            <div className="slide-columns">
              <div className="slide-card">
                <AnimatedList
                  items={[
                    "AI-driven acoustic analytics quantify safe cavitation thresholds per patient.",
                    "Personalized sonication plans optimize for tumor morphology and perfusion.",
                    "Closed-loop dosing architecture aligns with emerging IEC safety frameworks.",
                    "Real-time treatment dashboards deliver actionable clinical decision support.",
                  ]}
                />
              </div>
              <div className="slide-card">
                <AnimatedList
                  startDelay={0.4}
                  items={[
                    "Conforms to BIRAC translational remit with dual academic-industry leadership.",
                    "First-to-market acoustic response therapy layer for HIFU systems in India.",
                    "Enables licensing opportunity with global ultrasound device OEMs.",
                    "Forms foundation for adaptive immuno-ablative combination protocols.",
                  ]}
                />
              </div>
            </div>
          </SlideShell>
        ),
      },
      {
        key: "competitive",
        view: (
          <SlideShell
            title="Competitive Landscape"
            subtitle="Smart adaptive HIFU delivers measurable performance advantages over conventional open-loop platforms."
          >
            <div className="slide-columns">
              <ComparisonGraphic />
              <div className="slide-card">
                <AnimatedList
                  items={[
                    "Only solution blending acoustic, thermal, and hemodynamic signals into a unified control loop.",
                    "Proprietary cavitation sentinel algorithm reduces retreatment rates by >=35%.",
                    "Modular sensing pod retrofits existing HIFU suites, lowering adoption barrier.",
                    "Protected IP portfolio covering adaptive energy modulation and acoustic analytics.",
                  ]}
                />
              </div>
            </div>
          </SlideShell>
        ),
      },
      {
        key: "commercialization",
        view: (
          <SlideShell
            title="Commercialization Potential"
            subtitle="Clear route-to-market anchored in clinical validation, multi-site partnerships, and integrator alliances."
          >
            <div className="slide-columns">
              <div className="slide-card">
                <AnimatedList
                  items={[
                    "Primary adopters: oncology centers, robotic surgery suites, high-volume radiology hubs.",
                    "Integrated training academy for sonographers and surgical oncologists.",
                    "Co-development MoUs with MedSono Labs and Bharat Imaging Systems.",
                    "Recurring revenue via software-as-a-service monitoring and hardware subscription.",
                  ]}
                />
              </div>
              <EcosystemDiagram />
            </div>
          </SlideShell>
        ),
      },
      {
        key: "roadmap",
        view: (
          <SlideShell
            title="Work Plan & Roadmap"
            subtitle="Disciplined quarter-wise plan delivering regulatory-grade evidence and commercialization readiness."
          >
            <RoadmapTimeline />
          </SlideShell>
        ),
      },
      {
        key: "budget",
        view: (
          <SlideShell
            title="Budget Distribution"
            subtitle="Strategic allocation supports rapid prototyping, evidence generation, and translational deployment."
          >
            <BudgetPieChart />
          </SlideShell>
        ),
      },
      {
        key: "closing",
        view: (
          <SlideShell
            title="Thank You"
            subtitle="We welcome the opportunity to partner on advancing safer, smarter tumor ablation therapies."
            footerNote="Contact: research@medsono.ai | www.medsono.ai/hifu"
          >
            <div
              style={{
                display: "grid",
                gap: "18px",
                justifyItems: "center",
                textAlign: "center",
                alignContent: "center",
              }}
            >
              <div
                className="fade-intro"
                data-delay="1"
                style={{
                  fontSize: "14pt",
                  fontWeight: 700,
                  color: "rgba(13,107,168,0.85)",
                }}
              >
                Empowering clinicians with intelligent acoustic guidance.
              </div>
              <div
                className="fade-intro"
                data-delay="2"
                style={{ maxWidth: "60ch", fontSize: "12pt" }}
              >
                Together, we can translate adaptive ultrasound science into
                patient-ready oncology solutions delivering precision, safety,
                and scalability.
              </div>
            </div>
          </SlideShell>
        ),
      },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  const goPrevious = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(totalSlides - 1, prev + 1));
  }, [totalSlides]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "PageDown") {
        event.preventDefault();
        goNext();
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        goPrevious();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrevious]);

  return (
    <main className="deck-wrapper" role="presentation">
      <div className="slide-stage" aria-live="polite">
        {slides[currentIndex]?.view}
      </div>
      <div className="nav-controls">
        <span className="progress-indicator">
          Slide {currentIndex + 1} of {totalSlides}
        </span>
        <div className="nav-buttons">
          <button
            className="nav-button"
            onClick={goPrevious}
            disabled={currentIndex === 0}
            type="button"
          >
            Previous
          </button>
          <button
            className="nav-button"
            onClick={goNext}
            disabled={currentIndex === totalSlides - 1}
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}
