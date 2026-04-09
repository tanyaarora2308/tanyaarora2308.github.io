import React from 'react'
import { Fade } from "react-awesome-reveal";
import "../../styles/Style.css";
import jpmcLogo from '../../Images/jpmc.jpg';
import barclaysLogo from '../../Images/barclays.jpg';

const Work = () => {
    return (
        <>
        <Fade duration="3000" >
        <div className="work-container" id="Section_Work">
                <div className="work" >
                    <h2 class="about-me"><span style={{color: "var(--green)"}}>04.</span><span style={{paddingRight:"5%"}}>Work Experience</span></h2><br/>
                    <div style={{marginBottom: "2rem", display: "flex", alignItems: "flex-start", gap: "1.5rem"}}>
                        <div className="work-logo" style={{minWidth: "70px", height: "70px", backgroundColor: "#f5f5f5", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: "0.5rem"}}>
                            <img src={jpmcLogo} alt="JP Morgan Chase" style={{maxWidth: "100%", maxHeight: "100%"}} />
                        </div>
                        <div>
                            <h3 style={{color: "var(--bright-gray)", fontFamily: "'Roboto Mono', monospace", fontSize: "1.3rem", marginBottom: "0.5rem", marginTop: "0"}}>CAST (RWA & Regulatory Capital Engine)</h3>
                            <p className="about-para">Worked on CAST, a centralized platform used to compute RWA (Risk-Weighted Assets), essentially the capital a bank needs to hold based on its risk exposure. Contributed to building data enrichment and cross-product netting pipelines that aggregate exposures across systems into reliable, audit-ready outputs for regulatory reporting.</p>
                            <p className="about-para">Improved quarter-end (QE) processing time and stability by optimizing heavy SQL queries, fixing reconciliation issues, and streamlining data pipelines, bringing runtime down by ~65% (6h → 2h) and significantly reducing manual effort involved in reporting.</p>
                            <h4 style={{color: "var(--bright-gray)", fontFamily: "'Roboto Mono', monospace", fontSize: "1.1rem", marginBottom: "0.5rem", marginTop: "1.5rem"}}>Market Risk Engine (HVaR)</h4>
                            <p className="about-para">Contributed to Historical Value at Risk (HVaR) calculations - a way to estimate how much a portfolio could lose by applying past market movements to current positions, by supporting large-scale processing of multi-asset portfolios used for daily risk monitoring and reporting.</p>
                        </div>
                    </div>
                    <div style={{marginBottom: "2rem", display: "flex", alignItems: "flex-start", gap: "1.5rem"}}>
                        <div className="work-logo" style={{minWidth: "70px", height: "70px", backgroundColor: "#f5f5f5", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: "0.5rem"}}>
                            <img src={barclaysLogo} alt="Barclays" style={{maxWidth: "100%", maxHeight: "100%"}} />
                        </div>
                        <div>
                            <h3 style={{color: "var(--bright-gray)", fontFamily: "'Roboto Mono', monospace", fontSize: "1.3rem", marginBottom: "0.5rem", marginTop: "0"}}>Micro-Frontends Integration</h3>
                            <p className="about-para">Built a prototype application to demonstrate integration of micro-frontends using React and Angular into a unified UI with single-spa, and implemented server-side rendering (SSR) to evaluate performance and feasibility.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
            
        </>
    )
}

export default Work
